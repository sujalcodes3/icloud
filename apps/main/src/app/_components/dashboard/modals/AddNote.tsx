import {
    Description,
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
export default function AddNoteDialog({
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
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                    <DialogTitle className="font-bold">Deactivate account</DialogTitle>
                    <Description>
                        This will permanently deactivate your account
                    </Description>
                    <p>
                        Are you sure you want to deactivate your account? All of your data
                        will be permanently removed.
                    </p>
                    <div className="flex gap-4">
                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                        <button onClick={() => setIsOpen(false)}>Deactivate</button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
