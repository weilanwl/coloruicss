<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true"><block slot="backText">返回</block><block slot="content"> 按钮 / 设计</block></cu-custom>
		<view class="padding-xl">
			<view class="box bg-white text-center radius">
				<button class="cu-btn" :class="[border?bordersize?'lines-' + color:'line-' + color:'bg-'+ color,round?'round':'',size,shadow?'shadow':'']">我是一个按钮</button>
			</view>
			<view class="padding text-center">
				class="cu-btn <text v-if="color">{{' '}} {{border?bordersize?'lines-' + color:'line-' + color:'bg-'+ color}} {{round?'round':''}} {{size}} {{shadow?'shadow':''}}</text>"
			</view>
		</view>
		<view class="cu-form-group margin-top" @tap="showModal" data-target="ColorModal">
			<view class="title">选择颜色</view>
			<view class="padding solid radius shadow-blur" :class="'bg-'+color"></view>
		</view>
		<view class="cu-form-group">
			<view class="title">是否圆角</view>
			<switch @change="SetRound" class="blue" :class="round?'checked':''"></switch>
		</view>
		<view class="cu-form-group">
			<view class="title">选择尺寸</view>
			<radio-group @change="SetSize">
				<label class="margin-left-sm">
					<radio class="blue radio" value="sm"></radio>
					<text class="margin-left-sm"> 小</text>
				</label>
				<label class="margin-left-sm">
					<radio class="blue radio" value="" checked></radio>
					<text class="margin-left-sm"> 中</text>
				</label>
				<label class="margin-left-sm">
					<radio class="blue radio" value="lg"></radio>
					<text class="margin-left-sm"> 大</text>
				</label>
			</radio-group>
		</view>
		<view class="cu-form-group">
			<view class="title">是否添加阴影</view>
			<switch @change="SetShadow" :class="shadow?'checked':''"></switch>
		</view>
		<view class="cu-form-group">
			<view class="title">是否镂空</view>
			<switch @change="SetBorder" :class="border?'checked':''"></switch>
		</view>
		<view class="cu-form-group" v-if="border">
			<view class="title">边框大小</view>
			<radio-group @change="SetBorderSize">
				<label class="margin-left-sm">
					<radio class="blue radio" value="" checked></radio>
					<text class="margin-left-sm"> 小</text>
				</label>
				<label class="margin-left-sm">
					<radio class="blue radio" value="s"></radio>
					<text class="margin-left-sm"> 大</text>
				</label>
			</radio-group>
		</view>
		<view class="cu-modal" :class="modalName=='ColorModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar justify-end solid-bottom">
					<view class="content">选择颜色</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="grid col-5 padding">
					<view class="padding-xs" v-for="(item,index) in ColorList" :key="index" @tap="SetColor" :data-color="item.name" v-if="item.name!='white'">
						<view class="padding-tb radius" :class="'bg-' + item.name"> {{item.title}} </view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ColorList: this.ColorList,
				modalName: '',
				round: false,
				size: '',
				color: 'red',
				shadow: false,
				border: false,
				bordersize: ''
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			SetRound(e) {
				this.round = e.detail.value
			},
			SetSize(e) {
				this.size = e.detail.value
			},
			SetColor(e) {
				this.color = e.currentTarget.dataset.color;
				this.modalName = null
			},
			SetShadow(e) {
				this.shadow = e.detail.value
			},
			SetBorder(e) {
				this.border = e.detail.value
				if (!e.detail.value) {
					this.bordersize = false
				}
			},
			SetBorderSize(e) {
				this.bordersize = e.detail.value
			}
		}
	}
</script>

<style>
	.box {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
	}
</style>
