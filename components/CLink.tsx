import { ReactNode } from "react";

const CLink = ({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: ReactNode;
}) => {
  return (
    <a
      className={"m-0 " + (children ? "" : "break-all ") + className}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children ? children : href}
    </a>
  );
};

export default CLink;
