//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    desc: { image: '/images/index.png', text: '鲜亮的高饱和色彩，专注视觉的小程序组件库' },
    elements: [
      { title: '布局', name: 'layout' },
      { title: '按钮', name: 'button' },
      { title: '徽章', name: 'badge' },
      { title: '边框', name: 'border' },
      { title: '文本', name: 'text' },
      { title: '图标 ', name: 'icon' },
      { title: '加载', name: 'loading' },
      { title: '图片 ', name: 'image' },
    ],
    modules: [
      { title: '操作条', name: 'bar' },
      { title: '表单', name: 'form' },
      { title: '导航条 ', name: 'nav' },
      { title: '列表项', name: 'item' },
      { title: '列表 ', name: 'list' },
      { title: '侧边栏', name: 'side' },
      { title: '评论 ', name: 'comment' },
      { title: '时间线', name: 'timeline' },
      { title: '轮播 ', name: 'slider' },
      { title: '评分', name: 'rating' },
      { title: '弹出框 ', name: 'modal' },
      { title: '进度条 ', name: 'progress' },
      { title: '聊天 ', name: 'chat' },
    ],
    userinfo: []
  },

  onLoad: function () {

  }
})
