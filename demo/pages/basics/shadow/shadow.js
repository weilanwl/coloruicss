const app = getApp();
Page({
  SetSize(e) {
    this.setData({
      size: e.detail.value
    })
  }
})
