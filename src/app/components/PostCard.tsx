import Link from "next/link";
import Image from "next/image";
import { Post } from "../types/post";
import logo from "./logo.png";

import * as cheerio from "cheerio";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
const s3 = new S3Client({ region: "us-east-1", credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    }, });
type Props = {
  content: string;
};

async function fetchFirstImage(content : string): Promise<string | null>{
  const contentHTML = cheerio.load(content);

  const images = contentHTML("img");
  if (images.length === 0) return null;
  const imageUrl = contentHTML(images[0]).attr("src");
  if (!imageUrl) return null;
  const match = new URL(imageUrl).pathname.substring(1);
  const command = new GetObjectCommand({
    Bucket: "pyroblog-pictures",
    Key: match
  });
  const url = await getSignedUrl(s3, command, { expiresIn: 300 });
  if (!url) return null;

  return url;
}

function PostContent({ content }: Props) {
  // Load HTML into Cheerio
  const $ = cheerio.load(content);

  // Remove all <img> tags
  $("img").remove();

  return (
    <div
      className="text-gray-600 line-clamp-2"
      dangerouslySetInnerHTML={{ __html: $.html() }}
    />
  );
}

export default async function PostCard({ post }: { post: Post }) {
  const imageUrl = await fetchFirstImage(post.content.toString());
  return (
    <Link href={`/post/${post.id}`}>
      <div className="cursor-pointer mt-5 hover:bg-gray-100 p-4 rounded shadow-sm m-auto w-4xl flex items-start gap-4">
        <div className="flex-1">
          <h2 className="font-semibold text-2xl mb-0.5 h-8 ">{post.title}</h2>
          <p className="text-sm mb-2"> Created by {post.display_name} · {new Date(post.created_at).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric"})}</p>
          <PostContent content={post.content} />
        </div>
        <div className="w-40 flex-shrink-0">
          {!imageUrl ? (
              <Image src={logo} alt="Logo" width={160} height={120} className="rounded" />
            ) : (
              <div className="w-40 h-30 relative">
                <Image
                  src={imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover rounded"
                />
            </div>
            )}
        </div>
      </div>
    </Link>
  );
}