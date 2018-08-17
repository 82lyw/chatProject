<template>
    <div id="countless">
        <div class="btn-wrap">
            <img src="../../assets/image/blue_button.png" alt="" />
            <button class="btn-text" @click="addCount" >无限次数匹配</button>
            <p class="btn-bottom">获得多次好评有机会无限匹配~</p>
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
      addCount:function() {
          this.$store.state.count += 1
          this.$router.push('/login')
      }
          
      
  }
}
</script>

<style scoped>
#countless {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background: url('../../assets/image/background2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;  
}

/* .btn-wrap {
    width: 100px;
	background: url('../assets/image/redbutton.png');
    background-repeat: no-repeat; 
} */
.btn-wrap {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn-wrap img {
    width: 12rem;
    margin-top: 80vh;
}

.btn-text {
    top:81vh;
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
    top:85.3vh;
    color: whitesmoke;
    position: absolute;
    text-align: center;
    font-size: 1rem;
}
</style>