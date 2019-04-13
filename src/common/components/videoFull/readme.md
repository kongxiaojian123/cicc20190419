# 全屏视频模块

 - vue全屏视频模块
 
## 用法
 - props: 
     - `autoplay <Boolean>`: 自动播放 默认：true
     - `src <string>`: video url
     - `poster <string>`: video 预加载图片
 - emmit:
     - `ended <function>`: video结束回调
     - `timeupdate <function>`: video监听
        - `arg[0]`: 当前时间
        - `arg[1]`: 上一帧时间
 - methods:
     - `play()`: video播放
     - `pause()`: video暂停
     
     - 例子:
     
       ```html
        <template>
           	<VideoFull ref="videoFull" :src="video" :poster="poster" @ended="videoEnd" @timeupdate="videoUpdate"/>
        </template>
        <script >
               import VideoFull from 'Components/videoFull/App.vue';
               import configURL from 'Js/config.url';
               export default {
                    data(){
						return {
							video:configURL.video,
							poster:configURL.videoPoster
						}
                    },
					methods:{
						videoEnd(){
                           //结束
                        },
                        videoUpdate(current,old){ 
                           //暂停例子，想要在100ms暂停
                           if(current>=100&&old<100){
                               this.$refs.videoFull.pause();
                           }
                        }
					},
					components:{
						VideoFull
					}
				}
        </script>
        <style scoped>
           >>> .video-full{
               .play-icon{
                   background: url("../assets/video-btn.png");
               }
           }
        </style>
       ```
