Page({
  data: {
    list: [{
      name: 'fade',
      color: 'primary'
    },
    {
      name: 'scale-up',
      color: 'success'
    },
    {
      name: 'scale-down',
      color: 'warning'
    },
    {
      name: 'slide-top',
      color: 'danger'
    }, {
      name: 'slide-bottom',
      color: 'primary'
    },
    {
      name: 'slide-left',
      color: 'success'
    },
    {
      name: 'slide-right',
      color: 'warning'
    },
    {
      name: 'shake',
      color: 'danger'
    }
    ],
    toggleDelay: false
  },
  toggle: function (e) {
    console.log(e);
    var anmiaton = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      animation: anmiaton
    })
    setTimeout(function () {
      that.setData({
        animation: ''
      })
    }, 1000)
  },
  toggleDelay: function () {
    var that = this;
    that.setData({
      toggleDelay: true
    })
    setTimeout(function () {
      that.setData({
        toggleDelay: false
      })
    }, 1000)
  }
})