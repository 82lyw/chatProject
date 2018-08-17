<template>
    <div id="matching" @click="matchingChat">
        <div class="btn-wrap">
            <img src="../../assets/image/matching.png">
        </div>
        <div class="text-bottom">
            <p>多次收获好评即有机会获得无限次数匹配机会</p>
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
    matchingChat(){
          var t=setTimeout(this.$router.push('/chat'),3000)
      }
  },
  ready:{
  }
}
</script>

<style scoped>
#matching {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: url('../../assets/image/background1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;  
}

.btn-wrap {
    text-align: center;
    position: relative;
    top: 68vh
}

.text-bottom p {
    position: relative;
    top: 66vh;
    color: white;
    text-align: center;
    font-size: 1rem;
}



</style>