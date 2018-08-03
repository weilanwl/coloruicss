var app = getApp()
Page({

  data: {
    // 全屏图标导航
    showFullNavigation: false,
    navigation1: [
      { name: 'Color UI', src: '/images/icon.jpg' },
      { name: 'Color UI', src: '/images/icon.jpg' },
      { name: 'Color UI', src: '/images/icon.jpg' },
      { name: 'Color UI', src: '/images/icon.jpg' },
      { name: 'Color UI', src: '/images/icon.jpg' },
      { name: 'Color UI', src: '/images/icon.jpg' },
      { name: 'Color UI', src: '/images/icon.jpg' },
      { name: 'Color UI', src: '/images/icon.jpg' },
    ],
    // 下部弹出导航
    showBottomNavigation: false,
    navigation2: [
      { name: 'Color UI', src: '/images/icon.jpg' },
      { name: 'Color UI', src: '/images/icon.jpg' },
      { name: 'Color UI', src: '/images/icon.jpg' },
      { name: 'Color UI', src: '/images/icon.jpg' },
    ],
    // 左滑删除部分的js
    showLeftScroll:false,
    startX: 0, 
    startY: 0,
    fakeDatas: [
      {
        title:'向左滑动，查看效果',
      },
    ],
  },
  clickFullNavigation: function () {
    this.setData({
      showFullNavigation: !this.data.showFullNavigation
    }) 
  },
  clickBottomNavigation: function () {
    this.setData({
      showBottomNavigation: !this.data.showBottomNavigation
    })
  },
  clickLeftScroll: function () {
    this.setData({
      showLeftScroll: !this.data.showLeftScroll
    })
  },
  modify: function () {
    wx.showToast({
      title: '修改成功',
    })
  },
  del: function () {
    wx.showModal({
      title: '提示',
      content: '确定要删除这条信息？',
      success: function (res) {
        wx.showToast({
          title: '删除成功',
        })
      }
    })
  },
  // 左滑删除部分的js

  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.fakeDatas.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      fakeDatas: this.data.fakeDatas
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.fakeDatas.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      fakeDatas: that.data.fakeDatas
    })
  },

// 计算滑动角度
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },
})