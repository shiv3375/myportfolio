import BootstrapIcon from "@/components/icons/ProgramLanguageIcon/BootstrapIcon";
import CssIcon from "@/components/icons/ProgramLanguageIcon/CssIcon";
import HtmlIcon from "@/components/icons/ProgramLanguageIcon/HtmlIcon";
import JavascriptIcon from "@/components/icons/ProgramLanguageIcon/JavascriptIcon";
import JqueryIcon from "@/components/icons/ProgramLanguageIcon/JqueryIcon";
import MySQLIcon from "@/components/icons/ProgramLanguageIcon/MySQLIcon";
import NextJsICon from "@/components/icons/ProgramLanguageIcon/NextJsICon";
import PhpIcon from "@/components/icons/ProgramLanguageIcon/PhpIcon";
import TailwindIcone from "@/components/icons/ProgramLanguageIcon/TailwindIcone";
import Typescript from "@/components/icons/ProgramLanguageIcon/Typescript";
import { ComponentType, MemoExoticComponent } from "react";

type SkillsDataType = {
  icon: MemoExoticComponent<ComponentType<object>>; //JSX.Element;
  skillTitle: string;
};

export const skillList: SkillsDataType[] = [
  {
    icon: HtmlIcon,
    skillTitle: "HTML",
  },
  {
    icon: CssIcon,
    skillTitle: "CSS",
  },
  {
    icon: BootstrapIcon,
    skillTitle: "Bootstrap",
  },
  {
    icon: TailwindIcone,
    skillTitle: "Tailwind Css",
  },
  {
    icon: PhpIcon,
    skillTitle: "React JS",
  },
  {
    icon: MySQLIcon,
    skillTitle: "MySQL",
  },
  {
    icon: JqueryIcon,
    skillTitle: "Jquery",
  },
  {
    icon: JavascriptIcon,
    skillTitle: "Javascript",
  },
  {
    icon: Typescript,
    skillTitle: "Typescript",
  },
  {
    icon: NextJsICon,
    skillTitle: "NextJs",
  },
];
