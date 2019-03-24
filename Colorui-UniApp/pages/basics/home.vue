<template>
	<view>
		<image src="https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358228-assets/web-upload/e256b4ce-d9a4-488b-8da2-032747213982.png" mode="widthFix" class="response"></image>	
		<view class="nav-list">
			<navigator hover-class="none" :url="'/pages/basics/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
			 :style="[{animation: 'show ' + ((index+1)*0.2+1) + 's 1'}]" v-for="(item,index) in elements" :key="index">
				<view class="nav-title">{{item.title}}</view>
				<view class="nav-name">{{item.name}}</view>
				<text :class="'icon-' + item.icon"></text>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				elements: [{
						title: '布局',
						name: 'layout',
						color: 'cyan',
						icon: 'newsfill'
					},
					{
						title: '背景',
						name: 'background',
						color: 'blue',
						icon: 'colorlens'
					},
					{
						title: '文本',
						name: 'text',
						color: 'purple',
						icon: 'font'
					},
					{
						title: '图标 ',
						name: 'icon',
						color: 'mauve',
						icon: 'icon'
					},
					{
						title: '按钮',
						name: 'button',
						color: 'pink',
						icon: 'btn'
					},
					{
						title: '标签',
						name: 'tag',
						color: 'brown',
						icon: 'tagfill'
					},
					{
						title: '头像',
						name: 'avatar',
						color: 'red',
						icon: 'myfill'
					},
					{
						title: '进度条',
						name: 'progress',
						color: 'orange',
						icon: 'icloading'
					},
					{
						title: '边框阴影',
						name: 'shadow',
						color: 'olive',
						icon: 'copy'
					},
					{
						title: '加载',
						name: 'loading',
						color: 'green',
						icon: 'loading2'
					}
				],
			};
		}
	}
</script>

<style>

</style>
