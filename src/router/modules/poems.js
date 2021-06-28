import {
  renderIcon, BookIcon, CloudIcon, FlagIcon, VolumeMediumIcon,
  WomanIcon, HeartIcon, MoonIcon, WaterIcon, CloudyNightIcon,
  FlowerIcon, FishIcon, LeafSharpIcon, BonfireIcon, LogoSoundcloudIcon,
  AirplaneSharpIcon
} from '@/assets/icon/vicons-ionicoons5.js'
import utils from '@/utils/index'


export default [
  {
    path: '/#',
    label: "断章",
    key: utils.getUUID(),
    icon: renderIcon(BookIcon),
    disabled: false,
    children: [
      {
        path: '/#',
        label: "你站在桥上看风景",
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "看风景的人在楼上看你",
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "明月装饰了你的窗子",
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "你装饰了别人的梦",
        key: utils.getUUID(),
      },
    ]
  },
  {
    path: '/#',
    label: "教我如何不想她?",
    key: utils.getUUID(),
    icon: renderIcon(BookIcon),
    disabled: false,
    children: [
      {
        path: '/#',
        label: "天上飘着些微云",
        icon: renderIcon(CloudIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "地上吹着些微风",
        icon: renderIcon(FlagIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "啊",
        icon: renderIcon(VolumeMediumIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "微风吹动了我头发",
        icon: renderIcon(WomanIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "教我如何不想她",
        icon: renderIcon(HeartIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "月光恋爱着海洋",
        icon: renderIcon(MoonIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "海洋恋爱着月光",
        icon: renderIcon(WaterIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "啊",
        icon: renderIcon(VolumeMediumIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "这般蜜也似的银夜",
        icon: renderIcon(CloudyNightIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "教我如何不想她",
        icon: renderIcon(HeartIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "水面落花慢慢流",
        icon: renderIcon(FlowerIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "水底鱼儿慢慢游",
        icon: renderIcon(FishIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "啊",
        icon: renderIcon(VolumeMediumIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "燕子你说些什么话",
        icon: renderIcon(AirplaneSharpIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "教我如何不想她",
        icon: renderIcon(HeartIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "枯树在冷风里摇",
        icon: renderIcon(LeafSharpIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "野火在暮色中烧",
        icon: renderIcon(BonfireIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "啊",
        icon: renderIcon(VolumeMediumIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "西天还有些儿残霞",
        icon: renderIcon(LogoSoundcloudIcon),
        key: utils.getUUID(),
      },
      {
        path: '/#',
        label: "教我如何不想她",
        icon: renderIcon(HeartIcon),
        key: utils.getUUID(),
      }
    ]
  },
]



