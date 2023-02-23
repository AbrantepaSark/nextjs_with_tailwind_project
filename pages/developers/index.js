import React from "react";
import Head from "next/head";
import Navbar from "../../Components/Nav/Navbar";

const Developers = () => {
  return (
    <div>
      <Head>
        <title>Developers </title>
      </Head>
      <main>
        <Navbar />
        <div className="lg:mx-[10rem]"></div>
      </main>
    </div>
  );
};

export default Developers;
