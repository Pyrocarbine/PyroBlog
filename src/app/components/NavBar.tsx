"use client"
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";


export default function NavBar() {
    const { data: session } = useSession();
    return (
        <div className="w-full h-16 border-b bg-white text-gray-800 flex items-center justify-center px-4 mb-5">
            <h1 className="text-2xl font-bold">
                <Link href="/">PyroBlog</Link>
            </h1>
            {session?.user ? <button onClick={() => signOut()} className="absolute right-10 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition text-sm cursor-pointer">Sign Out</button> 
            : ( <Link href="/api/auth/signin" className="absolute right-10 px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition text-sm">Sign In</Link> ) }
        </div>
    );
}