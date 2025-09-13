import NextAuth, { DefaultSession } from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import "next-auth/jwt";
import PostgresAdapter from '@auth/pg-adapter';
import { Pool } from "@neondatabase/serverless"

export const { handlers, signIn, signOut, auth } = NextAuth(() =>{
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  return {
    adapter: PostgresAdapter(pool),
    providers: [Google, GitHub],
  }}
)