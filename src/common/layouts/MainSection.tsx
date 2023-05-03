import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const MainSection = ({ children }: Props) => {
  return (
    <main className="relative w-full h-full md:h-screen bg-theme-navy mx-auto px-10 md:px-20 lg:px-40  overflow-auto block gap-10 snap-y snap-mandatory">
      {children}
    </main>
  );
};
export default MainSection;
