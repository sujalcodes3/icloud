import DriveBox from "./DriveBox";
import NotesBox from "./NotesBox";
import PhotosBox from "./PhotosBox";
import UserBox from "./UserBox";

export default function Dashboard(): React.ReactNode {
    return (
        <main
            className={`grid grid-cols-1 md:grid-cols-3 md:h-4/5 gap-4 text-white w-4/5 p-2 h-max`}
        >
            <UserBox />
            <PhotosBox />
            <DriveBox />
            <NotesBox />
        </main>
    );
}
