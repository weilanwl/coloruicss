<template>
	<view>
		<cu-custom bgImage="https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg" :isBack="true"><block slot="backText">返回</block>
			<block slot="content">微动画</block>
		</cu-custom>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 默认效果
			</view>
		</view>
		<view class="padding-sm">
			<view class="flex flex-wrap justify-around">
				<button class="cu-btn margin-sm basis-sm shadow" :class="['bg-' + item.color,animation==item.name?'animation-' +item.name :'']"
				 @tap="Toggle" :data-class="item.name" v-for="(item,index) in list" :key="index">{{item.name}}</button>
			</view>
		</view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 反向动画
			</view>
		</view>

		<view class="padding-sm">
			<view class="flex flex-wrap justify-around">
				<button class="cu-btn animation-reverse margin-sm basis-sm shadow" :class="['bg-' + item.color,animation==item.name+'s'?'animation-' +item.name:'']"
				 @tap="Toggle" :data-class="item.name+'s'" v-for="(item,index) in list" :key="index">{{item.name}}</button>
			</view>
		</view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 延迟执行
			</view>
			<view class="action">
				<button class="cu-btn bg-cyan shadow" @tap="ToggleDelay">开始执行</button>
			</view>
		</view>

		<view class="padding-sm">
			<view class="flex flex-wrap justify-around">
				<button class="margin-sm basis-sm shadow cu-btn" :class="['bg-' + item.color,toggleDelay?'animation-slide-bottom':'']"
				 :style="[{animationDelay: (index + 1)*0.1 + 's'}]" v-for="(item,index) in list" :key="index">0.{{index+1}}s</button>
			</view>
		</view>
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> Gif动画
			</view>
		</view>
		<view class="margin radius bg-gradual-green shadow-blur">
			<image src="https://raw.githubusercontent.com/weilanwl/ColorUI/master/demo/images/wave.gif" mode="scaleToFill" class="gif-black response" style="height:100upx"></image>
		</view>
		<view class="margin flex">
			<view class="bg-black flex-sub margin-right radius shadow-lg">
				<image src="https://image.weilanwl.com/gif/loading-black.gif" mode="aspectFit" class="gif-black response" style="height:240upx"></image>
			</view>
			<view class="bg-white flex-sub radius shadow-lg">
				<image src="https://image.weilanwl.com/gif/loading-white.gif" mode="aspectFit" class="gif-white response" style="height:240upx"></image>
			</view>
		</view>
		<view class="margin flex">
			<view class="bg-gradual-blue flex-sub margin-right radius shadow-lg">
				<image src="https://image.weilanwl.com/gif/rhomb-black.gif" mode="aspectFit" class="gif-black response" style="height:240upx"></image>
			</view>
			<view class="bg-white flex-sub radius shadow-lg">
				<image src="https://image.weilanwl.com/gif/rhomb-white.gif" mode="aspectFit" class="gif-white response" style="height:240upx"></image>
			</view>
		</view>
		<view class="margin flex">
			<view class="bg-white flex-sub margin-right radius shadow-lg">
				<image src="https://image.weilanwl.com/gif/loading-1.gif" mode="aspectFit" class="gif-white response" style="height:240upx"></image>
			</view>
			<view class="bg-black flex-sub radius shadow-lg">
				<image src="https://image.weilanwl.com/gif/loading-2.gif" mode="aspectFit" class="gif-black response" style="height:240upx"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				animation:'',
				list: [{
						name: 'fade',
						color: 'red'
					},
					{
						name: 'scale-up',
						color: 'orange'
					},
					{
						name: 'scale-down',
						color: 'olive'
					},
					{
						name: 'slide-top',
						color: 'green'
					}, {
						name: 'slide-bottom',
						color: 'cyan'
					},
					{
						name: 'slide-left',
						color: 'blue'
					},
					{
						name: 'slide-right',
						color: 'purple'
					},
					{
						name: 'shake',
						color: 'mauve'
					}
				],
				toggleDelay: false

			};
		},
		methods: {
			Toggle(e) {
				var anmiaton = e.currentTarget.dataset.class;
				this.animation= anmiaton;
				setTimeout(()=>{
					this.animation= '';
				}, 1000)
			},
			ToggleDelay() {
				this.toggleDelay= true;
				setTimeout(()=>{
					this.toggleDelay= false
				}, 1000)
			}
		},
	}
</script>

<style>
	@import "../../colorui/animation.css";
	
	image[class*="gif-"] {
		border-radius: 6upx;
		display: block;
	}
</style>