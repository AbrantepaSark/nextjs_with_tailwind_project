//import Link from "next/link";
import React from "react";
import Head from "next/head";

import ItemInput from "../Components/Input/ItemInput";
import Navbar from "../Components/Nav/Navbar";
import Jumbotron from "../Components/Jumbotron/Jumbotron";

export default function () {
  return (
    <div>
      <Head>
        <title>Developer World</title>
      </Head>
      <main>
        <Navbar />
        <Jumbotron />
      </main>
    </div>
  );
}
