import { neon } from '@neondatabase/serverless';
import Link from 'next/link';
import Postcard from './PostCard';

const sql = neon(process.env.DATABASE_URL!);

type Post = {
  id: number;
  title: string;
  content: string;
};
 
export default async function Page() {
  // Don't await the data fetching function
    const posts = await sql`SELECT * FROM posts` as Post[];

    return (
        <>
        {posts.map((post) => (
            <Postcard key={post.id} post={post} />
        ))}
        </>
    )
}
