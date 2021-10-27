<script>
    import { globalConfig } from '@/config.js'
    import { getGolobalConfig,getIcon } from 'common/api.js'
    import _ from 'lodash'
		import {Base64} from '@/utils/tools.js'
	export default {
		onLaunch: async function() {
						this.$wxlogin()
						this.$userProfile()
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
