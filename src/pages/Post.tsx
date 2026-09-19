import { DataTable } from '../components/DataTable'
import { finalTable, interventionTable, post, speedupTable } from '../content/post'
import './Post.css'

/** Text is transcribed verbatim from the source document; do not reword. */
export function Post() {
  return (
    <article className="post">
      <header className="post__head">
        <h1 className="post__title">{post.title}</h1>
      </header>

      <div className="post__body">
        <p className="post__lede">{post.lede}</p>

        <p>
          Speeding up robots is a chicken-and-egg problem: you need deployments in the real
          world to collect data and iterate on models, but you need fast models in the first
          place to provide enough economic value to earn those deployments.
        </p>

        <p>
          Several companies like Physical Intelligence, Skild AI, Generalist AI, Reward AI have
          shown impressive demos of their models working at impressive speeds, but the
          fundamental lever behind that is very fast demonstration data, which does not hold
          once you start scaling a fleet into the real world. We have spent the past few months
          deploying across various industries, and here is what we, along with several other
          companies actually deploying robots on the ground, have seen.
        </p>

        <h2>Why is deployment data slow?</h2>

        <p>
          Operators in live deployments run two to four times slower than operators in demo
          setups, for a few key reasons:
        </p>

        <ol>
          <li>
            <strong>Assistance has to be remote to scale.</strong> Sending an operator to every
            site breaks before you reach even a hundred deployments. Remote operation lets one
            office of trained operators serve many sites without downtime, which makes it the
            only viable path to human-assisted deployment at scale. Remote teleoperation is
            slower because it is hard to perceive depth intuitively from camera views; building
            a 3D environment inside a Meta Quest is a good technical solution, but nobody can
            use one for more than an hour without feeling nauseated.
          </li>
          <li>
            <strong>The control interface differs.</strong> Many demo datasets use leader
            follower arms, which tie operator speed to physical arm speed. Deployments need
            dynamic speed adjustment like going slower near humans and fragile objects, for
            safety, etc. Most deployments we have seen use Meta Quest controllers, which track
            the operator's hand and move the arm accordingly.
          </li>
          <li>
            <strong>There is no predictability.</strong> Demo scenes are structured and
            learnable, so operators can act before they think. In a real deployment, an operator
            has to react to live cues, which is inherently slower.
          </li>
        </ol>

        <h2>Why is slow data a problem?</h2>

        <p>Slow teleoperation hurts deployment and scaling in two ways:</p>

        <ol>
          <li>
            <strong>Weak learning signal.</strong> Current robotics policies work by predicting
            the next chunk of actions. Data in which most of the motion is idle, or does not
            contain significant movement, carries poor information for a policy to learn from.
            We have seen this directly in our training runs: policies trained on such data are
            not only slower but usually less accurate, because each next-chunk prediction offers
            little progress toward completing the task.
          </li>
          <li>
            <strong>Economics.</strong> When a policy or a teleoperator runs significantly
            slower than a human, it becomes impossible to create economic value for the end
            customer especially in environments such as kitchens and warehouses, which have been
            optimised around humans doing tasks quickly and efficiently.
          </li>
        </ol>

        <p>
          Over the past six months we have run policies in live deployments and focused our
          engineering and research effort on making policies run faster than the teleoperation
          data they were trained on, so that we can deploy our robots at scale. We have found
          three levers that make policies faster while maintaining accuracy:
        </p>

        <h3>1. Adaptive speed-up of the training data</h3>

        <p>
          The simplest approach you could think of is to speed up the training data and then
          train a model on it. Unfortunately, that works poorly in practice: you lose a lot of
          key information when you discard frames from the data you collect. Uniformly dropping
          every other frame (2x) took success from <strong>94%</strong> to <strong>53%</strong>,
          and at 4x uniform it collapsed to <strong>9%</strong> for plate picking, handover
          between arms and release. The failures concentrated at the grasp and the release,
          exactly where the discarded frames carried the most information.
        </p>

        <p>
          A better and more effective approach, also observed by many others in the field, is to
          treat the motion of the arms as two separate parts: free-space motion, where the arms
          are travelling toward their target region, and contact-rich motion, where the arms are
          interacting with the real world. Free-space motion contains far less information about
          manipulation than contact-rich motion, so it makes sense to speed up free-space motion
          while keeping contact-rich motion intact.
        </p>

        <p>
          Prior works such as AutoSpeed, SAILand SRIL have consistently used an RL head to
          predict contact-rich motion and perform speed-ups around it. We were able to achieve
          similar or better results without training an RL head at all, by simply treating any
          motion within x seconds of a gripper event (gripper opening or closing) as
          contact-rich motion; trying everything from 0.1 to 2 seconds.
        </p>

        <p>
          We ran hundreds of ablations at 2x, 3x, 4x, 5x and 10x, and across different
          contact-identification techniques, and saw the best results at 4x with actions within
          0.5s of gripper events being classified as contact. Beyond 4x the arm still reaches
          the object, but it arrives with too much residual velocity to close the gripper
          cleanly, and success falls off sharply.
        </p>

        <DataTable table={speedupTable} />

        <h3>2. Selective chunk skipping at inference</h3>

        <p>
          A VLA policy predicts several chunks of future actions at once. Skipping chunks makes
          the policy run faster by letting the arm jump to future states, with no retraining.
          Doing this naively causes two problems, and both of them push the policy out of
          distribution quickly:
        </p>

        <ol>
          <li>
            <strong>Far-out predictions are less accurate.</strong> The further out a chunk is,
            the less likely it is to be accurate, because the world will have changed by the
            time the first few actions have been executed. The general practice is to query the
            model often and execute only near-term chunks.
          </li>
          <li>
            <strong>Skipping causes jitter.</strong> When you skip chunks, the arm moves through
            a different distribution than the training data, and the video feed from the real
            world no longer corresponds to the training data, which takes the model out of
            distribution very quickly.
          </li>
        </ol>

        <p>
          To solve these issues, our approach after running thousands of tests in the real world
          is to estimate the risk before skipping a step. We look at the motion predicted by the
          policy and skip only if both of the following conditions hold:
        </p>

        <ol>
          <li>
            <strong>The predicted chunks sit close together in the real world.</strong> We
            measure the end-effector displacement between the last pose of the current chunk and
            the last pose of the chunk we would skip to, and require it to stay under{' '}
            <strong>x cm</strong> at 20 chunk executions per second. That threshold is not
            fixed: a VLM scores the current camera view for scene complexity i.e. clutter,
            number of movable objects, proximity of a human into 5 buckets, and we scale the
            allowed displacement from <strong>2 cm</strong> in a clean, static scene down to{' '}
            <strong>0.3 cm</strong> in a cluttered or human-occupied one. The intuition is that
            displacement is only safe if the world will still look the way the policy expects
            when the arm arrives.
          </li>
          <li>
            <strong>There must be no gripper event inside the skipping window.</strong>
          </li>
        </ol>

        <p>
          The second condition is essential. Every time we skipped chunks through a gripper
          event, the task fell apart. Restricting skips to slow, contact-free motion keeps the
          policy in distribution. With these techniques we achieve another 40–50 percent
          speed-up over our fastest policy.
        </p>

        <h3>3. DAgger-style intervention data</h3>

        <p>
          Intervention data is the most useful and most unexpected lever for speeding up a
          model. We expected it to increase accuracy which it does, at roughly 30x the per-frame
          value of ordinary teleoperation data. But with no other changes, the policy also
          gained a 10–15 percent speed-up simply from adding intervention data, sped up using
          the same techniques described above.
        </p>

        <p>
          The setup follows DAgger [cite Ross et al., 2011]. The policy runs on the robot, and
          an operator takes control the moment it starts to fail. We then speed up that
          intervention data with the same gripper-event rule from Lever 1 and retrain.
        </p>

        <p>
          For models trained at lower speeds, intervention data barely helps with speed, so
          there is effectively zero speed-up. For policies trained at a faster speed, sped-up
          intervention data helps them grow faster and faster.
        </p>

        <DataTable table={interventionTable} />

        <h3>Final results</h3>

        <p>
          Combined, the three levers let us run our policies more than four times faster than
          the data we collected from remote teleoperation. In the table below we report speed
          alongside accuracy as we add each lever:
        </p>

        <DataTable table={finalTable} />

        <p>
          <strong>Setup.</strong> All results are on a bimanual cell of two AgileX PiPER six-DoF
          arms with parallel-jaw grippers, with three RealSense cameras (one overhead, one per
          wrist) recorded at 20 fps, driven over CAN from a Jetson Orin NX 16 GB. The policy is
          π<sub>0.5</sub>, with an action chunk of 30. Training data is 10 hours of remote
          teleoperation collected in the same deployment across seven days plus around one hour
          of usable teleoperation intervention data. Each number in the tables is 500
          real-robot runs, with object positions re-randomised between runs.
        </p>

        <h3>Limitations</h3>

        <p>
          These results come from a narrow set of tasks: picking up plates and dishes, and
          picking and placing objects. We have yet to test whether the gripper-event rule and
          the 4x optimum hold across a more diverse task set. We also have no explanation yet
          for why 4x outperforms both lower and higher factors.
        </p>

        <h2>What comes next?</h2>

        <p>
          We expect our policies to soon run significantly faster than any human can control
          them, on specific tasks. To build superhuman policies, human data alone cannot get us
          there.
        </p>

        <p>
          Human intervention data plays a role in robotics similar to the one RLHF played in the
          early days of LLM post-training. The field had to move past human feedback as models
          improved, because the models began to outperform expert annotators by too wide a
          margin. Robotics will hit the same wall in six to eight months.
        </p>

        <p>
          Our next line of research is RL post-training with no humans in the loop. We plan to
          apply techniques in the GRPO and DAPO family to robot policies, with the goal of
          pushing speed beyond human capability while holding accuracy at similar levels.
        </p>
      </div>
    </article>
  )
}
