Page({
  data: {
    PageCur: 'basics'
  },
  NavChange(e){
    this.setData({
      PageCur: e.currentTarget.dataset.cur
    })
  }
})