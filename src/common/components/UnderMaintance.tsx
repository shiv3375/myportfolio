import React from "react";

const UnderMaintance = () => {
  return (
    <section className="text-center flex flex-col justify-center items-center w-full h-screen gap-5">
      <h2
        className="text-xl font-semibold text-lightest-slate duration-700 relative font-mango
    "
      >
        Our website is currently down for maintenance. Please check back soon as
        we work to improve our site.
      </h2>
      <p className="text-lg font-semibold text-green mb-6 md:mb-8 duration-700 relative font-mango">
        Thank you!
      </p>
    </section>
  );
};

export default UnderMaintance;
