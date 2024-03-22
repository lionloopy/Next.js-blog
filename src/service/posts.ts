import { readFile } from "fs/promises";
import path from "path";
import { cache } from "react";

export type Post = {
    title:string;
    description:string;
    date:Date;
    category:string;
    path:string;
    featured:boolean;
}

// Post 타입과 intersection
export type PostData = Post & {content:string; next: Post | null; prev: Post | null }

//모든 블로그 글 보여주기
//성능 높이기 : 한 번 읽었던 값을 캐시해 둔 다음 보여줌
//
export const getAllPosts = cache(async ()=> {
    const filePath = path.join(process.cwd(), 'data', 'posts.json')
    const fileContent = await readFile(filePath, 'utf-8')
    const posts: Post[] = JSON.parse(fileContent)
    return posts.sort((a,b) => (new Date(a.date) > new Date(b.date) ? -1 :1))
})

// featured 속성이 true인 게시글만 보여주기
export async function getFeaturedPosts(): Promise<Post[]> {
    return getAllPosts().then(posts => posts.filter(post => post.featured))
}

// featured 속성이 false인 게시글만 보여주기
export async function getNoneFeaturedPosts(): Promise<Post[]> {
    return getAllPosts().then(posts => posts.filter(post => !post.featured))
}

export async function getPostData(fileName: string) : Promise<PostData> {
    const filePath = path.join(process.cwd(), 'data', 'posts', `${fileName}.md`)
    const posts = await getAllPosts()
    const post = posts.find(post => post.path === fileName)
    
    if(!post) throw new Error (`${fileName}에 해당하는 포스트 찾을 수 없음`)
    const index = posts.indexOf(post);
    const next = index > 0 ? posts[index-1] : null;
    const prev = index < posts.length ? posts[index+1] : null
    const content = await readFile(filePath, 'utf-8')
    return {...post, content, next, prev}
}