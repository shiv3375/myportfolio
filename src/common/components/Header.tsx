import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FavIcon from "./icons/FavIcon.png";
import { socialData } from "../data/socialData";

const Header = () => {
  return (
    <AnimatePresence>
      <motion.header className="navbar navbar-expand-lg shadow-2xl px-8 py-3 fixed flex items-center w-full justify-between gap-5 bg-[#0a192fd9] bottom-0 left-0 md:hidden z-50">
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.5 },
          }}
          viewport={{ once: true }}
        >
          <Link href="/">
            <Image src={FavIcon} alt="imdeepss" width={50} height={50} />
          </Link>
        </motion.div>
        <ul className="flex justify-between items-center relative space-x-4 text-light-slate">
          {socialData &&
            socialData?.map((singleData, index) => (
              <AnimatePresence key={index}>
                <motion.div
                  variants={{
                    hidden: (index) => ({
                      opacity: 0,
                      x: 10 * index,
                      scale: 0.5,
                    }),
                    whileInView: (index) => ({
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      transition: { delay: index * 0.5 },
                    }),
                  }}
                  initial="hidden"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <Link href={singleData.path}>
                    <li className="p-2 hover:text-green cursor-pointer  transition duration-300 ease-in-out hover:-translate-y-2">
                      <singleData.icon />
                    </li>
                  </Link>
                </motion.div>
              </AnimatePresence>
            ))}
        </ul>
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;
