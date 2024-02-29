"use server";

import { Post } from "@/interfaces/post";
import { Project } from "@/interfaces/project";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export const getPostSlugs = async () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
};

export async function getAllPosts(): Promise<Array<Post>> {
  try {
    const slugs = await getPostSlugs();
    if (!slugs) {
      throw new Error("Failed to get post slugs");
    }

    const posts = await Promise.all(
      slugs.map(async slug => {
        try {
          return await getPostBySlug(slug);
        } catch (error) {
          console.error(`Error fetching post for slug "${slug}":`, error);
          return null;
        }
      }),
    );

    const filteredPosts = posts.filter(post => post !== null) as Post[];

    return filteredPosts.sort((post1, post2) => {
      return post1.date > post2.date ? -1 : 1;
    });
  } catch (error) {
    console.error(`Error fetching all posts:`, error);
    return [];
  }
}

const projectsDirectory = join(process.cwd(), "_projects");

export const getProjectSlugs = async () => {
  return fs.readdirSync(projectsDirectory);
};

export const getProjectBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return { ...data, slug: realSlug } as Project;
};

export const getAllProjects = async (): Promise<Array<Project>> => {
  try {
    const slugs = await getProjectSlugs();
    if (!slugs) {
      throw new Error("Failed to get project slugs");
    }

    const projects = await Promise.all(
      slugs.map(async slug => {
        try {
          return await getProjectBySlug(slug);
        } catch (error) {
          console.error(`Error fetching project for slug "${slug}":`, error);
          return null;
        }
      }),
    );

    const filteredProjects = projects.filter(
      project => project !== null,
    ) as Project[];

    return filteredProjects.sort((project1, project2) =>
      project1.date > project2.date ? -1 : 1,
    );
  } catch (error) {
    console.error(`Error fetching all projects:`, error);
    return [];
  }
};
