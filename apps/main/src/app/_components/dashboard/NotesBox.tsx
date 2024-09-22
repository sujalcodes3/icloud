"use client";
import { useState } from "react";
import Image from "next/image";

import { Folder, FilePlus2 } from "lucide-react";

import DashCardWrapper from "../ui/DashCardWrapper";
import AddNoteDialog from "./modals/AddNote";
import NoteInfo from "@/app/_components/ui/notes/Note";

import { type Note } from "@/types/types";

import Logo from "../../../../public/notes-logo.webp";
import { trpc } from "@/app/_trpc/client";
import { Session } from "next-auth";

export default function NotesBox({
  session,
}: {
  session: Session;
}): React.ReactNode {
  const [addNoteOpen, setAddNoteOpen] = useState(false);
  const getNotes = trpc.getNotesByUser.useQuery({ id: session.user.id });
  return (
    <>
      <DashCardWrapper className={`h-1/3 md:h-full md:w-1/3`}>
        <nav
          className={`flex justify-between items-center h-1/5 px-4 rounded-t-2xl`}
        >
          <span className={`flex gap-4`}>
            <Image alt={`photos logos`} src={Logo} height={50} width={50} />
            <div className={`flex flex-col text-slate-900`}>
              <p className={`text-xl font-bold`}>Notes</p>
              <div className={`flex gap-2 items-center`}>
                <Folder color="#facc15" size={20} /> <span>All iCloud</span>
              </div>
            </div>
          </span>
          <button
            onClick={() => {
              setAddNoteOpen(true);
            }}
            className={`cursor-pointer`}
          >
            <FilePlus2 color="#facc15" size={30} />
          </button>
        </nav>
        <section className={`overflow-y-auto rounded-b-2xl h-4/5 bg-white`}>
          {getNotes.data?.length === 0
            ? "No Notes"
            : getNotes.data?.map((note: Note, idx: number) => (
                <NoteInfo key={idx} data={note} refetchHook={getNotes} />
              ))}
        </section>
      </DashCardWrapper>
      <AddNoteDialog
        onAddDone={getNotes}
        isOpen={addNoteOpen}
        setIsOpen={setAddNoteOpen}
        session={session}
      />
    </>
  );
}
