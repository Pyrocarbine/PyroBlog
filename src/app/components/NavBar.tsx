import Link from "next/link";

export default function NavBar() {
    return (
        <div className="w-full h-16 border-b bg-white text-gray-800 flex items-center justify-center mb-5">
            <h1 className="text-2xl text-gray-800 font-bold"><Link href="/">PyroBlog</Link></h1>
        </div>
    );
}