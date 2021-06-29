<template>
  <n-layout has-sider position="absolute" style="top: 50px; bottom: 0px;">
    <n-layout-sider
            bordered
            show-trigger
            collapse-mode="width"
            :collapsed-width="64"
            :width="240"
            :inverted="inverted"
            :native-scrollbar="false"
    >
      <n-menu
              :inverted="inverted"
              :collapsed-width="64"
              :root-indent="24"
              :collapsed-icon-size="22"
              @update:value="menuChecked"
              :options="routes"
              :value="curMenu"
      />
    </n-layout-sider>
    <n-layout>
      <router-view></router-view>
    </n-layout>
  </n-layout>
</template>

<script>
  import { defineComponent, ref } from "vue";
  import utils from '@/utils/index.js';

  export default defineComponent({
    setup() {
      return {
        inverted: ref(false)
      };
    },
    data() {
      curMenu: utils.filterHidden(this.$router.options.routes)[0].key
    },
    computed: {
      routes() {
        // 将router的数据清洗为menu组件格式的数据
        return utils.filterHidden(this.$router.options.routes)
      },
    },
    methods: {
      menuChecked(key, item) {
        this.$router.push({path: item.path, query: {item: JSON.stringify(item)}})
        this.curMenu = key
      },
    }
  });
</script>

<style scoped>

</style>
