// Site-wide facts used by build.mjs for head tags, structured data, sitemap.xml and llms.txt.
// Article titles, dates and authors come from each article's own HTML; add a description here only to override
// the article's first sentence.
export const SITE = 'https://www.argonrobotics.ai';

export const ORG = {
  name: 'Argon Robotics',
  description: 'Argon Robotics is digitizing the physical world for robot learning. Makers of Alloy, an open-source physics engine for robot learning.',
  logo: `${SITE}/favicon-a.svg`,
  sameAs: ['https://github.com/argonrobotics-ai'],
};

const ALLOY_APP = {
  '@type': 'SoftwareApplication',
  name: 'Alloy',
  alternateName: 'alloy-engine',
  description: 'A multi-material, parallel physics engine for robot learning, from Argon Robotics.',
  url: 'https://alloy.argonrobotics.ai',
  applicationCategory: 'DeveloperApplication',
  license: 'https://www.apache.org/licenses/LICENSE-2.0',
  sameAs: ['https://github.com/argonrobotics-ai/alloy', 'https://pypi.org/project/alloy-engine/'],
};

export const posts = [
  { id: 'vision', description: 'Vision memo from Argon Robotics: everything that has been digitised has been learned, but the digital world captures less than 0.001% of the physical one.' },
  { id: 'simreal', description: 'Can you tell which robot frames are real? Ten frames from the same robot stations, some from the real robot and some from the Argon Robotics simulation of it.' },
  { id: 'speed', description: 'Speed is the final frontier that needs to be unlocked before robots can assist humans in the real world.' },
  { id: 'sim-to-real', description: 'With GPT-6 Astra one-shotting 3D scenes, simulation is all the hype. But a simulator works only if whatever happens inside it would happen outside, thousands of times over.' },
  {
    id: 'alloy',
    description: 'The Alloy physics engine from Argon Robotics: rigid bodies, cloth, cables, liquids, sand and soft bodies in thousands of parallel worlds on one GPU. Open source; pip install alloy-engine.',
    about: ALLOY_APP,
  },
];

export const ALLOY_LINKS = [
  ['Alloy', 'https://alloy.argonrobotics.ai', 'the Alloy physics engine from Argon Robotics: site and videos'],
  ['Docs', 'https://alloy.argonrobotics.ai/docs/', 'install, quick start, guides, API reference'],
  ['How Alloy compares', 'https://alloy.argonrobotics.ai/docs/compare/', 'Alloy next to other robot simulators'],
  ['FAQ', 'https://alloy.argonrobotics.ai/docs/faq/', 'common questions about Alloy'],
  ['GitHub', 'https://github.com/argonrobotics-ai/alloy', 'source code, Apache-2.0'],
  ['PyPI', 'https://pypi.org/project/alloy-engine/', 'pip install alloy-engine'],
];
