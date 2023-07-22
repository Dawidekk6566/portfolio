import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="bg-[#212121]">
      <p className="text-[#4C70EF] uppercase text-2xl font-semibold tracking-wider text-center pb-16">
        Portfolio
      </p>
      <h2 className="text-white font-semibold uppercase text-4xl text-center tracking-widest pb-16">
        Latest projects
      </h2>
      <div className="flex justify-center gap-32 max-xl:flex-col max-xl:items-center pb-16 w-full max-sm:px-32 max-sm:m-auto">
        <div className="bg-[#292C36] h-full w-max">
          <Image
            alt="Sushi Website Preview"
            src="/sushi-preview.png"
            width={380}
            height={300}
          ></Image>
          <p className="text-white font-semibold text-lg p-8">
            Sushi Restaurant Website
          </p>
          <Link href="https://sushi-smaczny.vercel.app/" target="_blank">
            <button className="p-4 m-8 mt-0 text-white text-sm font-semibold bg-[#558FFF] rounded-lg">
              View Demo
            </button>
          </Link>
        </div>
        <div>
          <div className="bg-[#292C36] h-full w-max">
            <Image
              alt="Smartwatch Website Preview"
              src="/smartwatch-preview.png"
              width={380}
              height={300}
            ></Image>
            <p className="text-white font-semibold text-lg p-8">
              Smartwatch Website
            </p>
            <Link href="https://smartwatch-shop.vercel.app/" target="_blank">
              <button className="p-4 m-8 mt-0 text-white text-sm font-semibold bg-[#558FFF] rounded-lg">
                View Demo
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div className="bg-[#292C36] h-full w-max">
            <Image
              alt="BuyCar company website preview"
              src="/buycar1-preview.png"
              width={380}
              height={300}
            ></Image>
            <p className="text-white font-semibold text-lg p-8">
              BuyCar Website
            </p>
            <Link href="https://buy-car-pi.vercel.app/" target="_blank">
              <button className="p-4 m-8 mt-0 text-white text-sm font-semibold bg-[#558FFF] rounded-lg">
                View Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
