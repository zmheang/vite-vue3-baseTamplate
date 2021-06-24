<template>
  <div class="layout">
    <div class="layout-left">left</div>
    <div class="layout-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Layout"
  }
</script>

<style lang="scss" scoped>
  .layout{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .layout-left{
      width: 200px;
      height: 100%;
      background-color: #42b983;

    }

    .layout-right{
      width: calc(100% - 200px);
      height: 100%;

    }

  }

</style>
