const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar
  },
  isLoading (e) {
    this.setData({
      isLoad: e.detail.value
    })
  },
});
