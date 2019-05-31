<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">
			<cu-custom bgColor="bg-gradual-pink" :isBack="true">
				<block slot="backText">返回</block>
				<block slot="content">列表</block>
			</cu-custom>
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 宫格列表
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow" @tap="showModal" data-target="gridModal">设置</button>
				</view>
			</view>
			<view class="cu-modal" :class="modalName=='gridModal'?'show':''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop>
					<radio-group class="block" @change="Gridchange">
						<view class="cu-list menu text-left">
							<view class="cu-item" v-for="(item,index) in 3" :key="index">
								<label class="flex justify-between align-center flex-sub">
									<view class="flex-sub">{{index +3}} 列</view>
									<radio class="round" :value="(index + 3) + ''" :class="gridCol==index+3?'checked':''" :checked="gridCol==index+3"></radio>
								</label>
							</view>
						</view>
					</radio-group>
					<view class="cu-list menu text-left solid-top">
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">边框</text>
							</view>
							<view class="action">
								<switch @change="Gridswitch" :class="gridBorder?'checked':''" :checked="gridBorder?true:false"></switch>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-list grid" :class="['col-' + gridCol,gridBorder?'':'no-border']">
				<view class="cu-item" v-for="(item,index) in cuIconList" :key="index" v-if="index<gridCol*2">
					<view :class="['cuIcon-' + item.cuIcon,'text-' + item.color]">
						<view class="cu-tag badge" v-if="item.badge!=0">
							<block v-if="item.badge!=1">{{item.badge>99?'99+':item.badge}}</block>
						</view>
					</view>
					<text>{{item.name}}</text>
				</view>
			</view>


			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange"></text> 菜单列表
				</view>
				<view class="action">
					<button class="cu-btn bg-green shadow" @tap="showModal" data-target="menuModal">设置</button>
				</view>
			</view>
			<view class="cu-modal" :class="modalName=='menuModal'?'show':''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop>
					<view class="cu-list menu text-left solid-top">
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">短边框</text>
							</view>
							<view class="action">
								<switch @change="MenuBorder" :class="menuBorder?'checked':''" :checked="menuBorder?true:false"></switch>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">箭头</text>
							</view>
							<view class="action">
								<switch @change="MenuArrow" :class="menuArrow?'checked':''" :checked="menuArrow?true:false"></switch>
							</view>
						</view>
						<view class="cu-item">
							<view class="content">
								<text class="text-grey">卡片</text>
							</view>
							<view class="action">
								<switch @change="MenuCard" :class="menuCard?'checked':''" :checked="menuCard?true:false"></switch>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-list menu" :class="[menuBorder?'sm-border':'',menuCard?'card-menu margin-top':'']">
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">图标 + 标题</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<image src="/static/logo.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">图片 + 标题</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<button class="cu-btn content" open-type="contact">
						<text class="cuIcon-btn text-olive"></text>
						<text class="text-grey">Open-type 按钮</text>
					</button>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<navigator class="content" hover-class="none" url="../list/list" open-type="redirect">
						<text class="cuIcon-discoverfill text-orange"></text>
						<text class="text-grey">Navigator 跳转</text>
					</navigator>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="cuIcon-emojiflashfill text-pink"></text>
						<text class="text-grey">头像组</text>
					</view>
					<view class="action">
						<view class="cu-avatar-group">
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
							<view class="cu-avatar round sm" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg);"></view>
						</view>
						<text class="text-grey text-sm">4 人</text>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="cuIcon-btn text-green"></text>
						<text class="text-grey">按钮</text>
					</view>
					<view class="action">
						<button class="cu-btn round bg-green shadow">
							<text class="cuIcon-upload"></text> 上传</button>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="cuIcon-tagfill text-red  margin-right-xs"></text>
						<text class="text-grey">标签</text>
					</view>
					<view class="action">
						<view class="cu-tag round bg-orange light">音乐</view>
						<view class="cu-tag round bg-olive light">电影</view>
						<view class="cu-tag round bg-blue light">旅行</view>
					</view>
				</view>
				<view class="cu-item" :class="menuArrow?'arrow':''">
					<view class="content">
						<text class="cuIcon-warn text-green"></text>
						<text class="text-grey">文本</text>
					</view>
					<view class="action">
						<text class="text-grey text-sm">小目标还没有实现！</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content padding-tb-sm">
						<view>
							<text class="cuIcon-clothesfill text-blue margin-right-xs"></text> 多行Item</view>
						<view class="text-gray text-sm">
							<text class="cuIcon-infofill margin-right-xs"></text> 小目标还没有实现！</view>
					</view>
					<view class="action">
						<switch class="switch-sex" @change="SwitchSex" :class="skin?'checked':''" :checked="skin?true:false"></switch>
					</view>
				</view>
			</view>

			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 消息列表
				</view>
			</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);"></view>
					<view class="content">
						<view class="text-grey">凯尔</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								<text class="cuIcon-infofill text-red  margin-right-xs"></text>
								我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。我已天理为凭，踏入这片荒芜，不再受凡人的枷锁遏制。
							</view> </view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-grey sm">5</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Taric.png);">
						<view class="cu-tag badge">99+</view>
					</view>
					<view class="content">
						<view class="text-grey">
							<view class="text-cut">瓦洛兰之盾-塔里克</view>
							<view class="cu-tag round bg-orange sm">战士</view>
						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。
							</view>
						</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cuIcon-notice_forbid_fill text-gray"></view>
					</view>
				</view>
				<view class="cu-item ">
					<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
					<view class="content">
						<view class="text-pink"><view class="text-cut">莫甘娜</view></view>
						<view class="text-gray text-sm flex"> <view class="text-cut">凯尔，你被自己的光芒变的盲目！</view></view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-red sm">5</view>
					</view>
				</view>
				<view class="cu-item grayscale">
					<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg);"></view>
					<view class="content">
						<view><view class="text-cut">伊泽瑞尔</view>
							<view class="cu-tag round bg-orange sm">断开连接...</view>
						</view>
						<view class="text-gray text-sm flex"> <view class="text-cut"> 等我回来一个打十个</view></view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-red sm">5</view>
					</view>
				</view>
				<view class="cu-item cur">
					<view class="cu-avatar radius lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg);">
						<view class="cu-tag badge"></view>
					</view>
					<view class="content">
						<view>
							<view class="text-cut">瓦罗兰大陆-睡衣守护者-新手保护营</view>
							<view class="cu-tag round bg-orange sm">6人</view>
						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut"> 伊泽瑞尔：<text class="cuIcon-locationfill text-orange margin-right-xs"></text> 传送中...</view></view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cuIcon-notice_forbid_fill text-gray"></view>
					</view>
				</view>
			</view>
			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 列表左滑
				</view>
			</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in 4" :key="index"
				 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
					<view class="cu-avatar round lg" :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]"></view>
					<view class="content">
						<view class="text-grey">文晓港</view>
						<view class="text-gray text-sm">
							<text class="cuIcon-infofill text-red  margin-right-xs"></text> 消息未送达</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-grey sm">5</view>
					</view>
					<view class="move">
						<view class="bg-grey">置顶</view>
						<view class="bg-red">删除</view>
					</view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cuIconList: [{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				}, {
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				}, {
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				}, {
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				}, {
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				}, {
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				}, {
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				}, {
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				}, {
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				}, {
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}],
				modalName: null,
				gridCol: 3,
				gridBorder: false,
				menuBorder: false,
				menuArrow: false,
				menuCard: false,
				skin: false,
				listTouchStart: 0,
				listTouchDirection: null,
			};
		},
		methods: {
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			Gridchange(e) {
				this.gridCol = e.detail.value
			},
			Gridswitch(e) {
				this.gridBorder = e.detail.value
			},
			MenuBorder(e) {
				this.menuBorder = e.detail.value
			},
			MenuArrow(e) {
				this.menuArrow = e.detail.value
			},
			MenuCard(e) {
				this.menuCard = e.detail.value
			},
			SwitchSex(e) {
				this.skin = e.detail.value
			},

			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},

			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},

			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			}
		}
	}
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: "\e716";
	}

	.switch-sex::before {
		content: "\e7a9";
	}

	.switch-music::after {
		content: "\e66a";
	}

	.switch-music::before {
		content: "\e6db";
	}
</style>
