<template>
  <n-loading-bar-provider>
    <n-layout class="w-h-100">
      <!-- 头部信息 -->
      <zm-header></zm-header>
      <!-- 主体信息 -->
      <zm-main-container></zm-main-container>
      <!-- 底部信息 -->
    </n-layout>
  </n-loading-bar-provider>
</template>

<script >
  import { useLoadingBar } from 'naive-ui'
  import zmHeader from './header.vue'
  import zmMainContainer from './container.vue'
  import { defineComponent } from "vue";

  export default defineComponent({
    name: 'layout',
    components: { zmHeader, zmMainContainer },
  });
</script>

<style lang="scss" scoped>
  @import '../styles/base.scss';

  .header-container {
    height: $header-height;
    line-height: $header-height;
    padding-left: 30px;
    font-size: 22px;
    font-weight: 600;
  }

  .main-container {
    height: calc(100% - #{$header-height + $footer-height});
  }

  .foot-container {
    height: $footer-height;
  }


</style>
