import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";

const EmailContact = () => {
  return (
    <AnimatePresence>
      <div className="hidden md:flex fixed bottom-0 right-[5px] md:right-[40px] left-auto z-10 text-light-slate">
        <p className="flex flex-col justify-center items-center relative after:block after:h-[90px] after:w-[1px] after:mx-auto after:bg-light-slate hover:text-green font-mango">
          <Link href="mailto: shivmishra3375@gmail.com">
            <motion.span
              className="mx-auto my-2 flex p-[10] tracking-[.3em] cursor-pointer [writing-mode:vertical-lr] transition duration-300 ease-in-out hover:-translate-y-6"
              initial={{ opacity: 0, x: 0, y: -300, scale: 0.5 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 2.0 }}
            >
              shivmishra3375@gmail.com
            </motion.span>
          </Link>
        </p>
      </div>
    </AnimatePresence>
  );
};

export default EmailContact;
