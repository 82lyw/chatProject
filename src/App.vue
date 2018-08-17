<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Login
  },
  watch:{
      '$route':function(to,from){
        let token = window.localStorage.getItem('token');
　　　　　　　　  if (to.matched.some(record => record.meta.requiresAuth) && (!token || token === null)) {
　　　　　　　　　　  next({
 　　　　　　　　　　  path: '/login',
 　　　　　　　　　　  query: { redirect: to.fullPath }
　　　　　　　　　　  })
　　　　　　　　  } else {
　　　　　　     next()
　　　　　　　　  }
   　　　}
  　　}
}
</script>

<style>
</style>
