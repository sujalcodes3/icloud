import { useState } from "react";
import {
    //Description,
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
//import Button from "../../ui/Button";
import { trpc } from "@/app/_trpc/client";
import { useSession } from "next-auth/react";
import { Session } from "next-auth";
export default function AddNoteDialog({
    isOpen,
    setIsOpen,
    onAddDone,
    session,
}: {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    onAddDone: any;
    session: Session;
}): React.ReactNode {
    const [desc, setDesc] = useState<string>("");
    const addNote = trpc.addNote.useMutation({
        onSettled: () => {
            onAddDone.refetch();
        },
    });
    async function addNoteHandler(evt: any) {
        const authorId = session?.user.id;
        if (!authorId) {
            throw new Error("authorId is null or undefined");
        }
        try {
            await addNote.mutateAsync({ authorId, note: desc });
            setIsOpen(false);
        } catch (err) {
            console.log(err);
            throw new Error("while adding note");
        }
    }

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-2">
                <DialogPanel className="rounded-2xl max-w-lg space-y-4 flex flex-col gap-2 border-4 border-yellow-400 bg-white px-8 py-6">
                    <DialogTitle className="font-bold text-2xl">Add Note</DialogTitle>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="desc">What is on your mind?</label>
                        <input
                            type="text"
                            className={`border-2 border-slate-700 text-lg rounded-md w-full h-10 p-2 outline-none`}
                            onChange={(evt) => {
                                setDesc(evt.target.value);
                            }}
                            value={desc}
                            name="desc"
                        />
                    </div>
                    <div className="flex gap-4">
                        <button onClick={addNoteHandler}>Add Note</button>
                        <button onClick={() => setIsOpen(false)} className={`text-red-600`}>
                            Discard
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
//"cursor-pointer text-xl text-white text-semibold rounded border-blue-500 px-3 py-1 transition-colors duration-200 border-2 hover:bg-blue-400 hover:border-blue-400 hover:text-white bg-blue-500"
