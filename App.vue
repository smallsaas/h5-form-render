<script>
    import { globalConfig } from '@/config.js'
    import { getGolobalConfig } from 'common/api.js'
    import _ from 'lodash'
	export default {
		onLaunch: async function() {
            console.log('App Launch')
            // 测试token
            // uni.setStorageSync(globalConfig.tokenStorageKey, 'xxx')
            // 获取全局配置数据
            const res = await getGolobalConfig()
            if (_.get(res, 'code') === 200) {
                uni.setStorageSync('globalConfigStorage', _.get(res, 'data.globalConfig', {}))
            }
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
