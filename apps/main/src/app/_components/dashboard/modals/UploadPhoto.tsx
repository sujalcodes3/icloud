import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Session } from "next-auth";
import ImageUpload from "../../ui/ImageUpload";

export default function UploadPhotoDialog({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}): React.ReactNode {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
        <DialogPanel className="rounded-2xl max-w-lg space-y-4 flex flex-col gap-2 border-4 border-blue-400 bg-white px-8 py-6">
          <DialogTitle className="font-bold text-2xl">Upload Photo</DialogTitle>
          <ImageUpload />
        </DialogPanel>
      </div>
    </Dialog>
  );
}
