import Link from "next/link";

export default function CreatePostButton() {
  return (
    <Link href= "/new-post">
        <button
            className="w-lg block text-base rounded-sm border border-blue-400  bg-blue-400 text-white text-center pt-3 pb-3 m-auto cursor-pointer"> 
            Create New Blog
        </button>
    </Link>
  );
}