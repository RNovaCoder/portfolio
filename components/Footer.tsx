import FooterIcons from "./FooterIcons";
import siteMetadata from "@/data/siteMetadata";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center">
        <FooterIcons ></FooterIcons>
        <div className="mb-3 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.legalEntity}</div>
          <div>{` - `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  );
}


