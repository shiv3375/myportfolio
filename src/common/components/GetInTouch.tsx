import React from "react";
import Button from "../layouts/Button";
import Section from "../layouts/Section";
import { motion, AnimatePresence } from "framer-motion";

const GetInTouch = () => {
  return (
    <Section className="w-full h-full min-h-screen xl:max-w-screen-xl mx-auto flex flex-col justify-center items-center text-center snap-center">
      <AnimatePresence>
        <motion.div
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.7 },
          }}
          viewport={{ once: true }}
          className="w-full lg:w-[700px] text-center"
        >
          <h2 className="text-5xl font-bold text-light-slate mb-8 pb-5 border-b-2 inline-block border-green font-apple">
            Get in touch
          </h2>
          <p className="text-lg text-slate mb-6 font-mango">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <div className="flex justify-center items-center">
            <Button title="Say Hello" path="mailto: shivmishra3375@gmail.com" />
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default GetInTouch;
