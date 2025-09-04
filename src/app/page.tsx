"use client"; 
import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className="text-center text-3xl">Aaron&apos;s Blogger</div>
      <div className="text-center text-base pt-3 pb-3"> Welcome to my blogs</div>
      <button onClick={() => router.push("/new-post")} className="w-lg block text-base rounded-sm border border-blue-400  bg-blue-400 text-white text-center pt-3 pb-3 m-auto"> Create New Blog</button>
    </main>
  );
} 
