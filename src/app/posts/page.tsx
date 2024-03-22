import FilterablePost from "@/components/FilterablePost";
import { getAllPosts } from "@/service/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Post',
  description: '블로그 글'
}


export default async function PostsPage() {
  const posts = await getAllPosts()
  const categories = [...new Set(posts.map(post => post.category))]
    return (
      <FilterablePost posts={posts} categories={categories}/>
    );
  }
  