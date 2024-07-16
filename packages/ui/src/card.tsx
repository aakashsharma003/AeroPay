export function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className={`bg-white rounded-lg p-4 ${className}`}
    >
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
