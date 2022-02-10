import { createRouter, createWebHistory } from "vue-router"
import { storage } from "../utils/util"
import { useStore } from "../store/common"
import Index from '@/view/body/body.vue'
const routes = [
	{
		path:'/',
		component: Index,
		redirect:"/index",
		children:[
			{
				path:"index",
				name:"index",
				component: ()=>import("@/view/index/index.vue")
			},
			{
				path:"web",
				name:"web",
				component: ()=>import("@/view/web/web.vue")
			},
			{
				path:"golang",
				name:"golang",
				component: ()=>import("@/view/golang/golang.vue")
			},
			{
				path:"flutter",
				name:"flutter",
				component: ()=>import("@/view/flutter/flutter.vue")
			},
			{
				path:"docker",
				name:"docker",
				component: ()=>import("@/view/docker/docker.vue")
			},
			{
				path:"database",
				name:"database",
				component: ()=>import("@/view/database/database.vue")
			},
			{
				path:"other",
				name:"other",
				component: ()=>import("@/view/other/other.vue")
			},
			{
				path:"about",
				name:"about",
				component: ()=>import("@/view/about/about.vue")
			}
		]
	},
	
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

router.afterEach((to,from)=>{
	const store = useStore()
	storage.set('route',to.fullPath)
	store.setRoute(to.path)
})

export default router