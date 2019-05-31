<template>
	<view>
		<cu-custom bgColor="bg-gradual-pink" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">表单</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">邮件</view>
				<input placeholder="两字短标题" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">输入框</view>
				<input placeholder="三字标题" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">收货地址</view>
				<input placeholder="统一标题的宽度" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">收货地址</view>
				<input placeholder="输入框带个图标" name="input"></input>
				<text class='cuIcon-locationfill text-orange'></text>
			</view>
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="输入框带个按钮" name="input"></input>
				<button class='cu-btn bg-green shadow'>验证码</button>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="输入框带标签" name="input"></input>
				<view class="cu-capsule radius">
					<view class='cu-tag bg-blue '>
						+86
					</view>
					<view class="cu-tag line-blue">
						中国大陆
					</view>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">普通选择</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'禁止换行，超出容器部分会以 ... 方式截断'}}
					</view>
				</picker>
			</view>
			<!-- #ifndef MP-ALIPAY -->
			<view class="cu-form-group">
				<view class="title">多列选择</view>
				<picker mode="multiSelector" @change="MultiChange" @columnchange="MultiColumnChange" :value="multiIndex" :range="multiArray">
					<view class="picker">
						{{multiArray[0][multiIndex[0]]}}，{{multiArray[1][multiIndex[1]]}}，{{multiArray[2][multiIndex[2]]}}
					</view>
				</picker>
			</view>
			<!-- #endif -->
			<view class="cu-form-group">
				<view class="title">时间选择</view>
				<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
					<view class="picker">
						{{time}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">日期选择</view>
				<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
					<view class="picker">
						{{date}}
					</view>
				</picker>
			</view>
			<!-- #ifndef H5 || APP-PLUS || MP-ALIPAY -->
			<view class="cu-form-group">
				<view class="title">地址选择</view>
				<picker mode="region" @change="RegionChange" :value="region">
					<view class="picker">
						{{region[0]}}，{{region[1]}}，{{region[2]}}
					</view>
				</picker>
			</view>
			<!-- #endif -->
			<view class="cu-form-group margin-top">
				<view class="title">开关选择</view>
				<switch @change="SwitchA" :class="switchA?'checked':''" :checked="switchA?true:false"></switch>
			</view>
			<view class="cu-form-group">
				<view class="title">定义颜色</view>
				<!-- #ifdef MP-ALIPAY -->
				<switch class='red' @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false" color="#e54d42"></switch>
				<!-- #endif -->

				<!-- #ifndef MP-ALIPAY -->
				<switch class='red' @change="SwitchB" :class="switchB?'checked':''" :checked="switchB?true:false"></switch>
				<!-- #endif -->
			</view>
			<view class="cu-form-group">
				<view class="title">定义图标</view>
				<switch class='switch-sex' @change="SwitchC" :class="switchC?'checked':''" :checked="switchC?true:false"></switch>
			</view>
			<!-- #ifndef MP-ALIPAY -->
			<view class="cu-form-group">
				<view class="title">方形开关</view>
				<switch class='orange radius' @change="SwitchD" :class="switchD?'checked':''" :checked="switchD?true:false"></switch>
			</view>
			<!-- #endif -->
			<radio-group class="block" @change="RadioChange">
				<view class="cu-form-group margin-top">
					<view class="title">单选操作(radio)</view>
					<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
				</view>
				<!-- #ifndef MP-ALIPAY -->
				<view class="cu-form-group">
					<view class="title">定义样式</view>
					<radio class='radio' :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B"></radio>
				</view>
				<view class="cu-form-group">
					<view class="title">定义颜色</view>
					<view>
						<radio class='blue radio' :class="radio=='C'?'checked':''" :checked="radio=='C'?true:false" value="C"></radio>
						<radio class='red margin-left-sm' :class="radio=='D'?'checked':''" :checked="radio=='D'?true:false" value="D"></radio>
					</view>
				</view>
				<!-- #endif -->
			</radio-group>
			<checkbox-group class="block" @change="CheckboxChange">
				<view class="cu-form-group margin-top">
					<view class="title">复选选操作(checkbox)</view>
					<checkbox :class="checkbox[0].checked?'checked':''" :checked="checkbox[0].checked?true:false" value="A"></checkbox>
				</view>
				<!-- #ifndef MP-ALIPAY -->
				<view class="cu-form-group">
					<view class="title">定义形状</view>
					<checkbox class='round' :class="checkbox[1].checked?'checked':''" :checked="checkbox[1].checked?true:false" value="B"></checkbox>
				</view>
				<view class="cu-form-group">
					<view class="title">定义颜色</view>
					<checkbox class='round blue' :class="checkbox[2].checked?'checked':''" :checked="checkbox[2].checked?true:false"
					 value="C"></checkbox>
				</view>
				<!-- #endif -->
			</checkbox-group>
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					图片上传
				</view>
				<view class="action">
					{{imgList.length}}/4
				</view>
			</view>
			<view class="cu-form-group">
				<view class="grid col-4 grid-square flex-sub">
					<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					 <image :src="imgList[index]" mode="aspectFill"></image>
						<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
							<text class='cuIcon-close'></text>
						</view>
					</view>
					<view class="solids" @tap="ChooseImage" v-if="imgList.length<4">
						<text class='cuIcon-cameraadd'></text>
					</view>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">头像</view>
				<view class="cu-avatar radius bg-gray"></view>
			</view>
			<!-- !!!!! placeholder 在ios表现有偏移 建议使用 第一种样式 -->
			<view class="cu-form-group margin-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="多行文本输入框"></textarea>
			</view>
			<view class="cu-form-group align-start">
				<view class="title">文本框</view>
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBInput" placeholder="多行文本输入框"></textarea>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: -1,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				multiArray: [
					['无脊柱动物', '脊柱动物'],
					['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'],
					['猪肉绦虫', '吸血虫']
				],
				objectMultiArray: [
					[{
							id: 0,
							name: '无脊柱动物'
						},
						{
							id: 1,
							name: '脊柱动物'
						}
					],
					[{
							id: 0,
							name: '扁性动物'
						},
						{
							id: 1,
							name: '线形动物'
						},
						{
							id: 2,
							name: '环节动物'
						},
						{
							id: 3,
							name: '软体动物'
						},
						{
							id: 3,
							name: '节肢动物'
						}
					],
					[{
							id: 0,
							name: '猪肉绦虫'
						},
						{
							id: 1,
							name: '吸血虫'
						}
					]
				],
				multiIndex: [0, 0, 0],
				time: '12:01',
				date: '2018-12-25',
				region: ['广东省', '广州市', '海珠区'],
				switchA: false,
				switchB: true,
				switchC: false,
				switchD: false,
				radio: 'A',
				checkbox: [{
					value: 'A',
					checked: true
				}, {
					value: 'B',
					checked: true
				}, {
					value: 'C',
					checked: false
				}],
				imgList: [],
				modalName: null,
				textareaAValue: '',
				textareaBValue: ''
			};
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
			MultiChange(e) {
				this.multiIndex = e.detail.value
			},
			MultiColumnChange(e) {
				let data = {
					multiArray: this.multiArray,
					multiIndex: this.multiIndex
				};
				data.multiIndex[e.detail.column] = e.detail.value;
				switch (e.detail.column) {
					case 0:
						switch (data.multiIndex[0]) {
							case 0:
								data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
								data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
								break;
							case 1:
								data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
								data.multiArray[2] = ['鲫鱼', '带鱼'];
								break;
						}
						data.multiIndex[1] = 0;
						data.multiIndex[2] = 0;
						break;
					case 1:
						switch (data.multiIndex[0]) {
							case 0:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
										break;
									case 1:
										data.multiArray[2] = ['蛔虫'];
										break;
									case 2:
										data.multiArray[2] = ['蚂蚁', '蚂蟥'];
										break;
									case 3:
										data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
										break;
									case 4:
										data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
										break;
								}
								break;
							case 1:
								switch (data.multiIndex[1]) {
									case 0:
										data.multiArray[2] = ['鲫鱼', '带鱼'];
										break;
									case 1:
										data.multiArray[2] = ['青蛙', '娃娃鱼'];
										break;
									case 2:
										data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
										break;
								}
								break;
						}
						data.multiIndex[2] = 0;
						break;
				}
				this.multiArray = data.multiArray;
				this.multiIndex = data.multiIndex;
			},
			TimeChange(e) {
				this.time = e.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			RegionChange(e) {
				this.region = e.detail.value
			},
			SwitchA(e) {
				this.switchA = e.detail.value
			},
			SwitchB(e) {
				this.switchB = e.detail.value
			},
			SwitchC(e) {
				this.switchC = e.detail.value
			},
			SwitchD(e) {
				this.switchD = e.detail.value
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			CheckboxChange(e) {
				var items = this.checkbox,
					values = e.detail.value;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true;
							break
						}
					}
				}
			},
			ChooseImage() {
				uni.chooseImage({
					count: 4, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '召唤师',
					content: '确定要删除这段回忆吗？',
					cancelText: '再看看',
					confirmText: '再见',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			textareaBInput(e) {
				this.textareaBValue = e.detail.value
			}
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
