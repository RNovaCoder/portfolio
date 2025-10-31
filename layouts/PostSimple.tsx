import { ReactNode } from "react";
import { formatDate } from "pliny/utils/formatDate";
import { CoreContent } from "pliny/utils/contentlayer";
import type { Blog, Authors } from "contentlayer/generated";
import Comments from "@/components/Comments";
import Link from "@/components/Link";
import PageTitle from "@/components/PageTitle";
import SectionContainer from "@/components/SectionContainer";
import siteMetadata from "@/data/siteMetadata";
import ScrollTopAndComment from "@/components/ScrollTopAndComment";
import Image from "@/components/Image";
import Tag from "@/components/Tag";

interface LayoutProps {
  content: CoreContent<Blog>;
  authorDetails: CoreContent<Authors>[];
  next?: { path: string; title: string };
  prev?: { path: string; title: string };
  children: ReactNode;
}
export default function PostLayout({
  content,
  authorDetails,
  next,
  prev,
  children,
}: LayoutProps) {
  const { path, slug, date, title, tags, logo, siteUrl } = content;
  const basePath = path.split("/")[0];

  return (
    <SectionContainer>
      <div className="hidden md:block">
        <ScrollTopAndComment />
      </div>
      <article className="-mx-3">
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>
                      {formatDate(date, siteMetadata.locale)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <div className="flex justify-center items-center gap-x-3 sm:gap-x-4 md:gap-x-5 flex-wrap gap-y-3">
                  <PageTitle>{title}</PageTitle>
                  {logo && (
                    <img
                      className="shadow-none w-8 h-8 sm:w-10 sm:h-10 md:w-[52px] md:h-[52px]"
                      src={logo}
                    />
                  )}
                </div>
                <div className="flex relative flex-wrap gap-y-4 px-1 flex-row items-center justify-between mt-4 -mb-4">
                  <div className="flex">
                    <Link
                      href={`/${basePath}`}
                      className="arrow-animate focus:clickIconAnimate overflow-hidden text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-label="Proyectos"
                      data-icon={"«"}
                    >
                      Proyectos
                    </Link>
                  </div>
                  {siteUrl ? (
                      <Link
                        href={siteUrl}
                        className="text-blue-600 group bg-gray-200 rounded-lg dark:bg-zinc-700/70 py-2 px-4 dark:text-blue-400 hover:bg-gray-300/80 hover:dark:bg-zinc-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="group-hover:underline">Ir a sitio</span> <span className="inline-block animate-wave"> 🌐 </span>
                      </Link>
                  ) : (
                    authorDetails.map(
                      (author, key) =>
                        author.name && (
                          <Link href={`/sobremi`} key={key}>
                            <ul className="flex flex-wrap px-3 select-none justify-center gap-4 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8 bg-gray-200 dark:bg-zinc-700/70 p-2 rounded-lg shadow-md hover:bg-gray-300 hover:dark:bg-zinc-700">
                              <li
                                className="flex items-center space-x-2"
                                key={author.name}
                              >
                                {author.avatar && (
                                  <div className="h-7 w-7 overflow-hidden">
                                    <Image
                                      width={50}
                                      height={50}
                                      src={author.avatar}
                                      alt="avatar"
                                      className="overflow-hidden w-full h-full rounded-full object-cover"
                                    />
                                  </div>
                                )}
                                <span className="whitespace-nowrap text-base font-medium leading-5">
                                  {author.name}
                                </span>
                              </li>
                            </ul>
                          </Link>
                        ),
                    )
                  )}
                </div>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-[52rem] justify-self-center pb-8 pt-10 dark:prose-invert">
                {children}
              </div>
            </div>
            <footer>
              <div className="flex sm:px-1 flex-wrap flex-row text-sm font-medium gap-x-[40px] justify-between sm:text-base">
                {prev && prev.path ? (
                  <Link
                    href={`/${prev.path}`}
                    data-icon={"«"}
                    className="focus:clickCardAnimate max-w-full mt-4 xl:mt-8 sm:flex-1 inline-block arrow-static-l text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    {prev.title}
                  </Link>
                ) : (
                  <div className="flex-1 h-0"></div>
                )}
                {next && next.path ? (
                  <Link
                    href={`/${next.path}`}
                    className="focus:clickCardAnimate text-right text-primary-500 max-w-full mt-4 xl:mt-8 sm:flex-1 inline-block arrow-static hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Next post: ${next.title}`}
                    data-icon={"»"}
                  >
                    {next.title}
                  </Link>
                ) : (
                  <div className="flex-1 h-0"></div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  );
}
