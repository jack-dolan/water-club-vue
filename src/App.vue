<template>
<div id="app">
  <app-navbar />
  <modal name="hello-world">
    hello, world!
  </modal>
  <main-hero />
  <!-- <app-footer /> -->
</div>
</template>

<script>
// Import BULMA for the whole Vue app
import 'bulma/css/bulma.css'
import AppNavbar from '@/components/AppNavbar.vue'
import MainHero from '@/components/MainHero.vue'
// import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppNavbar,
    MainHero,
    // AppFooter
  },
}
</script>

<style>
.has-navbar-fixed-top{
  background-repeat: no-repeat;
  background-attachment: fixed;
}
@media screen and (max-width: 480px){
  .has-navbar-fixed-top {
      background-size : cover;
      height : 100%;
      overflow : hidden;
  }
  body {
      height : 100%;
      overflow : scroll;
      -webkit-overflow-scrolling : touch;
  }
}
</style>