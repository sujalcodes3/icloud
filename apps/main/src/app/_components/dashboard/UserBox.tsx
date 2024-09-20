import DashCardWrapper from "../ui/DashCardWrapper";

export default function UserBox(): React.ReactNode {
    return (
        <DashCardWrapper className={``}>
            <div className={`h-3/4 600 rounded-t-2xl px-10`}>
                <div className={`h-3/5`}>{/*<CircleUser color="#475569"/>*/}</div>
                <div className={`h-2/5`}>
                    {/* <p className={`text-slate-900 text-6xl font-bold`}>Sujal</p>*/}
                </div>
            </div>
            <div
                className={`px-10 flex justify-start items-center h-1/4 rounded-b-2xl`}
            >
                <p className={`text-slate-900 text-3xl font-semibold`}>iCloud</p>
            </div>
        </DashCardWrapper>
    );
}
