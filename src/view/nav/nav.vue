<template>
	<div class="nav">
		<span class="logo">
			<!-- <img src="http://image.boyhack.com/image/crack.png"> -->
		</span>
		<span class="menu">
			<span 
			v-for="item in menu" 
			:key="item.path"
			:class="{active:item.path===currentRoute}"
			@click="goPath(item.path)"
			>
				{{item.text}}
			</span>
		</span>
		<span class="search">
			search
		</span>
	</div>
</template>

<script lang="ts" name="navCom" setup>
import navConfig from "./nav"
import { useRouter } from "vue-router"
import { ref } from "vue"
import { useStore } from "../../store/common"
const store = useStore()
const menu = navConfig.menuText

const router = useRouter()
const currentRoute = ref(store.current_route)

const goPath = (path: string)=>{
	currentRoute.value = path
	router.push(path)
}
</script>

<style lang="scss" scoped>
@import "./nav.scss";
</style>