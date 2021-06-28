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

  // const menuOptions = [
  //   {
  //     label: "教我如何不想她?",
  //     key: "menu-1",
  //     icon: bookIcon,
  //     disabled: false,
  //     children: [
  //       {
  //         label: "天上飘着些微云",
  //         icon: renderIcon(CloudIcon),
  //         key: "menu-1-1",
  //       },
  //       {
  //         label: "地上吹着些微风",
  //         icon: renderIcon(FlagIcon),
  //         key: "menu-1-2",
  //       },
  //       {
  //         label: "啊",
  //         icon: renderIcon(VolumeMediumIcon),
  //         key: "menu-1-3",
  //       },
  //       {
  //         label: "微风吹动了我头发",
  //         icon: renderIcon(WomanIcon),
  //         key: "menu-1-4",
  //       },
  //       {
  //         label: "教我如何不想她",
  //         icon: renderIcon(HeartIcon),
  //         key: "menu-1-5",
  //       },
  //       {
  //         label: "月光恋爱着海洋",
  //         icon: renderIcon(MoonIcon),
  //         key: "menu-1-6",
  //       },
  //       {
  //         label: "海洋恋爱着月光",
  //         icon: renderIcon(WaterIcon),
  //         key: "menu-1-7",
  //       },
  //       {
  //         label: "啊",
  //         icon: renderIcon(VolumeMediumIcon),
  //         key: "menu-1-8",
  //       },
  //       {
  //         label: "这般蜜也似的银夜",
  //         icon: renderIcon(CloudyNightIcon),
  //         key: "menu-1-9",
  //       },
  //       {
  //         label: "教我如何不想她",
  //         icon: renderIcon(HeartIcon),
  //         key: "menu-1-10",
  //       },
  //       {
  //         label: "水面落花慢慢流",
  //         icon: renderIcon(FlowerIcon),
  //         key: "menu-1-11",
  //       },
  //       {
  //         label: "水底鱼儿慢慢游",
  //         icon: renderIcon(FishIcon),
  //         key: "menu-1-12",
  //       },
  //       {
  //         label: "啊",
  //         icon: renderIcon(VolumeMediumIcon),
  //         key: "menu-1-13",
  //       },
  //       {
  //         label: "燕子你说些什么话",
  //         icon: renderIcon(AirplaneSharpIcon),
  //
  //         key: "menu-1-14",
  //       },
  //       {
  //         label: "教我如何不想她",
  //         icon: renderIcon(HeartIcon),
  //         key: "menu-1-15",
  //       },
  //       {
  //         label: "枯树在冷风里摇",
  //         icon: renderIcon(LeafSharpIcon),
  //         key: "menu-1-16",
  //       },
  //       {
  //         label: "野火在暮色中烧",
  //         icon: renderIcon(BonfireIcon),
  //         key: "menu-1-17",
  //       },
  //       {
  //         label: "啊",
  //         icon: renderIcon(VolumeMediumIcon),
  //         key: "menu-1-18",
  //       },
  //       {
  //         label: "西天还有些儿残霞",
  //         icon: renderIcon(LogoSoundcloudIcon),
  //         key: "menu-1-19",
  //       },
  //       {
  //         label: "教我如何不想她",
  //         icon: renderIcon(HeartIcon),
  //         key: "menu-1-20",
  //       }
  //     ],
  //   },
  //   {
  //     label: "断章",
  //     key: "menu-2",
  //     icon: renderIcon(BookIcon),
  //     disabled: false,
  //     children: [
  //       {
  //         label: "你站在桥上看风景",
  //         key: "menu-2-1",
  //       },
  //       {
  //         label: "看风景的人在楼上看你",
  //         key: "menu-2-2",
  //       },
  //       {
  //         label: "明月装饰了你的窗子",
  //         key: "menu-2-3",
  //       },
  //       {
  //         label: "你装饰了别人的梦",
  //         key: "menu-2-4",
  //       },
  //     ],
  //   },
  //   {
  //     label: "从前慢",
  //     key: "menu-3",
  //     icon: renderIcon(BookIcon),
  //     children: [
  //       {
  //         label: "记得早先少年时",
  //         key: "menu-3-1",
  //         icon: renderIcon(BookIcon)
  //       },
  //       {
  //         label: "大家诚诚恳恳",
  //         key: "menu-3-2",
  //         icon: renderIcon(BookIcon)
  //       },
  //       {
  //         label: "说一句，是一句",
  //         key: "menu-3-3",
  //         icon: renderIcon(BookIcon)
  //       },
  //       {
  //         label: "清早上火车站",
  //         key: "menu-3-4",
  //         icon: renderIcon(BookIcon)
  //       },
  //       {
  //         label: "长街黑暗无行人",
  //         key: "menu-3-5",
  //         icon: renderIcon(BookIcon)
  //       },
  //       {
  //         label: "卖豆浆的小店冒着热气",
  //         key: "menu-3-6",
  //         icon: renderIcon(BookIcon)
  //       },
  //       {
  //         label: "从前的日色变得慢",
  //         key: "menu-3-7",
  //         icon: renderIcon(BookIcon)
  //       },
  //       {
  //         label: "车，马，邮件都慢",
  //         key: "menu-3-8",
  //         icon: renderIcon(BookIcon)
  //       },
  //       {
  //         label: "一生只够爱一个人",
  //         key: "menu-3-9",
  //         icon: renderIcon(BookIcon)
  //       },
  //       {
  //         label: "从前的锁也好看",
  //         key: "menu-3-10",
  //         icon: renderIcon(BookIcon)
  //       },
  //       {
  //         label: "钥匙精美有样子",
  //         key: "menu-3-11",
  //         icon: renderIcon(BookIcon)
  //       },
  //       {
  //         label: "你锁了，人家就懂了",
  //         key: "menu-3-12",
  //         icon: renderIcon(BookIcon)
  //       }
  //
  //     ]
  //   }
  // ];

  export default defineComponent({
    setup() {
      return {
        inverted: ref(false)
      };
    },
    computed: {
      routes() {
        // 将router的数据清洗为menu组件格式的数据
        return utils.filterHidden(this.$router.options.routes)
      },
    },
    methods: {
      menuChecked(key, item) {
        // this.$router.push({path: key, query: {item: JSON.stringify(item)}})
        console.log(this.$router.options.routes)
      },
    }
  });
</script>

<style scoped>

</style>
