export default function DashCardWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): React.ReactNode {
  return (
    <div className={`${className} bg-white bg-opacity-60 rounded-2xl`}>
      {children}
    </div>
  );
}
