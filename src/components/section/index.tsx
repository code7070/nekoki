interface Section {
  title: string;
  children?: JSX.Element | JSX.Element[] | string;
  className?: string;
}

export default function Section({ title, children, className }: Section) {
  return (
    <div className={`relative ${className}`}>
      <div className="text-lg font-bold mb-5 line-clamp-1">{title}</div>
      <div>{children}</div>
    </div>
  );
}
