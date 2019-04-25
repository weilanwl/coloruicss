<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content">标签</block></cu-custom>
		<view class="cu-bar bg-white solid-bottom">
			<view class='action'>
				<text class='cuIcon-title text-blue'></text>标签形状
			</view>
		</view>
		<view class="padding bg-white solid-bottom">
			<view class='cu-tag'>默认</view>
			<view class='cu-tag round'>椭圆</view>
			<view class='cu-tag radius'>圆角</view>
		</view>

		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='cuIcon-title text-blue'></text>标签尺寸
			</view>
		</view>
		<view class="padding bg-white">
			<view class='cu-tag radius sm'>小尺寸</view>
			<view class='cu-tag radius'>普通尺寸</view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='cuIcon-title text-blue'></text>标签颜色
			</view>
		</view>
		<view class='padding-sm flex flex-wrap'>
			<view class="padding-xs" v-for="(item,index) in ColorList" :key="index" v-if="item.name!='gray'">
				<view class='cu-tag' :class="'bg-' + item.name">{{item.title}}</view>
			</view>
			<view class="padding-xs" v-for="(item,index) in ColorList" :key="index" v-if="item.name!='gray' && item.name!='black' && item.name!='white'">
				<view class='cu-tag light' :class="'bg-' + item.name">{{item.title}}</view>
			</view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='cuIcon-title text-blue'></text>镂空标签
			</view>
		</view>
		<view class='padding-sm flex flex-wrap'>
			<view class="padding-xs" v-for="(item,index) in ColorList" :key="index" v-if="item.name!='white'">
				<view class='cu-tag' :class="'line-' + item.name">{{item.title}}</view>
			</view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='cuIcon-title text-blue'></text>胶囊样式
			</view>
		</view>
		<view class="padding">
			<view class="cu-capsule">
				<view class='cu-tag bg-red'>
					<text class='cuIcon-likefill'></text>
				</view>
				<view class="cu-tag line-red">
					12
				</view>
			</view>
			<view class="cu-capsule round">
				<view class='cu-tag bg-blue '>
					<text class='cuIcon-likefill'></text>
				</view>
				<view class="cu-tag line-blue">
					23
				</view>
			</view>
			<view class="cu-capsule round">
				<view class='cu-tag bg-blue '>
					说明
				</view>
				<view class="cu-tag line-blue">
					123
				</view>
			</view>
			<view class="cu-capsule radius">
				<view class='cu-tag bg-grey '>
					<text class='cuIcon-likefill'></text>
				</view>
				<view class="cu-tag line-grey">
					23
				</view>
			</view>
			<view class="cu-capsule radius">
				<view class='cu-tag bg-brown sm'>
					<text class='cuIcon-likefill'></text>
				</view>
				<view class="cu-tag line-brown sm">
					23
				</view>
			</view>
		</view>
		<view class="cu-bar bg-white margin-top">
			<view class='action'>
				<text class='cuIcon-title text-blue'></text>数字标签
			</view>
		</view>
		<view class="padding flex justify-between align-center">
			<view class='cu-avatar xl radius'>
				港
				<view class="cu-tag badge">99+</view>
			</view>
			<view class='cu-avatar xl radius' style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg)">
				<view class='cu-tag badge'>9</view>
			</view>
			<view class='cu-avatar xl radius'>
				<view class='cu-tag badge'>99</view>
				<text class='cuIcon-people'></text>
			</view>
			<view class='cu-avatar xl radius'>
				<view class='cu-tag badge'>99+</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ColorList: this.ColorList,
			};
		}
	}
</script>

<style>

</style>
