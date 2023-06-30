import React from "react";
import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import EmailContact from "@/components/EmailContact";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Skills from "@/components/Skills";
import SocialContact from "@/components/SocialContact";
import type { NextPage } from "next";
import HeadTag from "src/common/layouts/HeadType";
import MainSection from "src/common/layouts/MainSection";
import TsParticals from "src/common/layouts/TsParticles";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";

const seoTitle = "Shivansh Mishra | Software Engineer";
const seoDescription =
  "Shivansh Mishra, Web Developer, imdeepss, shivansh mishra, fullstack developer,software engineer";
const seoKeywords =
  "imdeepss,shivansh mishra , Shivansh Mishra, web developer, software engineer, full stack developer, software engineer";

const Home: NextPage = () => {
  return (
    <MainSection>
      <TsParticals />
      <HeadTag
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
      />
      <Header />
      <SocialContact />
      <EmailContact />
      <Banner />
      <AboutMe />
      <Skills />
      <GetInTouch />
      <Footer />
      <Analytics />
    </MainSection>
  );
};

export default Home;
