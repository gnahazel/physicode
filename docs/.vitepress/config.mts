import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Physicode",
  description: "Dein digitales Lehrbuch",
  base: '/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    footer: {
      message: [
        '<a href="/apps">More apps</a>',
        '<a href="/kontakt">Kontakt</a>',
        '<a href="/impressum">Impressum</a>',
        '<a href="/datenschutz">Datenschutz</a>',
        '<a href="/links">Links</a>',
        '<a href="https://github.com/gnahazel" target="_blank" rel="noreferrer">GitHub</a>'
      ].join(' | '),

      copyright:
        'Unless stated otherwise, all content is public domain or open for educational use.'
    }
  } 
})
