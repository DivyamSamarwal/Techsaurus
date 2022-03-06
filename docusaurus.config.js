module.exports = {
  title: 'AutoBot',
  tagline: 'A multi-functional discord bot.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/auto.ico',
  organizationName: 'AutoBot Inc.', // Usually your GitHub org/user name.
  projectName: 'Autobot', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'AutoBot',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
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
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'About Developer',
              href: 'https://linktr.ee/DivyamSamarwal',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/nUFxsaGMQq',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/DivyamSamarwal',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/DivyamSamarwal/Autobot',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} AutoBot, Inc. Built with Discord.py`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
