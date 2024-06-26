import TOCInline from "./TOCInline";
import Pre from "./Pre";
import BlogNewsletterForm from "pliny/ui/BlogNewsletterForm";
import type { MDXComponents } from "mdx/types";
import Image from "./Image";
import CustomLink from "./Link";
import CImage from "./CImage";
import CVideo from "./CVideo";
import CLink from "./CLink";

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  BlogNewsletterForm,
  CImage,
  CVideo,
  CLink,
};
