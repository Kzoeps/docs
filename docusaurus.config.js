// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/palenight');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EverShop',
  titleDelimiter: ' - ',
  tagline: 'NodeJS ecommerce platform with essential commerce features. Built with React, modular and fully customizable',
  url: 'https://evershop.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'evershopcommerce', // Usually your GitHub org/user name.
  projectName: 'evershop', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/evershopcommerce/docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/evershopcommerce/docs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        googleAnalytics: {
          trackingID: 'G-NL5DS5R8SM',
          // Optional fields.
          anonymizeIP: true, // Should IPs be anonymized?
        },
        gtag: {
          trackingID: 'G-NL5DS5R8SM',
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'A GraphQL Based and NodeJS ecommerce platform',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'development/getting-started/introduction',
            position: 'right',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'api/overview',
            position: 'right',
            label: 'API',
          },
          {
            href: 'https://discord.com/invite/GSzt7dt7RM',
            label: 'Discord',
            position: 'right',
          },
          {
            href: '/contact-us',
            position: 'right',
            label: 'Contact Us',
          },
          {
            type: 'doc',
            docId: 'development/getting-started/installation-guide',
            position: 'right',
            label: 'Get Started',
            className: 'button button--primary'
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            items: [
              {
                label: 'License',
                to: 'https://github.com/evershopcommerce/evershop/blob/main/LICENSE',
              },
              {
                label: 'Code of Conduct',
                to: '/code-of-conduct',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/GSzt7dt7RM',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Evershop.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [{ name: 'og:image', content: 'https://evershop.io/img/social-card.jpg' }]
    }),
};

module.exports = config;
