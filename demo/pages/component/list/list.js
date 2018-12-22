const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    skin: false
  },
  switchSex: function(e) {
    this.setData({
      skin: e.detail.value
    });    
  },
})