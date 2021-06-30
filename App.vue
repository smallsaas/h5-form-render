<script>
    import { globalConfig } from '@/config.js'
    import { getGolobalConfig } from 'common/api.js'
    import _ from 'lodash'
	export default {
		onLaunch: async function() {
            console.log('App Launch')
            // 测试token
            uni.setStorageSync(globalConfig.tokenStorageKey, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAwMSIsInVzZXJJZCI6IjAiLCJ1c2VyVHlwZSI6MTAxLCJiVXNlclR5cGUiOiJTWVNURU0iLCJ0ZW5hbnRPcmdJZCI6MTAwMDAwMDAwMDAwMDAwMDAxLCJhY2NvdW50IjoiYWRtaW4iLCJleHRyYVVzZXJUeXBlIjowLCJpYXQiOjE2MjUwMzYxNjgsImp0aSI6IjAiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTYyNTI5NTM2OH0.JjSZKutYDezJ_WjAT56EzZWLTKj6foe_bNUlraYORnbFGrqYJbkJL5S-FAQTZv5RzflkzBs0wyd0LIB9B22ChA')
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
