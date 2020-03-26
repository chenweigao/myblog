module.exports = {
  "title": "weigao chen",
  "description": "less is more",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.png"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'chtml',
        macros: {
          '*': '\\times',
        },
      },
      '@vuepress/active-header-links',
      '@vuepress-reco/extract-code',
    ],
  ],
  "theme": "reco",
  "themeConfig": {
    huawei: true,
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "Email",
            "link": "mailto:mail@weigao.cc",
            "icon": "reco-mail"
          },
          {
            "text": "GitHub",
            "link": "https://github.com/chenweigao",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "weigao-blog",
        "desc": "上个版本的博客，疏于维护",
        "email": "mail@weigao.cc",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "weigaochen",
    "authorAvatar": "/avatar.png",
    "record": "Huawei Cloud & Xidian University",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}