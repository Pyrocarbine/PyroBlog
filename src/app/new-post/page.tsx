'use client';
import { useState } from "react"; 
export default function NewPostPage() {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const submitPost = (event: React.FormEvent<HTMLFormElement>): void => {
        
    };
    return (
        <main>
            <div className="text-center text-3xl pb-8 pt-2">NewPostPage</div>
            <div className="w-1/2 block m-auto">
                <form onSubmit={submitPost} className="space-y-4">
                    <input type="text" value={postTitle} placeholder="Title" onChange={(e) => setPostTitle(e.target.value)} className="w-full border p-2"/>
                    <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} placeholder="Text" className="w-full border rounded p-2 h-40" />
                    <button type="submit" className="block m-auto w-1/2 border rounded bg-blue-400 text-white pt-3 pb-3"> Submit Post </button>
                </form>
            </div>
        </main>
    );
}