import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { auth } from "../../auth"

const sql = neon(process.env.DATABASE_URL!);

export async function POST(req: Request) {
  const session= await auth();
  if (!session?.user) return NextResponse.json({ success: false, error: "User is not signed in. Please sign in to make new posts"}, { status: 500 });
  const displayName : string = session.user.name || "Anonymous";
  try {
    const { title, content } = await req.json();
    const [postID] = await sql`INSERT INTO posts (title, content, email, display_name) VALUES (${title}, ${content}, ${session.user.email}, ${displayName}) RETURNING id`;
    return NextResponse.json({ success: true, postId: postID.id});
  } catch (error) {
    console.error("Error inserting post:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}




