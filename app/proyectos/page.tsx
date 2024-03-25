import Card from "@/components/Card";
import { genPageMetadata } from "app/seo";
import { allCoreContent, sortPosts } from "pliny/utils/contentlayer";
import { allBlogs } from "contentlayer/generated";
import { PortfolioData } from "@/components/PortfolioData";
export const metadata = genPageMetadata({ title: "Proyectos" });

export default function Projects() {
  const posts = allCoreContent(sortPosts(allBlogs));

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Proyectos
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Proyectos personales desarrollados con una amplia variedad de
            tecnologías, incluyen algo de branding
          </p>
        </div>
        <div className="py-5">
          <div className="flex flex-wrap justify-center gap-8">
            {posts.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.summary}
                imgSrc={d.imgSrc}
                href={"/proyectos/" + d.slug}
                techStack={d.techStack}
              />
            ))}
            <Card
              key={PortfolioData.title}
              title={PortfolioData.title}
              description={PortfolioData.summary}
              imgSrc={PortfolioData.imgSrc}
              href={PortfolioData.href}
              techStack={PortfolioData.techStack}
            />
          </div>
        </div>
      </div>
    </>
  );
}
