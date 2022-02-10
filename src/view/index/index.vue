<template>
	<div class="index-container">
		<div 
		v-for="(item, index) in IndexContent" 
		:key="index"
		@click.stop="Article(item.path)"
		>
			<span>{{item.text}}</span>
			<img :src="item.img">
		</div>
	</div>
</template>

<script lang="ts" setup name="homeCom">
import { IndexContent } from './index'
import { useRouter } from 'vue-router'
const router = useRouter()
const Article = (path: string)=>{
	router.push(path)
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>