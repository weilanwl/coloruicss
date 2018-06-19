// pages/element/loading/loading.js
Page({
  data: {
    loading: true
  },
  showLoading: function () {
    var that = this;
    this.setData({
      showLoading: true
    })

    setTimeout(function () {
      that.setData({
        showLoading: false
      })
    }, 2000)
  },
  // onLoad: function () {
  //   var that = this;
  //   setTimeout(function () {
  //     that.setData({
  //       loading: true
  //     })
  //   }, 3000)
  // }
})