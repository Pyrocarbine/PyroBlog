import { neon } from '@neondatabase/serverless';
import { Post } from '../../types/post';
import * as cheerio from "cheerio";
import PostContent from "../../components/PostContent";

const sql = neon(process.env.DATABASE_URL!);

export default async function getPost({ params } : {params: Promise<{id: string}>}) {
    const { id } = await params;
    const postId = Number(id);
    const [post] = (await sql`
        SELECT title, content, display_name, created_at
        FROM posts
        WHERE id = ${postId}
    `) as Post[];

    return (
        <div className="p-6 block ml-auto mr-auto w-3/4">
            <div className="text-4xl font-semibold font-inter block mb-0.5 mr-auto ml-auto"> {post.title.toString()} </div>
            <p className="text-m font-sans mb-4 "> Created by {post.display_name.toString()} on {new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric"})}</p>
            <PostContent content={post.content.toString()} />
        </div>
    );
}