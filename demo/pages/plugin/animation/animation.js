const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    list: [{
        name: 'fade',
        color: 'red'
      },
      {
        name: 'scale-up',
        color: 'orange'
      },
      {
        name: 'scale-down',
        color: 'olive'
      },
      {
        name: 'slide-top',
        color: 'green'
      }, {
        name: 'slide-bottom',
        color: 'cyan'
      },
      {
        name: 'slide-left',
        color: 'blue'
      },
      {
        name: 'slide-right',
        color: 'purple'
      },
      {
        name: 'shake',
        color: 'mauve'
      }
    ],
    toggleDelay: false
  },
  toggle(e) {
    console.log(e);
    var anmiaton = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      animation: anmiaton
    })
    setTimeout(function() {
      that.setData({
        animation: ''
      })
    }, 1000)
  },
  toggleDelay() {
    var that = this;
    that.setData({
      toggleDelay: true
    })
    setTimeout(function() {
      that.setData({
        toggleDelay: false
      })
    }, 1000)
  }
})