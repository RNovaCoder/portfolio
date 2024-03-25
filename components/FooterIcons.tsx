"use client";
import { usePathname } from "next/navigation";
import SocialIcon from "@/components/social-icons";
import siteMetadata from "@/data/siteMetadata";

export default function FooterIcons() {
  const sobremi = !usePathname().includes("sobremi");
  return (
    <div
      className={
        (sobremi ? "mt-8" : "mt-1 border-t-2 w-full dark:border-slate-600 dark:border-t-[1px]") + " mb-3 flex space-x-4"
      }
    >
      {sobremi && (
        <>
          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size={6}
          />
          <SocialIcon
            kind="WhatsApp"
            href={`https://wa.me/${siteMetadata.whatsapp}`}
            size={6}
          />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
        </>
      )}
    </div>
  );
}
