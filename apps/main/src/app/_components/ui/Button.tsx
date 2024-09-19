export default function Button({
  type,
  text,
}: {
  type: string;
  text: string;
}): React.ReactNode {
  return (
    <button
      className={`${
        type === "primary"
          ? "cursor-pointer text-xl text-white text-semibold rounded border-blue-500 px-3 py-1 transition-colors duration-200 border-2 hover:bg-blue-400 hover:border-blue-400 hover:text-white bg-blue-500"
          : type === "secondary"
            ? "rounded border-2 border-blue-500 bg-transparent px-3 py-1 text-blue-500 hover:text-slate-50 hover:bg-blue-500 transition-colors duration-200 text-semibold text-xl"
            : ""
      }`}
    >
      {text}
    </button>
  );
}
