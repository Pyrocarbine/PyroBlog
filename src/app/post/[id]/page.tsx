import { neon } from '@neondatabase/serverless';
import { Post } from '../../types/post';

const sql = neon(process.env.DATABASE_URL!);

export default async function getPost({params}: {params: {id: string}}) {
    const { id } = await params;
    const postId = Number(id);
    const [post] = (await sql`
        SELECT title, content
        FROM posts
        WHERE id = ${postId}
    `) as Post[];
    return (
        
        <div className="p-6 block ml-auto mr-auto w-3/4">
            <div className="text-4xl font-semibold font-inter block mb-4 mr-auto ml-auto"> {post.title} </div>
            <p className="text-lg font-sans"> {post.content} </p>
        </div>
    );
}