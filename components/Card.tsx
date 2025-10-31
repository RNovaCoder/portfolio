import { useEffect, useState } from "react";
import Image from "./Image";
import Link from "./Link";
import { DevIcons } from "./DevIcons";

const Card = ({ title, description, imgSrc, href, techStack }) => {

  return (
    <div className="max-w-lg  rounded-xl">
      <Link href={href} className="block group hover:scale-[1.02] transition-transform duration-150 ease-in-out transform-gpu">
        <div className="flex flex-col hover:border-[#2deaff] h-full overflow-hidden rounded-xl border-2 p-[6px] dark:shadow-slate-800 shadow-card shadow-slate-200 hover:dark:shadow-[#60feff] border-zinc-400/60 hover:shadow-[#2bc6a5] dark:border-slate-600 hover:dark:border-[#60ffff]">
          {imgSrc && (
            <button className="flex-shrink-0 object-none !overflow-hidden rounded-md">
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center overflow-hidden md:h-72 lg:h-72 transition-transform ease-in-out duration-150 group-hover:scale-[1.02]"
                width={500}
                height={300}
              />
            </button>
          )}
          <div className="flex flex-col h-full justify-between p-3">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {techStack.map((t) => {
                  const Icon = DevIcons[t];
                  return (
                    <div
                      key={t}
                      className="flex items-center justify-center gap-2 text-slate-100 dark:text-slate-100 rounded-md border-[3px] border-gray-400 dark:border-gray-400 bg-gray-800  dark:bg-gray-800 p-1 px-2 font-bold text-sm md:text-sm"
                    >
                      {t}
                      <div className="w-6 h-6">
                        <Icon />
                      </div>
                    </div>
                  );
                })}
              </div>
              <h2 className="mb-1 text-xl font-bold leading-8 tracking-tight">
                {title}
              </h2>
              <p className="mb-1 prose max-w-none text-sm max-h-56 text-ellipsis overflow-hidden ... text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
            
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
