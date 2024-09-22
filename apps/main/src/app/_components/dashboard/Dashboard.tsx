import { Session } from "next-auth";
import DriveBox from "./DriveBox";
import NotesBox from "./NotesBox";
import PhotosBox from "./PhotosBox";
import UserBox from "./UserBox";

export default function Dashboard({
  session,
}: {
  session: Session;
}): React.ReactNode {
  return (
    <main
      className={`md:h-4/5 gap-4 text-white flex flex-col w-4/5 p-2 h-max`}
    >
      <div className={`flex md:flex-row flex-col h-screen md:h-1/2 gap-4`}>
        <UserBox session={session} />
        <PhotosBox session={session} />
      </div>
      <div className={`flex md:h-1/2 gap-4 md:flex-row h-screen flex-col`}>
        <DriveBox session={session} />
        <NotesBox session={session} />
      </div>
    </main>
  );
}
