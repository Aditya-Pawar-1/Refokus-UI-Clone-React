import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ width, start, para, hover = false }) => {
  return (
    <motion.div
      whileHover={{ backgroundColor: hover && "#7443ff", padding: "25px" }}
      className={` bg-zinc-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1
          className={`text-3xl font-medium mt-5 ${
            start ? "w-[20%]" : "w-[70%]"
          }`}
        >
          {start ? `Let's get it, together.` : `Insights and behind the scenes`}
        </h1>
      </div>
      <div className="down w-full">
        {start && (
          <>
            <h1 className="text-8xl font-semibold leading-none tracking-tight">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Explore what drives our team
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
