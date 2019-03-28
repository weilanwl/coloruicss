const app = getApp();
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    TabCur:0,
    tabNav: ['Flex布局', 'Grid布局', '辅助布局']
  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
})