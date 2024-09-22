import { trpc } from "@/app/_trpc/client";
import { type Note } from "@/types/types";
import { Trash2 } from "lucide-react";
export default function Note({
    data,
    refetchHook,
}: {
    data: Note;
    refetchHook: any;
}): React.ReactNode {
    function getDate(): string | null {
        const date = new Date(data.createdAt as string);
        const days = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ];
        const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ];

        const dayName = days[date.getUTCDay()];
        const dateNumber = date.getUTCDate();
        const monthName = months[date.getUTCMonth()];
        const formattedDate = `${dayName}, ${dateNumber} ${monthName}`;
        return formattedDate;
    }
    const deleteNote = trpc.deleteNote.useMutation({
        onSettled: () => {
            refetchHook.refetch();
        },
    });
    const deleteHandler = async () => {
        await deleteNote.mutateAsync({ id: data.id });
    };
    return (
        <div
            className={`w-full flex items-center px-2 h-16 border-b-2 border-slate-400`}
        >
            <span className={`flex flex-col w-5/6`}>
                <p className="text-slate-700 text-lg font-semibold">
                    {data.data?.slice(0, 20)}
                </p>
                <p className="text-slate-400 text-md font-bold">{getDate()}</p>
            </span>
            <button onClick={deleteHandler} className={`w-1/6 text-right`}>
                <Trash2 color="#FD3B3B" />
            </button>
        </div>
    );
}
