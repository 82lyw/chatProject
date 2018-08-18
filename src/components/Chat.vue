<template>
    <div class="chat">
        
        <div id="wrapBox">
            <div class="box">
                <div class="wrap">
                    <div class="header"></div>
                    <div class="contain">180</div>
                    <div class="contain">150</div>
                    <div class="contain">120</div>
                    <div class="contain">90</div>
                    <div class="contain">60</div>
                    <div class="contain">30</div>
                    <div class="contain">0</div>
                    <div id="fill">
                        <img src="../assets/image/60s.png">
                    </div>
                    <div class="content">
                        <div class="headerQ">
                            <div class="Q"><img src="../assets/image/icon_Q.png" align="absmiddle" /><span class="frame_Q">  {{question}}</span></div>
                        </div>
                        <button class="rules" @click="rules" slot="right"><img src="../assets/image/说明.png"></button>

                    <div class="chat-content">
                        <div v-for="item of msgs">
                            <div v-if="item.self" class="chat-item self clearfix">
                                <div class="msg-date">{{ item.date }}</div>
                                    <div class="headPortrait">
                                      <img :src="item.headPortrait" alt="">
                                    </div>
                                    <div class="msg-content">{{item.content}}</div>
                                </div>
                            <div v-else class="chat-item other clearfix">
                                <div class="msg-date">{{ item.date }}</div>
                                <div class="headPortrait">
                                    <img :src="item.headPortrait" alt="">
                                </div>
                            </div>
                        <div class="msg-content" 
                        @touchstart='touchStart' 
                        @touchmove='touchMove' 
                        @touchend='touchEnd'>{{item.content}}</div>
                    </div>
                </div>
            </div>
        <!--输入区域-->
            <div class="chat-input">
                <input @keyup.enter="send" @input="newLine" v-model.trim="inputContent" />
                <button @click="send">发送</button>
            </div>
            
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            Ques:[
                "有什么好玩的游戏推荐嘛？",
                "分享一部你最喜欢的电影吧",
                "这个假期里你经历过什么有意思的事情呢？",
                "分享一个你自己特有的小技能？",
                "或许可以从你最喜欢的小动物开始聊喔～",
                "介绍介绍你喜欢用的小众app吧！",
                "可以分享一下假期里有意义的事情吗？",
                "夏天你有什么解暑续命大法呢？",
                "也许可以从聊聊你们的专业开始喔～",
                "或许可以先来聊聊你们最近在看的书？",
                "或许可以从聊喜欢的音乐开始喔～",
                "可以从最近在玩的游戏开始聊喔~",
                "或许可以聊聊你喜不喜欢现在的专业？"
            ],
            question: "",
            message:"1.随机匹配 ，优先男女2.如遇违规,长按举报3.时间不定，喜欢抓紧4.多次好评，无限匹配5.随机奖励，加时续命",
            msgs: localStorage.msgs && JSON.parse(localStorage.msgs) || [

            ],
            inputContent:'',
            oContent: {},
            oInput:{},
            timeOutEvent:0
        }
    },
    methods: {
         send() {
            if(this.inputContent === '') {
                return ;
            } else {
                socket.emit('sendMsg',{
                    date: this.moment().format('YYYY--MM-DD HH:mm:ss'),
                    content: this.inputContent,
                    headPortrait: this.headPortrait
                });
                this.msgs.push({
                    date: this.moment().format('YYYY-MM-DD HH:mm:ss'),
                    content: this.inputContent,
                    self: true,
                    headPortrait: this.headPortrait
                });
                this.inputContent = '',
                setTimeout(() => this.oContent.scrollTop = this.oContent.scrollHeight, 0);
            };
        },

        //长按触发举报 @touchstart='touchStart' @touchmove='touchMove' @touchend='touchEnd'
        //开始按
        touchStart:function() {
            this.timeOutEvent = setTimeout("longPress()",500);
            return false;
        },
        //释放，若500毫秒内释放，则取消长按事件
        touchEnd:function() {
            clearTimeout(this.timeOutEvent);
            if(this.timeOutEvent != 0) {

            }
            return false;
        },
        //若手指移动
        touchMove:function() {
            clearTimeout(this.timeOutEvent);
            timeOutEvent = 0;
        },
        //长按执行的事件
        longPress:function() {
            timeOutEvent = 0;
            if(comfirm("确定举报该条聊天信息？")) {
                axios.post("/api/report",this.userId)
                .then((response) => {
                    console.log(response.data);
                    if(response.data.success) {
                        Toast("举报成功");
                    }
                    }).catch((err) => {
                        this.errors = err.response.data
                        console.log(this.errors)
                        })  
            } else {
                return false;
            }
        }
    },
    computed: {
        rules:function() {
            MessageBox.alert(this.message,"规则")
            },
        useId() {
            return this.$store.state.useId;
        },
        headPortrait() {
            //return this.$store.state.headPortrait;
        }
    },
    created:{
        getQ() {
        let index;
        index = Math.floor((Math.random()*Ques.length));
        this.question = Ques[index]
        }
        
    },

    watch: {
        msgs(val) {
            localStorage.msg_chat = JSON.stringify(val);
        }
    },

    mounted() {
        this.oContent = document.querySelector('.chat-content');
        this.oContent.scrollTop = this.oContent.scrollHeight;
        this.oInput = document.querySelector('input');

        socket.emit('online',this.$store.state.useId);

        socket.on('online',(gender) => {
            if (!gender) {
                return 
            }
        });

        //接收对方消息
        socket.on('receiveMsg',data => {
            this.msg.push(data);
             setTimeout(() => {
                 this.oContent.scrollTop = this.oContent.scrollHeight;
                 }, 0);
        });

        this.oContent.scrollTop = this.oContent.scrollHeight;
    },


    ready: {

    }

}


</script>


<style scoped>

        .wrap {
            margin: 0;
            padding: 0;
            position:relative;
            z-index:-1;
            flex-direction: column;
            justify-content: center;
            width: 100vw;
            height: 100vh;
            background: url('../assets/image/图层1.png');
            overflow:hidden;
        }

        .header {
            height: 5vh;
        }

        .content {
            position: absolute;
            top: 6px;
        }
        .Q {
            width: 28rem;
            height: 3rem;
            background: url('../assets/image/frame_Q.png');
            background-repeat: no-repeat;
            
        }
        /* .frame_Q {
            background: url('../../assets/image/frame_Q.png');
            width: 14rem;
            height: auto;
        } */

        .headerQ {
            margin-left: 3rem;
        }

        .rules {
            position: absolute;
            top: 4px;
            left: 19rem;
            border: 0;
            background: none;
        }


        .rules img {
            width: 34px;
            height: 34px;
        }

        .self img {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-left: 10px;
        }

        .self .msg-content {
            float: right;
            word-wrap: break-word;
            word-break: break-all;
            margin-right: 10px;
        }

        .other img {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-right: 10px;
        }
        .other .msg-content {
            float: left;
            margin-left: 10px;
            word-wrap: break-word;
            word-break: break-all;
        }

        .chat-input {
            position: absolute;
            top: 93vh;
            left: 10px;
            opacity: 0.8;
            z-index: 100;
        }

        .chat-input input {
            top: 0;
            width: 320px;
            height: 32px;
            background-color: #ffffff;
            border-radius: 7px;
            line-height: 32px;
            font-size: 20px; 
        }

        .chat-input button {
            width: 4rem;
	        height: 32px;
            line-height: 32px;
	        background-color: #d66161;
	        border-radius: 0.7rem;
        }


        .contain {
            top: 20rem;
            color: brown;
            text-align: center;
            height: 15.3vh;
            font-family: Tahoma;
            font-size: 2.8vh;
        }
        #fill {
            top:0; left:0;
            position:absolute;
            z-index:-2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100vw;
            height: 100vh;

            animation-name:myfirst;
            animation-duration:180s;
            animation-timing-function:linear;
            animation-play-state:running;
            animation-fill-mode:forwards;
            /* Safari and Chrome: */
            -webkit-animation-name:myfirst;
            -webkit-animation-duration:180s;
            -webkit-animation-timing-function:linear;
            -webkit-animation-play-state:running;
            -webkit-animation-fill-mode:forwards; /* Safari 和 Chrome */

        }

        #fill img {
            width: 100vw;
            height: 100vh;
        }

        @keyframes myfirst {
            0% {
                left: 0;
                top: 0;
            }
            100% {
                left: 0;
                top: 100vh;
            }
        }

        @-webkit-keyframes myfirst /* Safari and Chrome */
        {
            0% {
                left: 0;
                top: 0;
            }
            100% {
                left: 0;
                top: 100vh;
            }
        }

        
</style>