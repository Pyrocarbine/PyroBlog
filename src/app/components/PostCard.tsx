import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import Link from "next/link";
import { Post } from "../types/post";


export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="cursor-pointer mt-5 hover:bg-gray-100 p-4 rounded shadow-sm w-4xl block m-auto">
        <h2 className="font-semibold text-2xl">{post.title}</h2>
        <p className="text-sm mb-2"> Created by {post.display_name}</p>
        <p className="text-gray-600 line-clamp-2">{post.content}</p>
      </div>
    </Link>
  );
}