import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { QueryResult } from 'pg';
import { auth } from "../../../auth"
import { Post } from '../../../types/post';

const sql = neon(process.env.DATABASE_URL!);

export async function DELETE(req: Request, {params}: {params: {id: string}}) {
    const p = await params;
    const postId = p.id;
    const request = await sql`DELETE FROM posts WHERE id = ${postId}`;
    return NextResponse.json({ success: true });
}



