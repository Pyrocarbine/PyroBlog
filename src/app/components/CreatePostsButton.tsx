import { auth } from "../auth";
import Link from "next/link";

export default async function CreatePostButton() {
    const session = await auth();
    if (!session?.user) return <Link href="/api/auth/signin" className="text-center border border-black rounded-sm w-3xs block m-auto">Sign In to Post New Blogs</Link>
    return (
        <Link
            href="/new-post"
            className="w-lg block text-base rounded-sm border border-blue-400  bg-blue-400 text-white text-center pt-3 pb-3 m-auto cursor-pointer">
                Create New Blog
        </Link>
    );
}