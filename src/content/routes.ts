export interface RouteMeta {
  path: string
  title: string
  description: string
}

/** Canonical origin. The apex redirects here, so links and the sitemap use it. */
export const origin = 'https://www.argonrobotics.ai'

export const routeMeta: RouteMeta[] = [
  {
    path: '/',
    title: 'Argon Robotics — Robots, at superhuman speed.',
    description:
      'Argon Robotics trains and deploys models that operate robots at superhuman speeds for a diverse set of tasks.',
  },
  {
    path: '/careers',
    title: 'Open roles — Argon Robotics',
    description:
      'We hire people who would be the best engineer on any team in the world. Three open roles in San Francisco and Bengaluru.',
  },
]

export function metaForPath(path: string): RouteMeta {
  const normalised = path.length > 1 ? path.replace(/\/$/, '') : path
  return routeMeta.find((route) => route.path === normalised) ?? routeMeta[0]
}
