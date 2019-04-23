Page({
  data: {
    PageCur: 'basics'
  },
  onLoad() {
    // 插屏广告

    // let intersitialAd = wx.createInterstitialAd({
    //   adUnitId: 'adunit-53f251ff1944e719'
    // })
    // intersitialAd.show().catch(err => console.log(err.errMsg)) 
  },
  NavChange(e) {
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  },
  onShareAppMessage() {
    return {
      title: 'ColorUI-高颜值的小程序UI组件库',
      imageUrl: '/images/share.jpg',
      path: '/pages/index/index'
    }
  },
})