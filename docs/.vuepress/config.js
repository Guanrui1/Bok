module.exports = {
  base: '/github/',
  title: 'UPMS后台文档',
  description: '123',
  themeConfig: {
    lastUpdated: '上次更新',
    logo: '/banner.png',
    sidebar: [
      ['/page-a', 'VolTable']
    ],
    nav: [
      { text: '首页', link: '/' },
      { text: '百度一下', link: 'https://www.baidu.com/' },
      {
        text: '框架',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'iview', link: 'https://www.iviewui.com/docs/introduce' },
          { text: 'elementui', link: 'https://element.eleme.cn/#/zh-CN/component/installation' }
        ]
      }
    ]
  }
}