import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({ region: "us-east-1", credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    }, });

export async function GET(req: Request) {
    const imageName = req.headers.get("name");
    if (!imageName) return new Response("Missing key", { status: 400 });
    const command = new GetObjectCommand({
      Bucket: "pyroblog-pictures",
      Key: imageName,
    });
    const url = await getSignedUrl(s3, command, { expiresIn: 300 });
    return new Response(JSON.stringify({ url }), { status: 200 });
}