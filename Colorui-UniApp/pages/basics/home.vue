<template name="basics">
	<view>
		<scroll-view scroll-y class="page">
			<image src="https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358228-assets/web-upload/e256b4ce-d9a4-488b-8da2-032747213982.png"
			 mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class="none" :url="'/pages/basics/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
				 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
					<view class="nav-title">{{item.title}}</view>
					<view class="nav-name">{{item.name}}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</navigator>
			</view>
			<view class="cu-tabbar-height"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name: "basics",
		data() {
			return {
				elements: [{
						title: '布局',
						name: 'layout',
						color: 'cyan',
						cuIcon: 'newsfill'
					},
					{
						title: '背景',
						name: 'background',
						color: 'blue',
						cuIcon: 'colorlens'
					},
					{
						title: '文本',
						name: 'text',
						color: 'purple',
						cuIcon: 'font'
					},
					{
						title: '图标 ',
						name: 'icon',
						color: 'mauve',
						cuIcon: 'cuIcon'
					},
					{
						title: '按钮',
						name: 'button',
						color: 'pink',
						cuIcon: 'btn'
					},
					{
						title: '标签',
						name: 'tag',
						color: 'brown',
						cuIcon: 'tagfill'
					},
					{
						title: '头像',
						name: 'avatar',
						color: 'red',
						cuIcon: 'myfill'
					},
					{
						title: '进度条',
						name: 'progress',
						color: 'orange',
						cuIcon: 'icloading'
					},
					{
						title: '边框阴影',
						name: 'shadow',
						color: 'olive',
						cuIcon: 'copy'
					},
					{
						title: '加载',
						name: 'loading',
						color: 'green',
						cuIcon: 'loading2'
					}
				],
			};
		},
		onShow() {
			console.log("success")
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
