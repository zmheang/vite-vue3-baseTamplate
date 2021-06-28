<template>
  <n-layout-header
    :inverted="inverted"
    bordered
    style="background-color: #e7f5ee"
  >
    <div class="header-container">
      <!-- zmheang's zone -->
      <div class="logo">
        <img src="../assets/logo.png" alt="1" />
      </div>

      <div class="category">
          <div class="category-text">主页</div>
          <div class="category-text">信息</div>
          <div class="category-text">关于</div>
      </div>

      <div class="user-operation">3</div>
    </div>
    <!--        <n-menu mode="horizontal" :inverted="inverted" :options="menuOptions" />-->
  </n-layout-header>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      inverted: ref(false),
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../styles/base.scss";

.header-container {
  height: $header-height;
  line-height: $header-height;
  padding-left: 32px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;

  .logo {
    width: 210px;
    height: $header-height;

    img {
      height: 80%;
      vertical-align: middle;
    }
  }
  .category {
    width: calc(100% - 310px);
    height: $header-height;
    display: flex;
    justify-content: flex-start
    
    
  }
  .user-operation {
    width: 100px;
    height: $header-height;
  }

  .category-text {
      padding-right: 30px
    }
}
</style>
