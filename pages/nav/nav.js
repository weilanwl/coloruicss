// pages/element/bar/bar.js
Page({
  data: {
    nav: [
      { title: '可滚动', name: 'norm' },
      { title: '居中', name: 'center' },
      { title: '深色', name: 'success' },
      { title: '带菜单', name: 'menu' },
      { title: '图标导航', name: 'icon' }
    ],
    navName: 'norm'
  },
  navScroll: function (e) {
    var sl = e.detail.scrollLeft * 0.1;
    this.setData({
      scrollleft: sl
    })
  },
  setName: function (e) {
    this.setData({
      navName: e.currentTarget.dataset.name
    })
  }
})