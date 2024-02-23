import { Project } from "@/interfaces/project";
import Link from "next/link";
import Image from "next/image";

interface Props {
  project: Project;
}
const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <article className="overflow-hidden rounded-lg border border-[#d5c4a1] bg-light-background-light shadow-sm dark:border-gray-800 dark:bg-background-light dark:shadow-gray-700/25">
      <Image
        alt=""
        src={project.image}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "14rem", objectFit: "cover" }}
      />

      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-lg font-bold text-[#282828] dark:text-text">
            {project.title}
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed">{project.excerpt}</p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <Link
            href={"posts/" + project.slug}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium"
          >
            Estudo de Caso
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>

          <Link
            href={project.githubLink}
            target="_blank"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium"
          >
            Github
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
