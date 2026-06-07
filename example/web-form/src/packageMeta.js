import rootPackage from '../../../package.json';

export const LINKS = {
  demo: 'https://multi-nation-input.netlify.app/',
  github: 'https://github.com/vikashwebb/multi-nation-input',
  npm: 'https://www.npmjs.com/package/multi-nation-input',
};

export const PACKAGE_META = {
  name: rootPackage.name,
  version: rootPackage.version,
  description: rootPackage.description,
  license: rootPackage.license,
  author: rootPackage.author,
  npmUrl: LINKS.npm,
  githubUrl: LINKS.github,
  demoUrl: import.meta.env.VITE_DEMO_URL || LINKS.demo,
  installCommand: `npm install ${rootPackage.name}`,
  features: [
    '126 countries',
    'Country search',
    'Per-country validation',
    'React Native + Web',
    'TypeScript types',
  ],
};

export function getDemoUrl() {
  return PACKAGE_META.demoUrl || LINKS.demo;
}
