"use client";
import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import { NCoderLogo } from "./social-icons/icons";
import Link from "./Link";
import MobileNav from "./MobileNav";
import ThemeSwitch from "./ThemeSwitch";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="mt-3 select-none">
      <header className="flex items-center justify-between shadow-md pl-3 md:pl-5 pr-4 md:pr-6 mb-8 bg-slate-800 dark:bg-zinc-700/40 rounded-lg transition-colors duration-100">
        <div>
          <div className="flex items-center justify-between">
            <div className="mr-3 my-3">
              <NCoderLogo className="h-12 w-12" />
            </div>
            <div className="hidden h-6 text-2xl sign font-semibold sm:block -mt-2 text-slate-200">
              <span className="fast-flicker">
                {siteMetadata.headerTitle.substring(0, 2)}
              </span>
              {siteMetadata.headerTitle.substring(2, 4)}
              <span className="flicker">
                {siteMetadata.headerTitle.substring(4, 8)}
              </span>
              {siteMetadata.headerTitle.substring(8, 20)}
            </div>
          </div>
        </div>
        <div className="flex items-center leading-5 space-x-4 sm:space-x-4 text-white dark:text-gray-100">
          {headerNavLinks
            .filter((link) => link.href !== "/")
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                prefetch={true}
                className={`hidden sm:block subrayado focus:clickIconAnimate p-2 font-extrabold text-lg  transition-all ease-in-out duration-200 hover:dark:bg-zinc-700 hover:rounded-md ${
                  pathname.startsWith(link.href)
                    ? "bg-gray-700 dark:bg-zinc-700 rounded-md text-white"
                    : ""
                }`}
              >
                {link.title}
              </Link>
            ))}
          <ThemeSwitch />
          <MobileNav author={siteMetadata.headerTitle} />
        </div>
      </header>
    </div>
  );
};

export default Header;
