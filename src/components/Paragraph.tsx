interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export function Paragraph({ children, className = '' }: ParagraphProps) {
  return <p className={`paragraph ${className}`.trim()}>{children}</p>;
}
