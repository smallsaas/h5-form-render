<template>
	<view class="recordList">
		<view class="recordList_Item">
			<view class="title">
				{{item.title}}
			</view>
			<view class="state">
				{{item.state}}
				<span class="list-icon">
					&#xe66e;
				</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"record",
		props:{
			item:Object
		}
	}
</script>

<style lang="less">
	// 字体文件
	@font-face {
	  font-family: 'list-icon';  /* Project id 2631740 */
	  src: url('//at.alicdn.com/t/font_2631740_8pvfx57dh6v.woff2?t=1624851448576') format('woff2'),
	       url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAQwAAsAAAAACLQAAAPhAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqENIQOATYCJAMUCwwABCAFhG0HUBu+BxEVnCPJfiQYN41nvc5J1HVY6ET6Jnjg86z38386mXTUAbACO11B6bJY+yTewCNYrI8+SkmAALqtOYekpqMmS3IWPdpivuX08vmRkH4Xa6uinRB12zV6MZVo7eYiDRpEhpCo4vLiJf+HGP8BnuHCBN6DAEzq0QatU5debhKmj5k/k2wUQrEAO1VMnzJpDMZdh4pJFRgIHGnnKsRXOmh+7T7Yov+9+KyBMEBDlwgH9ZvYeTy3Zvx5Z0vLthguX7PKQ2F/DdABCdRqmUHMjbdNR5qxWkjMsM6KdoCJgYZWaph3M9/ZQh5sUd8UpmgDVco/ngbCgSCLQ3I7jWLk+DICBe9AIOHdTAQC3tk6NCTqChMTV4D/SC59OYFEoTkqUlyJaQkiNXeMZ9LEQVOWBU9iuUMhN9aJK6fSPZGIZBXe0yHq6rBICQ6KctybTgyGn4TBCoUCkYgQ3uizaHXg/q077faD4KO74TsPpwXDAi6Ei2REoz3vDQy4Q4wqQeP1FDt9SSDds/vA6WBa9a59e3eay5JeeIfW6brjY9oMN7GuBW4IYSpU702nU1CD18H5w9a1rqvmLV3l27xi6Yrf0Lh/ONnnGlPbXXPAgSkjzcGuRWJXAcNHxh6YWnNAbfcYl6/E5+pf2bmiY4fyzpXHJbbGttjOdfq7fB1X1ehTcLWgT41wi2ZjxjSfz2w2twjX8IivBg2qcpccyy4Jl2Qf66K/FNcfdJrfpsfMuPUNl0yoXpu1smzkiAora/WASS/KRgztVbtHzZrda/W+LLE1tmXuVesKYfja104bmB239+BBv+HK8vEpExrM/mTSTFqUbK8qoaRqe4lZ6/G2t27lFbcozsM1WAyAbclW0gL7pMRsD9hf5GYZv80SlhLSe2ocx/ej8fBRia2+GU4FwOv/X1vqonQydq2c1LwTwYPCFgop8eVQGQXI/WybAJ2eVODQYHej9rwrmbflyNNq4akOgzQbNGLIA4lBKV6Ra4GOk0bgwKAtmNSk62InKcxFIlQsUIN1AIIkzoNGAjdBksQDvCK/AR1m6w8jmyTMPEtZc27XlFlHxlAwgegLeUyNkowyM1KvmJoqZKdQpz6RdR4E13K8yQs2yGVM0K/UE1GgmGo4w2FYVQQtU4GxWJlIu7dtFfZOVkx1Z+aAoZBACRD5ArkYaSi1tJj5fv8KpYxKiGMwP6xPiGl59cBlcVLgL7ImFWZbOmsvKY8QigcpjNTAGS2oEmMEtOG9CigmLFmOSGvPplwqrcyqX1Ev4wrAJFyqpwkplNCFg+l5SL/MhM18SuwXedikju6jeWS0of6YJOl0AAAAAA==') format('woff2'),
	       url('//at.alicdn.com/t/font_2631740_3izvwixnlua.woff?t=1624851387463') format('woff'),
	       url('//at.alicdn.com/t/font_2631740_3izvwixnlua.ttf?t=1624851387463') format('truetype');
	}
	.list-icon {
	  font-family: "list-icon" !important;
	  font-size: 12px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
		padding: 5px 10px;
		line-height: 1.5em;
	}
	.recordList{
		width: auto;
		height: auto;
		padding: 0px 10px;
	}
	.recordList_Item{
		display: flex;
		// width: auto;
		border-bottom: 1px solid #eee;
		.title{
			// width: 80%;
			flex: 1;
			font-weight: bolder;
			font-size: 12px;
			float: left;
			line-height: 2em;
		}
		.state{
			width: auto;
			text-align: right;
			padding: 5px 0px;
			font-size: 12px;
			color: #aaa;
			line-height: 1.5em;
		}
	}
</style>
