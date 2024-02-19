import {
  TbSmartHome,
  TbBook2,
  TbMapStar,
  TbBriefcase,
  TbPencil,
  TbGift,
} from "react-icons/tb";
import { IoChevronBack } from "react-icons/io5";
import { HiMenuAlt1 } from "react-icons/hi";
import { PiFireFill } from "react-icons/pi";
import { FcLineChart } from "react-icons/fc";
import { FcAcceptDatabase } from "react-icons/fc";
import { PiPlayCircleBold, PiPauseCircleBold } from "react-icons/pi";

export type IconsType = keyof typeof Icons;
const Icons = {
  Home: TbSmartHome,
  Book: TbBook2,
  Map: TbMapStar,
  BriefCase: TbBriefcase,
  Pencil: TbPencil,
  Gift: TbGift,
  Menu: HiMenuAlt1,
  Chart: FcLineChart,
  Fire: PiFireFill,
  ChevronBack: IoChevronBack,
  Database: FcAcceptDatabase,
  Play: PiPlayCircleBold,
  Pause: PiPauseCircleBold,
};
export default Icons;
