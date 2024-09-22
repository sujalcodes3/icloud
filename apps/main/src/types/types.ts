export type Note = {
    data: string | null;
    id: number;
    author: string | null;
    createdAt: string | null;
    updatedAt: string | null;
};

export type TFile = {
    id: number | null;
    url: string | null;
    title: string | null;
};
