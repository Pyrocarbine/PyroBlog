import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export async function POST(req: Request) {
  try {
    const { title, content } = await req.json();
    await sql`INSERT INTO posts (title, content) VALUES (${title}, ${content})`;
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error inserting post:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}




