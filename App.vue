<script>
    import { globalConfig } from '@/config.js'
    import { getGolobalConfig,getIcon } from 'common/api.js'
    import _ from 'lodash'
		import {Base64} from '@/utils/tools.js'
	export default {
		onLaunch: async function() {
						await this.$wxlogin()
						await this.$userProfile()
						let allName = uni.getStorageSync("allName")
						if(allName.length>0&&Array.isArray(allName)){ //初始化表单
							allName.map((item,i)=>{
								uni.removeStorageSync(item)
							})
						}
						uni.removeStorageSync("userType") //清除用户类型
						uni.removeStorageSync("YyzzCode") //清除营业执照code
						uni.removeStorageSync("changeForm") //清除表单缓存
            // console.log('App Launch')
						const res = await getGolobalConfig()
						if (_.get(res, 'code') === 200) {
						    uni.setStorageSync('globalConfigStorage', _.get(res, 'data.globalConfig', {}))
						}
						
						const icon = await getIcon()
						if(_.get(icon,'code')===200){
							uni.setStorageSync('iconList',_.get(icon,'data',{}))
						}
						globalConfig.icon = uni.getStorageSync('iconList')
						if(globalConfig.icon){
						uni.showLoading({
							title:"小程序初始化中"
						})
						this.$loginDefault()//登录默认用户				

						uni.hideLoading()
						}
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		},
		data:{
		},
		methods:{
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
