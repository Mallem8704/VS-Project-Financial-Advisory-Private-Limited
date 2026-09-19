import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const region = process.env.AWS_REGION || "ap-south-1";
const bucketName = process.env.AWS_S3_BUCKET_NAME || "vs-advisory-private-docs";

const isConfigured = Boolean(
  process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
);

const s3Client = isConfigured
  ? new S3Client({
      region,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    })
  : null;

export interface SignedUrlResult {
  url: string;
  fileKey: string;
  expiresInSeconds: number;
}

export async function getPresignedUploadUrl(
  projectId: string,
  fileName: string,
  contentType: string,
  expiresInSeconds: number = 900 // 15 minutes
): Promise<SignedUrlResult> {
  const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, "_");
  const fileKey = `projects/${projectId}/${Date.now()}-${sanitizedFileName}`;

  if (!s3Client) {
    // Development fallback mock signed URL
    return {
      url: `/api/documents/mock-upload?key=${encodeURIComponent(fileKey)}`,
      fileKey,
      expiresInSeconds,
    };
  }

  const command = new PutObjectCommand({
    Bucket: bucketName,
    Key: fileKey,
    ContentType: contentType,
  });

  const url = await getSignedUrl(s3Client, command, { expiresIn: expiresInSeconds });
  return { url, fileKey, expiresInSeconds };
}

export async function getPresignedDownloadUrl(
  fileKey: string,
  expiresInSeconds: number = 900
): Promise<string> {
  if (!s3Client) {
    // Development fallback mock download URL
    return `/api/documents/mock-download?key=${encodeURIComponent(fileKey)}`;
  }

  const command = new GetObjectCommand({
    Bucket: bucketName,
    Key: fileKey,
  });

  return await getSignedUrl(s3Client, command, { expiresIn: expiresInSeconds });
}
