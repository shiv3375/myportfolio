import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../layouts/Section";

const AboutMe = () => {
  return (
    <Section className="w-full h-full min-h-screen xl:max-w-screen-xl mx-auto flex md:flex-row flex-col justify-center items-center gap-5 snap-center">
      <AnimatePresence>
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial={{
            opacity: 0,
            x: -100,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { delay: 0.7 },
          }}
          viewport={{ once: true }}
          key="1"
        >
          <h2 className="text-5xl font-bold text-light-slate mb-8 pb-5 border-b-2 inline-block border-green font-apple">
            About Me
          </h2>
          <p className="text-lg text-slate mb-6 font-mango">
            Hello! My name is Shivansh and I enjoy creating things that live on
            the internet. My interest in web development started back in 2018
            when I decided to try editing custom themes — turns out hacking
            together a custom re blog button taught me a lot about HTML & CSS!
          </p>

          <p className="text-lg text-slate mb-6 font-mango">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&rsquo;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to specimen book.
          </p>
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 text-right"
          initial={{
            opacity: 0,
            x: 100,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            transition: { delay: 0.7 },
          }}
          viewport={{ once: true }}
          key="2"
        >
          <div className="md:mt-20">
            <div className="w-[400px] h-[400px] mx-auto bg-[url('../../../public/assets/images/shiv.jpeg')] bg-cover bg-no-repeat bg-top-center outline-none rounded-md relative z-30  before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-green before:overflow-hidden before:rounded-md before:opacity-50 before:z-50 before:hover:bg-transparent after:absolute after:w-full after:h-full after:top-5 after:left-5 after:border-2 after:border-green after:rounded-md after:-z-50 after:hover:transition after:hover:duration-300 after:hover:ease-in-out after:hover:top-0 after:hover:left-0"></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default AboutMe;

{
  /* <p className="text-lg text-slate mb-6 font-mango">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
          </p> */
}

{
  /* <p className="text-lg text-slate mb-6 font-mango">
          Here are a few technologies I’ve been working with recently:
        </p>
        <ul className="list-disc list-inside grid gap-3 grid-cols-1 md:grid-cols-2 text-slate cursor-pointer">
          <li className="transition duration-150 ease-out hover:ease-in hover:-translate-y-2 hover:text-green">
            <span className="">JavaScript (ES6+)</span>
          </li>
          <li className="transition duration-150 ease-out hover:ease-in hover:-translate-y-2 hover:text-green">
            TypeScript
          </li>
          <li className="transition duration-150 ease-out hover:ease-in hover:-translate-y-2 hover:text-green">
            NextJs
          </li>
          <li className="transition duration-150 ease-out hover:ease-in hover:-translate-y-2 hover:text-green">
            Tailwind Css
          </li>
          <li className="transition duration-150 ease-out hover:ease-in hover:-translate-y-2 hover:text-green">
            Jquery
          </li>
          <li className="transition duration-150 ease-out hover:ease-in hover:-translate-y-2 hover:text-green">
            WordPress
          </li>
        </ul> */
}
