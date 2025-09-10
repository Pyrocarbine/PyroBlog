import { neon } from '@neondatabase/serverless';
import { Post } from '../../types/post';

const sql = neon(process.env.DATABASE_URL!);

export default async function getPost({params}: {params: {id: string}}) {
    const { id } = await params;
    const postId = Number(id);
    const [post] = (await sql`
        SELECT title, content, display_name, created_at
        FROM posts
        WHERE id = ${postId}
    `) as Post[];
    return (

        <div className="p-6 block ml-auto mr-auto w-3/4">
            <div className="text-4xl font-semibold font-inter block mr-auto ml-auto"> {post.title.toString()} </div>
            <p className="text-m font-sans mb-4 "> Created by {post.display_name.toString()} on {post.created_at.toString()} </p>
            <p className="text-lg font-sans"> {post.content.toString()} </p>
        </div>
    );
}