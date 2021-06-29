
import { h } from "vue";
import { NIcon } from "naive-ui";
import {
  Home as HomeIcon,
  BookOutline as BookIcon,
  CloudyNight as CloudyNightIcon,
  Cloud as CloudIcon,
  LogoSoundcloud as LogoSoundcloudIcon,
  Woman as WomanIcon,
  Flag as FlagIcon,
  Bonfire as BonfireIcon,
  AirplaneSharp as AirplaneSharpIcon,
  LeafSharp as LeafSharpIcon,
  Water as WaterIcon,
  Heart as HeartIcon,
  Flower as FlowerIcon,
  Fish as FishIcon,
  Moon as MoonIcon,
  VolumeMedium as VolumeMediumIcon,
} from "@vicons/ionicons5";



export function renderIcon(icon) {
  return () => h(NIcon, null, {default: () => h(icon)});
}

export {
  HomeIcon,
  BookIcon,
  CloudyNightIcon,
  CloudIcon,
  LogoSoundcloudIcon,
  WomanIcon,
  FlagIcon,
  BonfireIcon,
  AirplaneSharpIcon,
  LeafSharpIcon,
  WaterIcon,
  HeartIcon,
  FlowerIcon,
  FishIcon,
  MoonIcon,
  VolumeMediumIcon

}


