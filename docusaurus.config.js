// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Middleware Dashboard',
  tagline: '',
  favicon: 'img/middleware-logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dashboard.middleware.co.nz/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Middleware NZ', // Usually your GitHub org/user name.
  projectName: 'dashboard-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/middleware-logo.png',
      navbar: {
        title: 'Dashboard',
        logo: {
          alt: 'Middleware Logo',
          src: 'img/middleware-logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'gettingStartedSidebar',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'docSidebar',
            sidebarId: 'cloudSidebar',
            position: 'left',
            label: 'Cloud',
          },
          {
            type: 'docSidebar',
            sidebarId: 'featuresSidebar',
            position: 'left',
            label: 'Features',
          },
          {
            type: 'docSidebar',
            sidebarId: 'securitySidebar',
            position: 'left',
            label: 'Security',
          },
          {
            type: 'docSidebar',
            sidebarId: 'reduxApiSidebar',
            position: 'left',
            label: 'Redux+Api',
          },
          {
            href: 'https://github.com/MiddlewareNewZealand/dashboard',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Organisation',
            items: [
              {
                label: 'Company Website',
                href: 'https://middleware.co.nz/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Dashboard GitHub',
                href: 'https://github.com/MiddlewareNewZealand/dashboard',
              },
              {
                label: 'NonProd live dashboard',
                href: 'https://dashboard.middleware.co.nz/',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Middleware Group. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.oneLight,
        darkTheme: prismThemes.oneDark,
      },
    }),
};

export default config;
