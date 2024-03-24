import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Work = () => {
  const [iamges, setIamges] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-1080.webp",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15.webp",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11.jpg",
      top: "60%",
      left: "53%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (scollVal) => {
    function showImages(arr) {
      setIamges((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(scollVal * 100)) {
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 2:
        showImages([0, 1]);
        break;
      case 3:
        showImages([0, 1, 2]);
        break;
      case 4:
        showImages([0, 1, 2, 3]);
        break;
      case 5:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 6:
        showImages([0, 1, 2, 3, 4, 5]);
        break;

      default:
        break;
    }
  });

  return (
    <div className="w-full mt-20">
      <div className="relative max-w-screen-lg mx-auto text-center font-medium tracking-tight select-none">
        <h1 className="text-[30vw] leading-none">work</h1>
        <div className="absolute top-0 w-full h-full">
          {iamges.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute -translate-x-[50%] -translate-y-[50%] w-60 h-60 object-cover rounded-lg"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
