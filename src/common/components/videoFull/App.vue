<template>
	<div class="video-full">
		<video
				:src="src"
				:poster="poster"
				:autoplay="autoplay"
				@click="playAndroid"
				@ended="onended"
				@play="onplay"
				@pause="onpause"
				@timeupdate="currentTime = $refs.video.currentTime"
				ref='video'
				class="video"
				x-webkit-airplay="true"
				playsinline="true"
				webkit-playsinline="true"
				x5-video-player-type="h5"
				x5-video-player-fullscreen="true"></video>

		<div v-if='!initFlag' class="video-poster" @click='play' :style="{backgroundImage:poster?'url('+poster+')':'none'}">
			<span class="play-icon"></span>
		</div>
	</div>
</template>

<script>
	const requestAnimationFrame = webkitRequestAnimationFrame||requestAnimationFrame;
	const cancelAnimationFrame = webkitCancelAnimationFrame||cancelAnimationFrame;
	export default {
		props: {
			autoplay: {
				type: Boolean,
				default: true
			},
			src: String,
			poster: String,
		},
		data() {
			return {
				initFlag: false,
				playFlag: false,
				timer:null,
				currentTime:0,
			}
		},
		watch:{
			currentTime(...a){
				if(a[0]>=0.1) this.initFlag = true;
				this.$emit('timeupdate',...a);
			},
			playFlag(bool){
				if(bool){
					this.ontimeupdate(true);
				}else {
					cancelAnimationFrame(this.timer);
				}
			}
		},
		mounted() {
			this.videoInit();
		},
		destroyed(){
			cancelAnimationFrame(this.timer);
		},
		methods: {
			videoInit(){
				if(window.netease) window.netease.autoPlay((ev)=>{
					if(this.autoplay){
						this.play();
					}else{
						this.play(true);
					}
				});
			},
			ontimeupdate(destroy){
				//实时获取播放位置
				if(destroy) cancelAnimationFrame(this.timer);
				this.timer = requestAnimationFrame(()=>{
					this.currentTime = this.$refs.video.currentTime;
					this.ontimeupdate();
				});
			},
			onplay(){
				//监听play
				this.playFlag = true;
				this.$emit('play');
			},
			onpause(){
				this.playFlag = false;
				this.$emit('pause');
			},
			onended(){
				this.onpause();
				this.$emit('ended');
			},
			playAndroid(){
				if(netease.ua.android){
					this.play();
				}
			},
			play(loadFlag) {
				//播放
				const video = this.$refs.video;
				if(video.ended&&!video.loop){
					this.onended();
				}else{
					if(!this.playFlag) {
						if(loadFlag) video.load();
						else video.play();
					}
				}
			},
			pause() {
				//暂停
				if(this.playFlag) this.$refs.video.pause();
			},
		},
		components: {}
	};
</script>
<style lang="postcss">
	.video-full {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #000;
		.video {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.video-poster{
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: #000 no-repeat center;
			background-size: cover;
			.play-icon{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
</style>
