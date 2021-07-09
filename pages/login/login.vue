<template>
	<view>
		<dynamic-page :API="api"></dynamic-page>
		<!-- <button @click="getToken">测试登录</button> -->
	</view>
	
</template>

<script>
	import dynamicPage from '../../components/dynamic-page/index.vue'
	import { globalConfig } from '@/config.js'
	export default {
		data() {
			return {
				api: globalConfig.formHost + '?id=130'
			}
		},
		methods: {
			getToken(){
				let data = {
					username:"qy090",
					password:123456,
					app:"internal",
					from:5
				}
				uni.request({
				  // 请求路径
				  url: 'https://rt.zbsoft.top/auth/oauth/token',
				  data: data,
				  header: {
					'content-type': 'application/x-www-form-urlencoded'
				  },
				  method: 'POST',
				  success(res){
				      // 请求成功后获取openid和session_key
				      console.log('登陆成功 = ', res)
				  },
				  fail(err) {
				  	console.log('登陆失败 = ', err)
				  }
			})
		}
		},
		components: {
			dynamicPage
		}
	}
</script>

<style>

</style>
