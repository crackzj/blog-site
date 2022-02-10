export const storage = {
	set(key: string, value: string){
		let val = format(value)
		sessionStorage.setItem(key,val)
	},
	get(key: string){
		return sessionStorage.getItem(key)
	},
	remove(key: string){
		sessionStorage.removeItem(key)
	}
}

function format(val: unknown){
	if(typeof val === 'object'){
		return JSON.stringify(val)
	}
	return <string>val
}