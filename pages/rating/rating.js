
Page({
  data: {
    rating: [{
      id: 0,
      title: '描述相符',
      scores: 0,
    }, {
      id: 1,
      title: '物流服务',
      scores: 0,
    }, {
      id: 2,
      title: '服务态度',
      scores: 0,
    }]
  },
  onLoad: function (options) {

  },
  setScores: function (e) {
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    this.data.rating[id].scores = index;
    this.setData({
      rating: this.data.rating
    })
  }
})