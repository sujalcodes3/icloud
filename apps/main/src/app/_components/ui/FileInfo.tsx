import { useState } from "react";
import { type TFile } from "@/types/types";
import { Spinner } from "@nextui-org/spinner";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PdfLogo from "../../../../public/pdflogo.jpg";
export default function FileInfo({
    file,
    refetchPoint,
}: {
    file: TFile;
    refetchPoint: any;
}): React.ReactNode {
    const [deleteLoad, setDeleteLoad] = useState<boolean>(false);
    const deleteHandler = () => { };

    return (
        <div
            className={`flex flex-col border-2 border-blue-100 drop-shadow-md rounded-lg w-24 h-24`}
        >
            <Link
                className={`relative w-20 h-20 `}
                href={file.url as string}
                target="_blank"
            >
                <Image fill={true} src={PdfLogo} alt={file.title as string} />
            </Link>
            {deleteLoad ? (
                <Spinner color="danger" />
            ) : (
                <button onClick={deleteHandler} className={`w-1/6 text-right`}>
                    <Trash2 color="#FD3B3B" />
                </button>
            )}
        </div>
    );
}
