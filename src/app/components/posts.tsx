import { neon } from '@neondatabase/serverless';
import Link from 'next/link';
import Postcard from './PostCard';
import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';
import { Post } from '../types/post';

const sql = neon(process.env.DATABASE_URL!);

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
