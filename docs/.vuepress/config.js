module.exports = {
  base: '/github/',
  title: 'Hello world',
  description: '123',
  themeConfig: {
    lastUpdated: 'Last Updated',
    logo: '/home.png',
    sidebar: [
      ['/page-a', '页面A'],
      ['/page-b', '页面B']
    ],
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
    ]
  }
}