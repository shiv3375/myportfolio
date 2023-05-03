import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../layouts/Section";
import { skillList } from "../data/skillsData";

const Skills = () => {
  return (
    <Section className="w-full h-full min-h-screen xl:max-w-screen-xl mx-auto flex flex-col justify-center items-center snap-center pt-28 md:pt-0">
      <h2 className="text-5xl font-bold text-light-slate mb-8 pb-5 border-b-2 inline-block border-green font-apple">
        Skills
      </h2>
      <div className="skill-list grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5 items-center">
        {skillList &&
          skillList?.map((singleSkill, index) => (
            <div key={index}>
              <AnimatePresence>
                <motion.div
                  variants={{
                    hidden: (index) => ({
                      opacity: 0,
                      x: 0,
                      y: 10 * index,
                      scale: 0.5,
                    }),
                    whileInView: (index) => ({
                      opacity: 1,
                      x: 0,
                      y: 0,
                      scale: 1,
                      transition: { delay: index * 0.5 },
                    }),
                  }}
                  initial="hidden"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <div className="skills flex justify-start items-center flex-col md:flex-row gap-4 p-4 relative z-10 cursor-pointer text-2xl font-bold text-slate transition duration-700 ease-in-out hover:-translate-y-2 hover:text-green font-apple">
                    <singleSkill.icon />
                    <h2 className="font-mango">{singleSkill.skillTitle}</h2>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          ))}
      </div>
    </Section>
  );
};

export default Skills;
