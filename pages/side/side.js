Page({
  data: {
    radio: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '澳大利亚' },
      { name: 'TUR', value: '哈萨克斯坦' },
      { name: 'TUR', value: '法国' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' }
    ],
  },
  showModal: function (e) {
    var showName = e.currentTarget.dataset.modal;
    this.setData({
      modalName: showName
    })
  },
  closeModal: function (e) {
    this.setData({
      modalName: null
    })
  }
})