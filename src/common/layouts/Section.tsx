import { AnimatePresence } from "framer-motion";
import React, { ReactNode } from "react";

type Props = {
  className: string;
  children?: ReactNode;
};

const Section = ({ className, children }: Props) => {
  return (
    <AnimatePresence>
      <section className={className}>{children}</section>
    </AnimatePresence>
  );
};

export default Section;
