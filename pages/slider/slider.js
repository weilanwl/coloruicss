// pages/document/slider/slider.js
Page({
  data: {  
    scrollInto: 0,
    scrollList: [
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '1' },
      { id: '2' },
      { id: '3' },
      { id: '4' },
      { id: '1' },
      { id: '2' }]
  },
  scrollLeft: function (e) {
    var into = this.data.scrollInto;
    var length = this.data.scrollList.length;
    if (into > 0) {
      this.setData({
        scrollInto: into - 1,
      })
    } else {
      this.setData({
        scrollInto: length - 3,
      })
    }
  },
  scrollRight: function (e) {
    var into = this.data.scrollInto;
    if (into < this.data.scrollList.length - 3) {
      this.setData({
        scrollInto: into + 1,
      })
    } else {
      this.setData({
        scrollInto: 0,
      })
    }
  },
})