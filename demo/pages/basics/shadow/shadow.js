const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },
  SetSize(e) {
    this.setData({
      size: e.detail.value
    })
  },
});
