import Link from "next/link";
import SignIn from "./sign-in";

export default function NavBar() {
  return (
    <div className="w-full h-16 border-b bg-white text-gray-800 flex items-center px-4 mb-5">
      {/* Left: site title */}
      <h1 className="text-2xl font-bold translate-x-10">
        <Link href="/">PyroBlog</Link>
      </h1>

      {/* Spacer to push SignIn to the right */}
      <div className="flex-1" />

      {/* Right: SignIn button */}
      <SignIn />
    </div>
  );
}