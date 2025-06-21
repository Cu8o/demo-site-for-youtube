interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="footer-links">
      <p>Relevant links:</p>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}
