import { getAllPosts } from "@/lib/api";
import PostCard from "../_components/post-card";

export default function Blog() {
  const posts = getAllPosts();
  return (
    <main>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </main>
  );
}
