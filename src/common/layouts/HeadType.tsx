import Head from "next/head";
import React from "react";

type Props = {
  title: string;
  description: string;
  keywords: string;
};

const HeadTag = ({ title, description, keywords }: Props) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTag;
