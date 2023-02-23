import React from "react";
import Image from "next/image";
import Link from "next/link";

const Jumbotron = () => {
  return (
    <div className=" flex items-center justify-center py-[6rem] mx-[10rem]">
      <div className="w-2/3 pr-10">
        <h1 className="mb-4 text-[4.2rem] font-semibold leading-none tracking-tight text-gray-700 ">
          Get Connected
        </h1>
        <p className="mb-6 text-[1.2rem] text-justify font-normal text-gray-600 ">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <div className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          <Link href="/developers">Register</Link>
        </div>
      </div>
      <div className="w-2/3">
        <Image
          src="/dev.png"
          width={120}
          height={100}
          layout="responsive"
          alt="developer image"
        />
      </div>
    </div>
  );
};

export default Jumbotron;
