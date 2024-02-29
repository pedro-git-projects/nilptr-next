"use server";

import { Post } from "@/interfaces/post";
import { Project } from "@/interfaces/project";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { POSTS_PER_PAGE, PROJECTS_PER_PAGE } from "./constants";

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

export const getPaginatedPosts = async (
  currentPage: number,
): Promise<{ posts: Array<Post>; totalPages: number } | never> => {
  try {
    const posts = await getAllPosts();
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
    const paginatedPosts = posts.slice(
      (currentPage - 1) * POSTS_PER_PAGE,
      currentPage * POSTS_PER_PAGE,
    );
    return { posts: paginatedPosts, totalPages };
  } catch (error: any) {
    throw error;
  }
};

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

export const getPaginatedProjects = async (
  currentPage: number,
): Promise<{ projects: Array<Project>; totalPages: number } | never> => {
  try {
    const allProjects = await getAllProjects();
    const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
    const paginatedProjects = allProjects.slice(
      (currentPage - 1) * PROJECTS_PER_PAGE,
      currentPage * PROJECTS_PER_PAGE,
    );
    return { projects: paginatedProjects, totalPages };
  } catch (error: any) {
    throw error;
  }
};
