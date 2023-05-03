import React from "react";
import { AnimatePresence } from "framer-motion";
import AnimationDiv from "../layouts/AnimationDiv";
import Section from "../layouts/Section";

const Banner = () => {
  return (
    <AnimatePresence>
      <Section className="w-full h-full min-h-screen xl:max-w-screen-xl mx-auto flex flex-col justify-center items-start snap-center">
        <AnimationDiv
          initial={{ opacity: 0, x: -500, y: 500, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-semibold text-green mb-6 md:mb-8 duration-700 relative font-mango">
            Hi, my name is
          </p>
        </AnimationDiv>
        <AnimationDiv
          initial={{ opacity: 0, x: -500, y: 500, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-lightest-slate mb-6 md:mb-8 font-apple">
            Deepak Vishwakarma.
          </h2>
        </AnimationDiv>
        <AnimationDiv
          initial={{ opacity: 0, x: -500, y: 500, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold font-apple text-slate mb-6 md:mb-8">
            I build things for the web.
          </h2>
        </AnimationDiv>
        <AnimationDiv
          initial={{ opacity: 0, x: -500, y: 500, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-xl">
            <p className="text-lg text-slate mb-6 md:mb-8 font-mango">
              I design and code beautifully simple things, and I love what I do.
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser. I value simple content structure, clean
              design patterns, and thoughtful interactions.
            </p>
          </div>
          <a  href="/DeepakResume.pdf" className="inline-flex justify-center items-center text-green bg-transparent border border-green rounded my-3 py-3 px-6 hover:bg-green-tint hover:outline-none font-mango" download target="_self">Download Me</a>
        </AnimationDiv>
      </Section>
    </AnimatePresence>
  );
};
export default Banner;
