import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import { socialData } from "../data/socialData";

const SocialContact = () => {
  return (
    <div className="hidden md:flex fixed bottom-0 left-[5px] md:left-[40px] right-auto z-10 ">
      <ul className="flex flex-col justify-center items-center relative space-y-5 text-light-slate after:block after:h-[90px] after:w-[1px] after:mx-auto after:bg-light-slate">
        {socialData &&
          socialData?.map((singleData, index) => (
            <AnimatePresence key={index}>
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
                    transition: { delay: index * 1.5 },
                  }),
                }}
                initial="hidden"
                whileInView="whileInView"
                viewport={{ once: true }}
                custom={index}
              >
                <Link href={singleData.path} target="_blank">
                  <li className="p-2 hover:text-green cursor-pointer  transition duration-300 ease-in-out hover:-translate-y-2">
                    <singleData.icon />
                  </li>
                </Link>
              </motion.div>
            </AnimatePresence>
          ))}
      </ul>
    </div>
  );
};

export default SocialContact;
