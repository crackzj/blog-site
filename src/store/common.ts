import { defineStore } from "pinia"
import { storage } from "../utils/util"
export const useStore = defineStore('common-store',{
	state:()=>({
		current_route: storage.get('route') || '',

	}),
	actions:{
		setRoute(path: string){
			this.current_route = path
		}
	}
})