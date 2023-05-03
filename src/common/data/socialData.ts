import GithubIcon from "@/components/icons/SocialIcon/GithubIcon";
import InstagramIcon from "@/components/icons/SocialIcon/InstagramIcon";
import LinkedInIcon from "@/components/icons/SocialIcon/LinkedInIcon";
import TwitterIcon from "@/components/icons/SocialIcon/TwitterIcon";
import WhatsappIcon from "@/components/icons/SocialIcon/WhatsappIcon";
import { ComponentType, MemoExoticComponent } from "react";

type SocialDataType = {
  icon: MemoExoticComponent<ComponentType<object>>;
  path: string;
};

export const socialData: SocialDataType[] = [
  {
    icon: GithubIcon,
    path: "https://gitlab.com/imdeepss",
  },
  {
    icon: WhatsappIcon,
    path: "",
  },
  {
    icon: InstagramIcon,
    path: "https://www.instagram.com/",
  },
  {
    icon: TwitterIcon,
    path: "",
  },
  {
    icon: LinkedInIcon,
    path: "https://www.linkedin.com/in/deepak-vishwakarma-126724154/",
  },
];
