import { auth } from "../auth"
import Link from "next/link";

export default async function CreatePostButton() {
    const session = await auth();
    if (!session?.user) return <div className="text-center">Sign In to post New Blogs</div>;
    return (
        <Link
            href="/new-post"
            className="w-lg block text-base rounded-sm border border-blue-400  bg-blue-400 text-white text-center pt-3 pb-3 m-auto cursor-pointer">
                Create New Blog
        </Link>
    );
}