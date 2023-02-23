import React from "react";
import Head from "next/head";
import Navbar from "../../Components/Nav/Navbar";

const Posts = () => {
  return (
    <div>
      <Head>
        <title>Posts</title>
      </Head>
      <main>
        <Navbar />
      </main>
    </div>
  );
};

export default Posts;
