let Every = {};
export const SetJSON = (value,key) =>{
	return Every[key] = value
}
export const GetJSON = (key) =>{
	return Every[key]
}