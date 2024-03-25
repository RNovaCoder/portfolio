"use client";

import { useEffect, useRef, useState } from "react";
import { Toc } from "./remark-toc-headings";
import { toggleContent } from "scripts/utils";
import { ArrowSmooth } from "./social-icons/icons";
export interface TOCInlineProps {
  toc: Toc;
  indentDepth?: number;
  fromHeading?: number;
  toHeading?: number;
  asDisclosure?: boolean;
  exclude?: string | string[];
}

/**
 * Generates an inline table of contents
 * Exclude titles matching this string (new RegExp('^(' + string + ')$', 'i')).
 * If an array is passed the array gets joined with a pipe (new RegExp('^(' + array.join('|') + ')$', 'i')).
 *
 * @param {TOCInlineProps} {
 *   toc,
 *   indentDepth = 3,
 *   fromHeading = 1,
 *   toHeading = 6,
 *   asDisclosure = false,
 *   exclude = '',
 * }
 *
 */
const TOCInline = ({
  toc,
  indentDepth = 3,
  fromHeading = 1,
  toHeading = 6,
  asDisclosure = false,
  exclude = "",
}: TOCInlineProps) => {
  const re = Array.isArray(exclude)
    ? new RegExp("^(" + exclude.join("|") + ")$", "i")
    : new RegExp("^(" + exclude + ")$", "i");

  const filteredToc = toc.filter(
    (heading) =>
      heading.depth >= fromHeading &&
      heading.depth <= toHeading &&
      !re.test(heading.value),
  );
  const [Expanded, setExpanded] = useState(true);

  const Ref = useRef<HTMLDivElement>(null);

  const tocList = (
    <ul className="p-0 m-0">
      {filteredToc.map((heading) => (
        <li
          style={{ listStyleType: "none" }}
          key={heading.value}
          className={`${heading.depth >= indentDepth && "ml-8"} leading-normal`}
        >
          <a
            href={heading.url}
            className="text-blue-600 dark:text-sky-500 no-underline"
          >
            {"• " + heading.value}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {asDisclosure ? (
        <div className="bg-gray-200 select-none dark:bg-zinc-800/95 rounded-lg py-4 px-6">
          <div className="text-lg group md:text-xl font-bold flex cursor-pointer w-36">
            <button
              onClick={() => {
                toggleContent(Ref.current, Expanded)
                setExpanded(!Expanded)
              }}
              className={
                "h-9 w-9 transition-transform ease-in-out duration-150 not-prose block " +
                (Expanded ? "" : "-rotate-90")
              }
            >
              <ArrowSmooth className="group-hover:animate-wave fill-slate-500/70 group-hover:fill-slate-500"></ArrowSmooth>
            </button>
            <button
              onClick={() => {
                toggleContent(Ref.current, Expanded)
                setExpanded(!Expanded)
              }}
              className="my-auto not-prose block"
            >
              Contenido
            </button>
          </div>
          <div
            ref={Ref}
            className="overflow-hidden pl-2 transition-all ease-in-out duration-200"
          >
            {tocList}
          </div>
        </div>
      ) : (
        tocList
      )}
    </div>
  );
};

export default TOCInline;
