"use client";
import { trpc } from "@/app/_trpc/client";
import { UploadDropzone } from "@/utils/uploadthing";

export default function FileUpload(): React.ReactNode {
  const addPdfFile = trpc.addPdfFile.useMutation({});
  return (
    <UploadDropzone
      endpoint="pdfUploader"
      onClientUploadComplete={async (res) => {
        for (let item of res) {
          const uploader: string = item.serverData.uploadedBy;
          const url: string = item.url;
          const title: string = item.name;
          await addPdfFile.mutateAsync({ url, id: uploader, title });
        }
      }}
    />
  );
}
