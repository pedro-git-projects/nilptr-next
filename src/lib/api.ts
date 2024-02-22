'use server';

import { Post } from "@/interfaces/post";
import { Project } from "@/interfaces/project";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export async function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export async function getAllPosts(): Promise<Array<Post>> {
  try {
    const slugs = await getPostSlugs();
    if (!slugs) {
      throw new Error("Failed to get post slugs");
    }

    const posts = await Promise.all(
      slugs.map(async (slug) => {
        try {
          return await getPostBySlug(slug);
        } catch (error) {
          console.error(`Error fetching post for slug "${slug}":`, error);
          return null;
        }
      })
    );

    if (posts == null) {
      throw new Error("posts is null");
    }

    // @ts-ignore
    return posts.filter(Boolean).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  } catch (error) {
    console.error(`Error fetching all posts:`, error);
    return [];
  }
}


const projectsDirectory = join(process.cwd(), "_projects");

export async function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export async function getProjectBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return { ...data, slug: realSlug } as Project;
}

export async function getAllProjects(): Promise<Array<Project>> {
  try {
    const slugs = await getProjectSlugs();
    if (!slugs) {
      throw new Error("Failed to get project slugs");
    }

    const projects = await Promise.all(
      slugs.map(async (slug) => {
        try {
          return await getProjectBySlug(slug);
        } catch (error) {
          console.error(`Error fetching project for slug "${slug}":`, error);
          return null;
        }
      })
    );

    const filteredProjects = projects.filter(Boolean);

    // @ts-ignore
    return filteredProjects.sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
  } catch (error) {
    console.error(`Error fetching all projects:`, error);
    // Handle global errors gracefully (e.g., log, provide error message)
    return []; // Or return an empty array for consistency
  }
}
