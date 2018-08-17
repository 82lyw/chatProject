<template>
    <div id="login">
        <div class="btn-wrap">
            <!-- <input type="button" value="选择性别" v-if="isHide" @click="isHide=!isHide" /> -->
            <msgbox 
            v-if="!isHide" 
            modal-title="选择性别"
            ok-btn="确定"
            @on-ok="ok"
            >
            <div slot="modal-content">
                <input type="radio" id= "1" name="aaa" style="display:none"> <img class="gender" id="1" src="../assets/image/girl.png" @click="myGender(this.id)">
                <input type="radio" id= "0" name="aaa" style="display:none"> <img class="gender" id="0" src="../assets/image/boy.png" @click="myGender(this.id)">
            </div>
            </msgbox>
            <img class="redbutton" src="../assets/image/redbutton.png" alt="" />

            <button class="btn-text" @click="enterChat">开始匿名聊天</button>
            <p class="btn-bottom">剩余聊天次数{{count}}</p>
        </div>
    </div>
</template>

<script>
import msgbox from './MsgBox/index'

export default {
        props: {
            modalTitle: {
                type: String,
                default: '标题区域'
            },
            okBtn: {
                type: String,
                default: '确认'
            },
            cancelBtn: {
                type: String,
                default: '取消'
            }
        },
  data () {
    return {
        isHide: false,
        user:{
            gender:"",
            userId:"",
            msg:"",

        },
        errors:"",
        count: 7

    }
  },
  methods:{
      enterChat:function() {
          console.log('开始聊天')
          if(this.count >= 0) {
              axios.get('/api/come',this.user)
          .then((response) => {
              console.log(response.data);
              this.user = response.data
              this.count -= 1
              this.$router.push('/matching')
              
          }).catch((err) => {
              this.errors = err.response.data
              console.log(this.errors)
          })  
          } else {
              this.$router.push('/matchRunout')
          }

      },
      ok:function() {
          if(!this.gender) {
              this.isHide = !this.isHide
          } else {
              return 
          }
      },
      myGender:function(val) {
        var oImg = document.getElementsByClassName('gender');
        this.gender = val;
        console.log(this.gender);

        for (var i = 0; i < oImg.length; i++) {
            if (oImg[i].id === val) {
                oImg[i].previousSibling.previousSibling.checked = true;
                oImg[i].style.border = '1px solid #FF6600';
            } else {
                oImg[i].style.border = '1px solid #008800';
            }
        }
      }
  }
}
</script>

<style scoped>
#login {
    margin: 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;
    background: url('../assets/image/background.gif');
    background-size: 100% 100%;
    background-repeat: no-repeat;  
}


.chooseSex img {
    width: 20px;
    height: 20px;
}

msgbox {
    position: absolute;
    top: 10vh;
}

.btn-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn-wrap .redbutton {
    position: absolute;
    width: 12rem;
    top: 80vh;
}

.btn-text {
    top:80.8vh;
    position: absolute;
    border:0;
    background: none;
    width: 100%;
    text-align: center;
    opacity: 0.6;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size:1.4rem;
    color: whitesmoke;
}
.btn-bottom {
    top:85vh;
    position: absolute;
    text-align: center;
    font-size: 1rem;
    color: whitesmoke;
}
</style>