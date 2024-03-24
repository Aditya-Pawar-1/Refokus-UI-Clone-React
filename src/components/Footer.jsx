import React from "react";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-10 flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-9xl text-[10rem] font-semibold leading-none tracking-tight">
            Refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4  ">
          <div className="basis-1/3 capitalize text-zinc-500">
            <h4 className="mb-10">socials</h4>
            {["instagram", "Twitter (X?)", "Linkedin"].map((item, index) => (
              <a key={index} href="#" className="block mt-2">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3 capitalize text-zinc-500">
            <h4 className="mb-10">socials</h4>
            {["instagram", "Twitter (X?)", "Linkedin"].map((item, index) => (
              <a key={index} href="#" className="block mt-2">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col items-end justify-between">
            <p className="text-right">
              Refokus is pionnering digital agency driven by design and
              empowered by technology
            </p>
            <img
              className="w-[80%]"
              src="https://assets-global.website-files.com/628ea50806d12b349bebc1ea/6482428d42dc637abdafb81a_Blue%20Label%201.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
