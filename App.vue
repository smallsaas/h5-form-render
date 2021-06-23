<script>
    import { globalConfig } from '@/config.js'
	export default {
		onLaunch: function() {
			console.log('App Launch')
            // 测试token
            // uni.setStorageSync(globalConfig.tokenStorageKey, 'xxx')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
