import React from "react";
import Image from "next/image";

const Specialization = () => {
  return (
    <section className="bg-[#212121] py-16">
      <p className="text-[#4C70EF] uppercase font-semibold text-2xl text-center pb-8">
        What i do
      </p>
      <h2 className="text-white text-4xl uppercase font-semibold text-center pb-24">
        Specializing in
      </h2>
      <div className="flex justify-center w-full pb-16">
        <div className="h-52 max-md:h-full max-md:mx-8 w-[30rem] bg-[#292C36] rounded-2xl p-8">
          <div className="flex max-md:flex-col md:items-center gap-4">
            <Image src="/web-development.png" width={64} height={64}></Image>
            <h3 className="text-2xl text-white font-semibold md:w-1/2">
              Front-end Development
            </h3>
          </div>
          <div className="flex items-end h-1/2 max-md:my-8">
            <p className="text-[#B0ADAD] text-lg w-full">
              Lom ipsum dolo, sit amet consectetu adpisicing elit, rem voluptas
              sed blanditiis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
