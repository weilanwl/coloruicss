<template>
	<view>
		<view class="cu-custom" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar fixed" :style="[{height:CustomBar + 'px',paddingTop:StatusBar + 'px'}]" :class="bgColor">
				<!-- #ifdef MP-WEIXIN -->
				<navigator class='action' open-type="navigateBack" :delta="1" hover-class="none">
					<text class='icon-back'></text>
					<slot></slot>
				</navigator>
				<!-- #endif -->
				<!-- #ifdef H5 -->
				<view class='action' @tap="BackPage">
					<text class='icon-back'></text>
					<slot></slot>
				</view>
				<!-- #endif -->
				<slot name="right"></slot>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar
			};
		},
		props: {
			bgColor: {
				type: String,
				default: 'bg-gradual-blue'
			},
		},
		methods: {
			BackPage() {
				uni.navigateBack({
					delta: 1
				});
			}
		}
	}
</script>

<style>

</style>
