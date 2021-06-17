import { request, upLoad } from './request'
import { config } from '@/config.js'

// 获取执法对象数据
export const getNavList = (params) => {
	const url = `${config.host}/api/product`
	return request('GET', url, params)
}


// 获取执法对象类型数据
export const getNavTypeList = (params) => {
	const url = `${config.host}/api/product`
	return request('GET', url, params)
}

// 获取动态表单配置信息
export const getDynamicFormField = (params) => {
    const url = `${config.formHost}/form`
    return request('GET', url, params)
}

// 获取动态列表配置信息
export const getDynamicListField = (params) => {
    const url = `${config.formHost}/form`
    return request('GET', url, params)
}

// 获取动态页面配置信息
export const getDynamicPageField = (params) => {
    const url = `${config.formHost}/form`
    return request('GET', url, params)
}

//获取复工页面数据
export const getReturnToWork = (params) => {
    const url = `${config.formHost}/data`
    return request('GET', url, params)
}

//获取我的页面数据
export const getUserInfo = (params) => {
    const url = `${config.formHost}/data`
    return request('GET', url, params)
}

//获取自查记录页面数据
export const getSelfInspectionRecord = (params) => {
    const url = `${config.formHost}/data`
    return request('GET', url, params)
}