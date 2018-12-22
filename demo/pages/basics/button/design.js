const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  SetRound (e) {
    this.setData({
      round: e.detail.value
    })
  },
  SetSize(e) {
    this.setData({
      size: e.detail.value
    })
  },
  SetColor(e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },
  SetShadow(e) {
    this.setData({
      shadow: e.detail.value
    })
  },
  SetBorder(e){
    this.setData({
      border: e.detail.value
    })
    if (!e.detail.value){
      this.setData({
        bordersize: false
      })
    }
  },   
  SetBorderSize(e) {
    this.setData({
      bordersize: e.detail.value
    })
  },
  SetBlock(e) {
    this.setData({
      block: e.detail.value
    })
  },  
});
