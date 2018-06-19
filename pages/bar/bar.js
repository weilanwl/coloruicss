// pages/element/bar/bar.js
Page({
  data: {
    nav: [
      { title: '标题 + 图标', name: 'normIcon' },
      { title: '浮动在顶部', name: 'topfix' },
      { title: '颜色', name: 'background' },
      { title: '居中的标题', name: 'center' },
      { title: '搜索 + 按钮', name: 'serach' },
      { title: '头像 + 搜索（跳转）+ 城市', name: 'serachRound' },
      { title: '浮动在底部', name: 'bottomfix' },
      { title: '浮动在底部的方形按钮组', name: 'bottomfixBtns' },
      { title: '浮动在底部的输入框', name: 'bottomfixInput' }
    ],
    barName: 'normIcon'
  },
  setName: function (e) {
    this.setData({
      barName: e.currentTarget.dataset.name
    })
  }
})