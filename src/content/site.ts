export interface Role {
  title: string
  blurb: string
  meta: string
  href: string
}

export const site = {
  name: 'Argon Robotics',
  tagline: 'Robots, at superhuman speed.',
  subhead:
    'For three hundred years we have built machines that outrun us: the loom, the engine, the press. But only a hand knew what to do next, so we built the fast parts and throttled them to our own wrists. That changes now.',
  email: 'hello@argonrobotics.ai',
  careersEmail: 'careers@argonrobotics.ai',
  location: 'Bengaluru',
  year: new Date().getFullYear(),
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
