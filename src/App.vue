<script setup lang="ts">
import NavCom from './view/nav/nav.vue'
import FooterCom from './view/footer/footer.vue'
import BodyCom from './view/body/body.vue'
</script>

<template>
	<div id="app">
		<nav-com></nav-com>
    <div class="body">
      <router-view></router-view>
    </div>
    
		<footer-com></footer-com>
	</div>
</template>
<style scoped>
.body{
  min-height: calc(100vh - 120px);
}
</style>
<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  outline: none;
  color: #666;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  width: 100vw;
	min-height: 100vh;
	background-color: #f3f4f8;
	min-width: 1200px;
  
}
</style>
