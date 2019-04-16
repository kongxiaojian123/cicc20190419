<template>
    <div class="screen07 ps-131">
        <div class="main ps-144">
            <div class="type0 ps-146">
                <div class="text3 ps-204">
                    <div class="text ps-19"></div>
                    <div class="flag ps-63"></div>
                </div>
                <div class="text2 ps-216">
                    <div class="text ps-209"></div>
                    <div class="flag ps-215"></div>
                </div>
                <div class="text1 ps-227">
                    <div class="text ps-220"></div>
                    <div class="flag ps-226"></div>
                </div>
                <div class="text0 ps-238">
                    <div class="text ps-231"></div>
                    <div class="flag ps-237"></div>
                </div>
                <div class="title ps-154"></div>
            </div>
            <div class="type1 ps-148">
                <div class="data1 ps-184">
                    <div class="main ps-191">
                        <div class="date ps-200"></div>
                        <canvas class="canvas pie ps-195" ref="canvas1"></canvas>
                        <div class="text ps-198"></div>
                        <div class="title ps-193"></div>
                    </div>
                    <div class="desc ps-186">
                        <div class="text1 ps-188"></div>
                        <div class="text0 ps-190"></div>
                    </div>
                </div>
                <div class="data0 ps-182">
                    <div class="main ps-174">
                        <div class="date ps-176"></div>
                        <canvas class="canvas pie ps-166" ref="canvas0"></canvas>
                        <div class="text ps-168"></div>
                        <div class="title ps-178"></div>
                    </div>
                    <div class="desc ps-158">
                        <div class="text4 ps-165"></div>
                        <div class="text3 ps-164"></div>
                        <div class="text2 ps-163"></div>
                        <div class="text1 ps-162"></div>
                        <div class="text0 ps-161"></div>
                    </div>
                </div>
                <div class="title ps-152"></div>
            </div>
        </div>
        <div class="summary ps-139">
            <div class="text1 ps-143"></div>
            <div class="text0 ps-141"></div>
        </div>
        <div class="title ps-133">
            <div class="bg ps-137"></div>
            <div class="text ps-68"></div>
            <div class="num07 ps-135"></div>
        </div>
        </div>
</template>
<script >
import Pie from './lib/pie.ts';
    let pie0,pie1;
    export default {
        data(){
            return{
                pieData0:[
                    {range:[0,0.03],color:'#dec094',},
                    {range:[0.03,0.22],color:'#9f1e23',},
                    {range:[0.25,0.09],color:'#20618e',},
                    {range:[0.34,0.22],color:'#c6a572',},
                    {range:[0.56,0.01],color:'#b4171e',},
                    {range:[0.57,0.02],color:'#c6c9d1',},
                    {range:[0.59,0.41],color:'#860c10',},
                ],
                pieData1:[
                    {range:[0,0.06],color:'#a5825e',},
                    {range:[0.06,0.03],color:'#d58d53',}, 
                    {range:[0.09,0.12],color:'#9f1e23',},
                    {range:[0.21,0.02],color:'#20618e',},
                    {range:[0.23,0.02],color:'#dac098',},
                    {range:[0.25,0.22],color:'#860c10',},
                    {range:[0.47,0.29],color:'#c6a572',},
                    {range:[0.76,0.04],color:'#0f4b80',},
                    {range:[0.8,0.07],color:'#a81e23',},
                    {range:[0.87,0.1],color:'#c6c9d1',},
                    {range:[0.97,0.01],color:'#bb0000',},
                    {range:[0.98,0.02],color:'#666666',},
                ],
            } 
        },
        mounted(){
            pie0=new Pie(this.$refs.canvas0);
            pie1=new Pie(this.$refs.canvas1);
            pie0.render({
                progress:1,
                data:this.pieData0
            });
            pie1.render({
                progress:1,
                data:this.pieData1
            });
        },
        computed:{
        },
        methods:{
            
        },
        components:{
            
        }
    };
</script>
<style lang="postcss" scoped>
    .ps-131{
        position: relative;
        width: 640rpx;
        height: 3576rpx;
        .ps-133{
            position:absolute;
            left:41.171875%;
            top:3.495526%;
            margin-left:-263.5rpx;
            margin-top:-125rpx;
            width:527rpx;
            height:250rpx;
            .ps-135{
                position:absolute;
                left:89.373814%;
                top:64%;
                background:url("../assets/num07.ps-135.png") no-repeat center;
            }
            .ps-68{
                position:absolute;
                left:41.935484%;
                top:44.4%;
                background:url("../assets/text.ps-68.png") no-repeat center;
            }
            .ps-137{
                position:absolute;
                left:41.935484%;
                top:79.8%;
                background:url("../assets/bg.ps-137.png") no-repeat center;
            }
        }
        .ps-139{
            position:absolute;
            left:38.59375%;
            top:10.654362%;
            margin-left:-172rpx;
            margin-top:-56rpx;
            width:344rpx;
            height:112rpx;
            .ps-141{
                position:absolute;
                left:50%;
                top:14.285714%;
                background:url("../assets/text0.ps-141.png") no-repeat center;
            }
            .ps-143{
                position:absolute;
                left:29.94186%;
                top:73.660714%;
                background:url("../assets/text1.ps-143.png") no-repeat center;
            }
        }
        .ps-144{
            position:absolute;
            left:50%;
            top:57.11689%;
            margin-left:-320rpx;
            margin-top:-1533.5rpx;
            width:640rpx;
            height:3067rpx;
            .ps-148{
                position:absolute;
                left:50%;
                top:34.691881%;
                margin-left:-320rpx;
                margin-top:-1064rpx;
                width:640rpx;
                height:2128rpx;
                .ps-152{
                    position:absolute;
                    left:25.46875%;
                    top:1.527256%;
                    background:url("../assets/title.ps-152.png") no-repeat center;
                }
                .ps-182{
                    position:absolute;
                    left:50%;
                    top:29.511278%;
                    margin-left:-320rpx;
                    margin-top:-523rpx;
                    width:640rpx;
                    height:1046rpx;
                    .ps-158{
                        position:absolute;
                        left:48.515625%;
                        top:11.806883%;
                        margin-left:-237.5rpx;
                        margin-top:-123.5rpx;
                        width:475rpx;
                        height:247rpx;
                        .ps-161{
                            position:absolute;
                            left:10%;
                            top:5.870445%;
                            background:url("../assets/text0.ps-161.png") no-repeat center;
                        }
                        .ps-162{
                            position:absolute;
                            left:33.263158%;
                            top:23.684211%;
                            background:url("../assets/text1.ps-162.png") no-repeat center;
                        }
                        .ps-163{
                            position:absolute;
                            left:24.947368%;
                            top:40.890688%;
                            background:url("../assets/text2.ps-163.png") no-repeat center;
                        }
                        .ps-164{
                            position:absolute;
                            left:47.368421%;
                            top:58.097166%;
                            background:url("../assets/text3.ps-164.png") no-repeat center;
                        }
                        .ps-165{
                            position:absolute;
                            left:50.105263%;
                            top:93.927126%;
                            background:url("../assets/text4.ps-165.png") no-repeat center;
                        }
                    }
                    .ps-174{
                        position:absolute;
                        left:50%;
                        top:66.443595%;
                        background:url("../assets/bg.ps-180.png") no-repeat center;
                        .ps-178{
                            position:absolute;
                            left:42.421875%;
                            top:7.051282%;
                            background:url("../assets/title.ps-178.png") no-repeat center;
                        }
                        .ps-168{
                            position:absolute;
                            left:49.921875%;
                            top:50.641026%;
                            background:url("../assets/text.ps-168.png") no-repeat center;
                        }
                        .ps-166{
                            position:absolute;
                            left:50%;
                            top:51.780627%;
                            /* background:url("../assets/canvas.pie.ps-166.png") no-repeat center; */
                        }
                        .ps-176{
                            position:absolute;
                            left:25.9375%;
                            top:92.165242%;
                            background:url("../assets/date.png") no-repeat center;
                        }
                    }
                }
                .ps-184{
                    position:absolute;
                    left:50%;
                    top:79.699248%;
                    margin-left:-320rpx;
                    margin-top:-432rpx;
                    width:640rpx;
                    height:864rpx;
                    .ps-186{
                        position:absolute;
                        left:48.203125%;
                        top:4.571759%;
                        margin-left:-235.5rpx;
                        margin-top:-39.5rpx;
                        width:471rpx;
                        height:79rpx;
                        .ps-190{
                            position:absolute;
                            left:13.58811%;
                            top:18.987342%;
                            background:url("../assets/text0.ps-190.png") no-repeat center;
                        }
                        .ps-188{
                            position:absolute;
                            left:50%;
                            top:81.012658%;
                            background:url("../assets/text1.ps-188.png") no-repeat center;
                        }
                    }
                    .ps-191{
                        position:absolute;
                        left:50%;
                        top:57.696759%;
                        background:url("../assets/bg.ps-202.png") no-repeat center;
                        .ps-193{
                            position:absolute;
                            left:42.421875%;
                            top:7.45554%;
                            background:url("../assets/title.ps-193.png") no-repeat center;
                        }
                        .ps-198{
                            position:absolute;
                            left:48.984375%;
                            top:52.257182%;
                            background:url("../assets/text.ps-198.png") no-repeat center;
                        }
                        .ps-195{
                            position:absolute;
                            left:50%;
                            top:53.214774%;
                            /* background:url("../assets/canvas.pie.ps-195.png") no-repeat center; */
                        }
                        .ps-200{
                            position:absolute;
                            left:25.9375%;
                            top:93.570451%;
                            background:url("../assets/date.png") no-repeat center;
                        }
                    }
                }
            }
            .ps-146{
                position:absolute;
                left:50%;
                top:86.550375%;
                background:url("../assets/bg.ps-8.png") no-repeat center;
                .ps-154{
                    position:absolute;
                    left:25.46875%;
                    top:7.818182%;
                    background:url("../assets/title.ps-154.png") no-repeat center;
                }
                .ps-238{
                    position:absolute;
                    left:50.546875%;
                    top:23.212121%;
                    margin-left:-251.5rpx;
                    margin-top:-38.5rpx;
                    width:503rpx;
                    height:77rpx;
                    .ps-237{
                        position:absolute;
                        left:2.683897%;
                        top:23.376623%;
                        background:url("../assets/flag.png") no-repeat center;
                    }
                    .ps-231{
                        position:absolute;
                        left:55.069583%;
                        top:55.844156%;
                        background:url("../assets/text.ps-231.png") no-repeat center;
                    }
                }
                .ps-227{
                    position:absolute;
                    left:48.203125%;
                    top:38.424242%;
                    margin-left:-236.5rpx;
                    margin-top:-39rpx;
                    width:473rpx;
                    height:78rpx;
                    .ps-226{
                        position:absolute;
                        left:2.854123%;
                        top:23.076923%;
                        background:url("../assets/flag.png") no-repeat center;
                    }
                    .ps-220{
                        position:absolute;
                        left:55.496829%;
                        top:56.410256%;
                        background:url("../assets/text.ps-220.png") no-repeat center;
                    }
                }
                .ps-216{
                    position:absolute;
                    left:45.234375%;
                    top:56.181818%;
                    margin-left:-217.5rpx;
                    margin-top:-60.5rpx;
                    width:435rpx;
                    height:121rpx;
                    .ps-215{
                        position:absolute;
                        left:3.103448%;
                        top:14.876033%;
                        background:url("../assets/flag.png") no-repeat center;
                    }
                    .ps-209{
                        position:absolute;
                        left:55.862069%;
                        top:54.545455%;
                        background:url("../assets/text.ps-209.png") no-repeat center;
                    }
                }
                .ps-204{
                    position:absolute;
                    left:39.921875%;
                    top:73.939394%;
                    margin-left:-183.5rpx;
                    margin-top:-40rpx;
                    width:367rpx;
                    height:80rpx;
                    .ps-63{
                        position:absolute;
                        left:3.678474%;
                        top:22.5%;
                        background:url("../assets/flag.png") no-repeat center;
                    }
                    .ps-19{
                        position:absolute;
                        left:56.948229%;
                        top:57.5%;
                        background:url("../assets/text.ps-19.png") no-repeat center;
                    }
                }
            }
        }
    }
</style>