import rootPackage from '../../../package.json';

const GITHUB_REPO = 'https://github.com/vikashwebb/multi-nation-input';

export const PACKAGE_META = {
  name: rootPackage.name,
  version: rootPackage.version,
  description: rootPackage.description,
  license: rootPackage.license,
  author: rootPackage.author,
  npmUrl: `https://www.npmjs.com/package/${rootPackage.name}`,
  githubUrl: GITHUB_REPO,
  installCommand: `npm install ${rootPackage.name}`,
  demoUrl: import.meta.env.VITE_DEMO_URL || '',
  features: [
    '126 countries',
    'Country search',
    'Per-country validation',
    'React Native + Web',
    'TypeScript types',
  ],
};

export function getDemoUrl() {
  if (PACKAGE_META.demoUrl) {
    return PACKAGE_META.demoUrl;
  }

  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }

  return 'http://localhost:5180';
}
