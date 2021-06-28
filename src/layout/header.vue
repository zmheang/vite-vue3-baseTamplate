<template>
  <n-layout-header :inverted="inverted" bordered style="background-color: #e7f5ee">
    <div class="header-container">
      zmheang's zone

    </div>
    <!--        <n-menu mode="horizontal" :inverted="inverted" :options="menuOptions" />-->
  </n-layout-header>
</template>

<script>
  import { defineComponent, ref } from "vue";
  export default defineComponent({
    setup() {
      return {
        inverted: ref(false)
      };
    }
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

</style>
