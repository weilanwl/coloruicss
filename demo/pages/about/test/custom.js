const app = getApp()

Page({
  data: {

  },
  onLoad: function () {
    wx.getSystemInfo({
      success: e => {
        let custom = wx.getMenuButtonBoundingClientRect();
        this.setData({
          StatusBar: e.statusBarHeight,
          Custom: custom,
          CustomBar: custom.bottom + custom.top - e.statusBarHeight
        })
      }
    })
  },
})
