<template name="components">
	<view>
		<scroll-view scroll-y class="page">
			<image src="/static/componentBg.png" mode="widthFix" class="response"></image>
			<view class="nav-list">
				<navigator hover-class='none' :url="'/pages/component/' + item.name" class="nav-li" navigateTo :class="'bg-'+item.color"
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
		data() {
			return {
				elements: [{
						title: '操作条',
						name: 'bar',
						color: 'purple',
						cuIcon: 'vipcard'
					},
					{
						title: '导航栏 ',
						name: 'nav',
						color: 'mauve',
						cuIcon: 'formfill'
					},
					{
						title: '列表',
						name: 'list',
						color: 'pink',
						cuIcon: 'list'
					},
					{
						title: '卡片',
						name: 'card',
						color: 'brown',
						cuIcon: 'newsfill'
					},
					{
						title: '表单',
						name: 'form',
						color: 'red',
						cuIcon: 'formfill'
					},
					{
						title: '时间轴',
						name: 'timeline',
						color: 'orange',
						cuIcon: 'timefill'
					},
					{
						title: '聊天',
						name: 'chat',
						color: 'green',
						cuIcon: 'messagefill'
					},
					{
						title: '轮播',
						name: 'swiper',
						color: 'olive',
						cuIcon: 'album'
					},
					{
						title: '模态框',
						name: 'modal',
						color: 'grey',
						cuIcon: 'squarecheckfill'
					},
					{
						title: '步骤条',
						name: 'steps',
						color: 'cyan',
						cuIcon: 'roundcheckfill'
					}
				],
			};
		}
	}
</script>

<style>
	.page {
		height: 100vh;
	}
</style>
