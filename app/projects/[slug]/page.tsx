import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache } from "react";

import GridBlock from "@/components/grid-block";
import GooglePlayIcon from "@/components/icons/google-play-icon";
import SiteIcon from "@/components/icons/site-icon";
import ImageBlock from "@/components/image-block";
import ProjectCard from "@/components/project-card";
import TextBlock from "@/components/text-block";
import { PROJECTS, siteConfig } from "@/lib/constants";

type Props = { params: { slug: string } };

const getProject = cache((slug: string) => {
  return PROJECTS.find(product => product.slug === slug && product.full);
});

const getNextProjects = (slug: string) => {
  const projects = PROJECTS.filter(project => project.full);
  const currentIndex = projects.findIndex(project => project.slug === slug);

  // Get the next two projects, wrapping around if necessary
  const nextProject1 = projects[currentIndex + 1];
  const nextProject2 = projects[currentIndex + 2];

  return [nextProject1, nextProject2].filter(Boolean);
};

export async function generateMetadata({ params: { slug } }: Props): Promise<Metadata> {
  const project = getProject(slug);

  if (!project) return { title: "Not Found" };

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | ${siteConfig.title}`,
      description: project.description,
      images: [project.thumbnail],
      url: `${siteConfig.url}/projects/${project.slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | ${siteConfig.title}`,
      description: project.description,
      images: [project.thumbnail],
    },
  };
}

export default function ProjectPage({ params: { slug } }: Props) {
  const project = getProject(slug);
  const nextProjects = getNextProjects(slug);

  if (!project || !project.full) return notFound();

  return (
    <div className="container space-y-12 pb-14 pt-[3.75rem] text-[#4D5153] md:space-y-20 md:pb-[6.5rem] md:pt-28">
      <div className="space-y-6 md:space-y-10">
        <div className="space-y-10">
          <div className="flex flex-col items-end gap-6 md:flex-row md:justify-between">
            <div>
              <h1 className="mb-2 leading-normal md:text-2xl md:tracking-[0.02em]">{project.name}</h1>
              <p className="max-w-[42.0625rem] text-2xl font-bold leading-normal tracking-[0.02em] text-[#121212] md:text-[2.5rem] md:tracking-normal">
                {project.description}
              </p>
            </div>
            {project.url && (
              <Link
                href={project.url}
                target="_blank"
                className="inline-flex items-center border-b border-[#D8D9E0] pb-2 text-[#121212] hover:border-[#121212] md:font-bold"
              >
                {project.url.includes("play.google.com") ? (
                  <>
                    <GooglePlayIcon className="mr-2 size-4 shrink-0" />
                    Available on play store
                  </>
                ) : (
                  <>
                    Visit live site
                    <SiteIcon className="size-4 shrink-0" />
                  </>
                )}
              </Link>
            )}
          </div>
          <ImageBlock
            src={project.full.banner}
            alt={project.full.bannerAlt}
            objectFit="object-cover"
            priority
            className="aspect-[343/335] md:aspect-[1200/589]"
          />
        </div>
        {project.full.overview && <TextBlock title="Overview" content={project.full.overview} />}
        <ImageBlock
          src={project.full.banner1}
          alt={project.full.banner1Alt}
          className="aspect-[343/335] md:aspect-[1200/589]"
          objectFit="object-cover"
        />
        <TextBlock title="Problem statement" content={project.full.problemStatement} />
        <TextBlock title="Research findings" content={project.full.researchFindings} />
        {project.full.notes && (
          <ImageBlock
            src={project.full.notes}
            alt={project.full.notesAlt}
            className="aspect-[343/214] bg-[#FBFBFB] md:aspect-[1200/749]"
          />
        )}
        {project.full.ideation && <TextBlock title="Ideation and user flow" content={project.full.ideation} />}
        {project.full.chart && (
          <ImageBlock
            src={project.full.chart}
            alt={project.full.chartAlt}
            className="aspect-[343/454.58] md:aspect-[1200/1589.7]"
          />
        )}
        {project.full.solutions && (
          <TextBlock
            title="Solutions"
            content={project.full.solutions}
            className="space-y-0 [&>div]:space-y-3 md:[&>div]:space-y-4 [&>p]:mb-3 md:[&>p]:mb-6"
          />
        )}
        {project.full.brainstorming && <TextBlock title="Brainstorming solutions" content={project.full.brainstorming} />}
        {project.full.brainstormingDiagram && (
          <ImageBlock
            src={project.full.brainstormingDiagram}
            alt={project.full.brainstormingDiagramAlt}
            className="aspect-[343/272] bg-[#FAFAFA] md:aspect-[1200/950.22]"
          />
        )}
        <ImageBlock
          src={project.full.flowchart}
          alt={project.full.flowchartAlt}
          className="aspect-[343/205] bg-[#FBFBFB] md:aspect-[1200/716]"
        />
        {project.full.visualizing && <TextBlock title="Visualizing the solutions" content={project.full.visualizing} />}
        {project.full.wireframe && (
          <TextBlock title="Wireframe & Visual Designs" content={project.full.wireframe} className="md:whitespace-pre-wrap" />
        )}
        {project.full.wireframes?.map((item, index) => (
          <ImageBlock
            key={index}
            src={item.image}
            alt={item.alt}
            className="aspect-[343/205] bg-[#FBFBFB] md:aspect-[1200/504]"
          />
        ))}
        {project.full.components && (
          <div className="space-y-6 md:space-y-14">
            {project.full.components.map(component => (
              <GridBlock key={component.title} {...component} />
            ))}
          </div>
        )}
        {project.full.visualDesign && (
          <TextBlock title="Visual Design" content={project.full.visualDesign} className="whitespace-pre-wrap" />
        )}
        {project.full.screens.map((screen, index) => (
          <ImageBlock
            key={index}
            src={screen.image}
            alt={screen.alt}
            objectFit={screen.cover ? "object-cover" : "object-contain"}
            className={`_${project.slug}`}
          />
        ))}
        {project.full.reflection && (
          <TextBlock title="Reflection" content={project.full.reflection} className="whitespace-pre-wrap" />
        )}
        {project.full.outcome && <TextBlock title="Outcome" content={project.full.outcome} className="whitespace-pre-wrap" />}
        {project.full.conclusion && <TextBlock title="Conclusion" content={project.full.conclusion} />}
      </div>
      {nextProjects.length > 0 && (
        <div>
          <h2 className="mb-6 text-xl font-bold leading-[1.875rem] tracking-wide text-[#121212] md:mb-8">Next Project</h2>
          <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14">
            {nextProjects.map((project, index) => project && <ProjectCard key={index} project={project} />)}
          </div>
        </div>
      )}
    </div>
  );
}
