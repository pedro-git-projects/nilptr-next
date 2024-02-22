import { Project } from "@/interfaces/project";
import Image from "next/image";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <article className="rounded-lg border border-gray-100 bg-light-bg-dark p-4 shadow-sm transition hover:shadow-lg sm:p-6 dark:border-gray-800 dark:bg-background-light dark:shadow-gray-700/25">
      <Image src={project.languageSVG} alt="tech logo" width={64} height={32} />

      <a href="#">
        <h3 className="mt-0.5 text-lg font-medium">{project.title}</h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed">{project.excerpt}</p>

      <a
        href={project.githubLink}
        className="group mt-4 inline-flex items-center gap-1 text-sm font-medium"
      >
        Ver no Github
        <span
          aria-hidden="true"
          className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
        >
          &rarr;
        </span>
      </a>
    </article>
  );
};

export default ProjectCard;
