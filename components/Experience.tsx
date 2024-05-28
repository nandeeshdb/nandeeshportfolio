import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12  flex items-center justify-center gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex items-center justify-center text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex items-center flex-col gap-6 p-3 py-6 md:p-5 lg:p-10 ">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="flex flex-col gap-3 lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <div className="flex items-center gap-2">
                <p className="text-start text-lg text-slate-300">LimitPush</p>
                <p className=" text-start text-base text-slate-300"> [December 2023-June 2024]</p>
                </div>
                <div className="text-start flex flex-col gap-3 text-white-100  ">
                  {card.desc.map((data)=>(
                    <p key={data}>{data}</p>
                    
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
