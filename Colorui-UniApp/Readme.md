<p style="text-align: center;"><img src="https://image.weilanwl.com/uni/UniAppReadme.jpg" title="ColorUI简介"></img></p>

## 开始使用
下载源码解压，复制根目录的 `colorui/` 文件夹到你的根目录

`App.vue` 引入关键Css `main.css` `icon.css`
```
<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "app.css"; /* 你的项目css */
	....
</style>
```
------


## 使用自定义导航栏
`main.js` 引入 `cu-custom` 组件
```
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
```
`App.vue` 获得系统信息
```
onLaunch: function() {
	uni.getSystemInfo({
		success: function(e) {
			// #ifndef MP
			Vue.prototype.StatusBar = e.statusBarHeight;
			if (e.platform == 'android') {
				Vue.prototype.CustomBar = e.statusBarHeight + 50;
			} else {
				Vue.prototype.CustomBar = e.statusBarHeight + 45;
			};
			// #endif

			// #ifdef MP
			Vue.prototype.StatusBar = e.statusBarHeight;
			let custom = wx.getMenuButtonBoundingClientRect();
			Vue.prototype.Custom = custom;
			Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
			// #endif
		}
	})
},
```
`pages.json` 配置取消系统导航栏
```
"globalStyle": {
	"navigationStyle": "custom"
},
```
`page.vue` 页面可以直接调用了
```
<cu-custom bgColor="bg-gradual-blue" :isBack="true">
	<block slot="backText">返回</block>
	<block slot="content">导航栏</block>
</cu-custom>
```
| 参数       | 作用   |类型    |  默认值 |
| --------   | -----:  |-----:  | :----:  |
| bgColor    | 背景颜色类名 |String  |   ''    |
| isBack     | 是否开启返回 | Boolean |   false |
| bgImage    | 背景图片路径 | String  |  ''     |

| slot块       | 作用   |
| --------   | -----:  |
| backText    | 返回时的文字 | 
| content     | 中间区域 | 
| right    | 右侧区域(小程序端可使用范围很窄！)  | 

------

## 使用自定义Tabbar
这部分暂时没有封装，思路可以参考下我的源码，原理是一个主页面引入多个页面，在主页面进行切换显示。这样可以解决切换时闪烁的问题。

------

## 更新日志

 * 2019年3月28日 v2.1.2
	*  修复列表组件样式
	*  优化主样式代码
 
 * 2019年3月27日 v2.1.1
    *  新增多种扩展
    *  优化堆叠轮播图
    *  优化消息列表
	*  优化导航栏的封装
	*  修复卡片评论错位(3月27日16:32:17)

* 2019年3月25日 v2.1.0
    *  完成元素，组件移植
	*  icon文件更改名称，避免图标冲突
	*  针对不同端口做了优化