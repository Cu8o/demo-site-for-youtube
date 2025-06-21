import { Paragraph } from './Paragraph';

interface ContentSectionProps {
  title: string;
  paragraphs: Record<string, string>;
}

export function ContentSection({ title, paragraphs }: ContentSectionProps) {
  return (
    <section className="content-section">
      <h1 className="main-title">{title}</h1>
      {Object.entries(paragraphs).map(([key, text]) => (
        <Paragraph key={key} className={`paragraph-${key}`}>
          {text}
        </Paragraph>
      ))}
    </section>
  );
}
