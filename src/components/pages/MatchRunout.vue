<template>
    <div id="matchRunout">
        <div class="btn-wrap">
            <img src="../../assets/image/button.png" alt="" />
            <button class="btn-text" @click="goback" >匹配次数已用完</button>
            <p class="btn-bottom">下次活动再见~遇见佳缘2.0等你</p>
        </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods:{
      goback:function() {
          this.$router.push('/login')
      }
  }
}
</script>

<style scoped>
#matchRunout {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: url('../../assets/image/background3.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;  
}

.btn-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn-wrap img {
    width: 14rem;
    margin-top: 80vh;
}

.btn-text {
    top:81.8vh;
    position: absolute;
    border:0;
    background: none;
    width: 100%;
    text-align: center;
    opacity: 0.6;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size:1.3rem;
    color: whitesmoke;
}
.btn-bottom {
    top:86.5vh;
    color: whitesmoke;
    position: absolute;
    text-align: center;
    font-size: 1rem;
}
</style>