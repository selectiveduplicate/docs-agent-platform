// @ts-check
// AI Gateway next documentation, built on its own from this branch.
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Gateway next Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
    faster: false,
  },

  url: 'https://wso2.com',
  // Override with BASE_URL to build for another environment.
  baseUrl: process.env.BASE_URL || '/agent-platform/docs/ai-gateway/next/',

  organizationName: 'wso2',
  projectName: 'docs-agent-platform',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/wso2/docs-agent-platform/tree/ai-gateway-next/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        title: 'AI Gateway next',
        logo: {
          alt: 'WSO2 Agent Manager',
          src: 'img/WSO2 Agent Manager Logo_Black.svg',
          srcDark: 'img/WSO2 Agent Manager Logo_white.svg',
        },
        items: [
          {href: 'https://github.com/wso2/docs-agent-platform', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'light',
        copyright: `© ${new Date().getFullYear()} WSO2 LLC.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'yaml', 'python', 'java', 'go'],
      },
    }),
};

export default config;
