const app = getApp();
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    loadProgress:0
  },
  isLoading (e) {
    this.setData({
      isLoad: e.detail.value
    })
  },
  loadModal () {
    this.setData({
      loadModal: true
    })
    setTimeout(()=> {
      this.setData({
        loadModal: false
      })
    }, 2000)
  },
  loadProgress(){
    this.setData({
      loadProgress: this.data.loadProgress+3
    })
    if (this.data.loadProgress<100){
      setTimeout(() => {
        this.loadProgress();
      }, 100)
    }else{
      this.setData({
        loadProgress: 0
      })
    }
  }
});
