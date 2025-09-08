import Link from "next/link";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="cursor-pointer mt-5 hover:bg-gray-100 p-4 rounded shadow-sm w-4xl block m-auto">
        <h2 className="font-semibold text-lg">{post.title}</h2>
        <p className="text-gray-600 line-clamp-2">{post.content}</p>
      </div>
    </Link>
  );
}