export interface Clip {
  src: string
  poster: string
  /** Seconds after clip start at which the hand-over completes. */
  completeAt: number
  label: string
  /** Second tag on the panel, e.g. how the clip relates to training. */
  tag?: string
}

export interface Role {
  title: string
  blurb: string
  meta: string
  href: string
}

export const site = {
  name: 'Argon Robotics',
  tagline: 'Robots, at superhuman speed.',
  visionLead:
    'The world should run at the speed of its machines, not the speed of the hands that taught them.',
  email: 'hello@argonrobotics.ai',
  careersEmail: 'careers@argonrobotics.ai',
  location: 'Bengaluru',
  year: new Date().getFullYear(),
}

export const paper = {
  status: 'Coming soon',
  meta: 'Paper · code · eval logs',
  floater:
    'How we train policies that run 10× faster than the demonstrations they learned from',
  title:
    'Training robot policies that execute 10× faster than the demonstrations they were trained on.',
  body:
    'The full write-up, the code and the evaluation logs are on their way.',
  notify: {
    headline: 'Be the first to know how the world will run.',
    body: 'One email when the paper, the code and the logs are out. Nothing else, ever.',
    placeholder: 'you@yourlab.com',
    button: 'Notify me',
    done: 'You are on the list.',
    doneBody: 'We will write once, when it is out.',
    invalid: 'That does not look like an email address.',
    error: 'That did not go through. Try again, or write to hello@argonrobotics.ai.',
  },
}

const media = (file: string) => `${import.meta.env.BASE_URL}media/${file}`

export const clips: { teleop: Clip; autonomous: Clip } = {
  teleop: {
    src: media('teleop-standin-1x.mp4'),
    poster: media('teleop-standin-1x.jpg'),
    completeAt: 40.6,
    label: 'Human teleop · 1×',
  },
  autonomous: {
    src: media('autonomous-6x.mp4'),
    poster: media('autonomous-6x.jpg'),
    completeAt: 9.9,
    label: 'Autonomous · 1×',
  },
}

export const hiring = {
  headline: 'The bar is high, and it does not move.',
  careersHeadline: 'Open roles',
  careersIntro:
    'Three seats. Each one goes to someone who makes the rest of the team faster.',
  paragraphs: [
    'We hire people who would be the best engineer on any team in the world, then put them in a room with others who are.',
  ],
}

export const roles: Role[] = [
  {
    title: 'Research Scientist, Policy Learning',
    blurb: 'Train the policies that run 10× past their demonstrations.',
    meta: 'San Francisco · On-site · Full-time',
    href: 'mailto:careers@argonrobotics.ai?subject=Research%20Scientist%2C%20Policy%20Learning',
  },
  {
    title: 'Robotics Engineer, Real-Time Control',
    blurb: 'Close the loop from model output to motor, at kilohertz.',
    meta: 'San Francisco · On-site · Full-time',
    href: 'mailto:careers@argonrobotics.ai?subject=Robotics%20Engineer%2C%20Real-Time%20Control',
  },
  {
    title: 'Member of Technical Staff, Data & Evals',
    blurb: 'Own the data engine, from capture on the robot to the eval that decides what ships.',
    meta: 'Bengaluru · On-site · Full-time',
    href: 'mailto:careers@argonrobotics.ai?subject=Member%20of%20Technical%20Staff%2C%20Data%20%26%20Evals',
  },
]
