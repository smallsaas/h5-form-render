<script>
    import { globalConfig } from '@/config.js'
    import { getGolobalConfig } from 'common/api.js'
    import _ from 'lodash'
	export default {
		onLaunch: async function() {
            console.log('App Launch')
            // 测试token
            // uni.setStorageSync(globalConfig.tokenStorageKey, 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJvcmdJZCI6IjEwMDAwMDAwMDAwMDAwMDAwMSIsInVzZXJJZCI6IjAiLCJ1c2VyVHlwZSI6MTAxLCJiVXNlclR5cGUiOiJTWVNURU0iLCJ0ZW5hbnRPcmdJZCI6MTAwMDAwMDAwMDAwMDAwMDAxLCJhY2NvdW50IjoiYWRtaW4iLCJleHRyYVVzZXJUeXBlIjowLCJpYXQiOjE2MjUwMzYxNjgsImp0aSI6IjAiLCJzdWIiOiJhZG1pbiIsImV4cCI6MTYyNTI5NTM2OH0.JjSZKutYDezJ_WjAT56EzZWLTKj6foe_bNUlraYORnbFGrqYJbkJL5S-FAQTZv5RzflkzBs0wyd0LIB9B22ChA')
						// uni.setStorageSync(globalConfig.tokenStorageKey,'eyJleHBpcmVzX2luIjoxNjI1MDUzNTIxMjE4LCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwic2NvcGUiOiJhY2Nlc3MiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyVHlwZSI6InVzZXIiLCJ1c2VyTmFtZSI6IjAwMDAwMCIsImxvZ2luSWQiOiI0MzA3MjE3MmU0NTk0ODNkOTVlMGQ0YzM2NGI5MTdjMiIsInVzZXJJZCI6IjQzMDcyMTcyZTQ1OTQ4M2Q5NWUwZDRjMzY0YjkxN2MyIn0.Aiir-aUXBEqJWl6wT5VhpLhfh4i9BBIDBOZPc4-XRqQ')
						uni.setStorageSync(globalConfig.tokenStorageKey,'eyJleHBpcmVzX2luIjp7ImRheU9mTW9udGgiOjE2LCJkYXlPZldlZWsiOiJGUklEQVkiLCJkYXlPZlllYXIiOjE5NywiaG91ciI6OSwibWludXRlIjozNywibW9udGgiOiJKVUxZIiwibW9udGhWYWx1ZSI6NywibmFubyI6ODAyMDAwMDAwLCJzZWNvbmQiOjIyLCJ5ZWFyIjoyMDIxLCJjaHJvbm9sb2d5Ijp7ImNhbGVuZGFyVHlwZSI6Imlzbzg2MDEiLCJpZCI6IklTTyJ9fSwidG9rZW5fdHlwZSI6IkJlYXJlciIsInNjb3BlIjoic2VydmVyIiwiYWxnIjoiSFMyNTYifQ.eyJhY2Nlc3NfdG9rZW4iOiI3NGY1MTYzNWJhYjE0NjIxOWEzNzQxMjNiYWIxYjhkMSIsInJlZnJlc2hfdG9rZW4iOiJlNTdiZTcwZGFlYjI0NDE1OTE1ZDQyZWRjMWFjMjJmMyIsImV4cGlyZXNfaW4iOjg2NDAwMCwidXNlcl9pZCI6MjQsImRlcHRfaWQiOjE1LCJ1c2VybmFtZSI6InF5MDEiLCJ0b2tlbl90eXBlIjoiQmVhcmVyIiwic2NvcGUiOiJzZXJ2ZXIiLCJsaWNlbmNlIjoicHJvZ3Jlc3MiLCJmcm9tIjowLCJ0aW1lX3N0YW1wIjoiMTYyNTUzNTQ0MiIsInJvbGVfY29kZXMiOlsiUVlZSCJdfQ.vn6MSrhlHDF3B4EBqCXVL0531MWqJAZQM__wrXpO2N0')
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
