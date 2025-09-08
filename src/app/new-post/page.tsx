'use client';
import { useState } from "react"; 
export default function NewPostPage() {
    const [postTitle, setPostTitle] = useState("");
    const [postContent, setPostContent] = useState("");
    const isFormValid = postTitle.trim() !== "" && postContent.trim() !== "";
    async function submitPost(event: React.FormEvent<HTMLFormElement>) {
        await fetch('/api/make-post', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: postTitle, content: postContent }),
        });
        setPostTitle("");
        setPostContent("");
    }
    return (
        <main>
            <div className="text-center text-3xl pb-8 pt-2"> NewPostPage</div>
            <div className="w-1/2 block m-auto">
                <form onSubmit={submitPost} className="space-y-4">
                    <input type="text" value={postTitle} placeholder="Title" onChange={(e) => setPostTitle(e.target.value)} className="w-full border p-2" required/>
                    <textarea value={postContent} onChange={(e) => setPostContent(e.target.value)} placeholder="Text" className="w-full border text-sm rounded p-2 h-40" required/>
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`block m-auto w-1/2 border rounded pt-3 pb-3 transition-colors ${
                        isFormValid
                            ? "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    >
                        Submit Post
                    </button>
                </form>
            </div>
        </main>
    );
}