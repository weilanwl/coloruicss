// pages/element/button/foot.js
Page({
  data: {
    ctype: '',
    clist: [],
    glo_is_load: true
  },
  onLoad: function (options) {
    var that = this
    var ctype = options.ctype;
    that.setData({
      ctype: ctype,
    })
    var this_title = '';
    if (ctype == 'foot') {
      this_title = '固定在底部'
    } else if (ctype == 'fixed') {
      this_title = '悬浮按钮'
    } 
    wx.setNavigationBarTitle({
      title: this_title
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})