Component({
  /**
   * 组件的一些选项
   */
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的对外属性
   */
  properties: {
    bgColor: {
      type: String,
      default: ''
    }, 
    isCustom: {
      type: [Boolean, String],
      default: false
    },
    isBack: {
      type: [Boolean, String],
      default: false
    },
    bgImage: {
      type: String,
      default: ''
    },
  },
  /**
   * 组件的初始数据
   */
  data: {
    StatusBar: 0,
    CustomBar: 0,
    Custom: {}
  },
  // 挂载
  ready() {
    // 获取系统信息 拿到自定义导航栏的高
    wx.getSystemInfo({
      success: e => {
        let StatusBar, CustomBar, Custom
        StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          Custom = capsule
          CustomBar = capsule.bottom + capsule.top - e.statusBarHeight
        } else {
          CustomBar = e.statusBarHeight + 50;
        }
        this.setData({
          StatusBar,
          CustomBar,
          Custom
        });
      }
    });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 返回
    BackPage() {
      // 分享出去的小程序卡片点开，无pages栈，兼容代码回到首页
      if (getCurrentPages().length < 2 && 'undefined' !== typeof __wxConfig) {
        let url = '/' + __wxConfig.pages[0]
        return wx.redirectTo({url})
      }
      wx.navigateBack({
        delta: 1
      });
    },
    // 回到首页
    toHome(){
      wx.redirectTo({
        url: '/pages/index/index',
      })
    }
  }
})