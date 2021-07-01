<template>
  <page-meta>
    <navigation-bar
      :title="nbTitle"
      :title-icon="titleIcon"
      :title-icon-radius="titleIconRadius"
      :subtitle-text="subtitleText"
      :subtitle-color="nbFrontColor"
      :loading="nbLoading"
      :front-color="nbFrontColor"
      :background-color="nbBackgroundColor"
      :color-animation-duration="2000"
      color-animation-timing-func="easeIn"
    />
  </page-meta>
  <view class="content"></view>
</template>

<script>
  export default {
    data() {
      return {
        nbTitle: '标题',
        titleIcon: '../../static/logo.png',
        titleIconRadius: '20px',
        subtitleText: 'subtitleText',
        nbLoading: false,
        nbFrontColor: '#12318a',
        nbBackgroundColor: '#11563b'
      }
    },
    onLoad() {
    },
    methods: {
    }
  }
</script>