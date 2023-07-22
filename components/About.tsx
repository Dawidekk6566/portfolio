import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-[#212121] min-h-full max-xl:px-8">
      <div className="w-full min-h-full max-w-[1200px] m-auto flex items-center max-lg:flex-col py-16">
        <Image
          className="object-cover rounded-tl-xl rounded-br-xl"
          alt="Laptop Image"
          src="/laptop-image.png"
          height={400}
          width={500}
        ></Image>
        <div className="pl-[5rem] pt-8 h-full flex-col items-center">
          <p className="text-[#4C70EF] uppercase font-semibold text-2xl tracking-wide pb-[1rem]">
            About me
          </p>
          <h2 className="text-white font-semibold text-4xl pb-[2rem]">
            I'm Dawid
          </h2>
          <span className="text-[#B0ADAD] text-lg leading-[150%]">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </span>
          <br></br>
        </div>
      </div>
    </section>
  );
};

export default About
