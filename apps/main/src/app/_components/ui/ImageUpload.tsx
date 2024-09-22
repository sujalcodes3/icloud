import { trpc } from "@/app/_trpc/client";
import { UploadDropzone } from "@/utils/uploadthing";

export default function ImageUpload(): React.ReactNode {
  const addImageFile = trpc.addImage.useMutation();
  return (
    <UploadDropzone
      endpoint="imageUploader"
      onClientUploadComplete={async (res) => {
        for (let item of res) {
          const uploader: string = item.serverData.uploadedBy;
          const url: string = item.url;
          const title: string = item.name;
          await addImageFile.mutateAsync({ url, id: uploader, title });
        }
      }}
    />
  );
}
