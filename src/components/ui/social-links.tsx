import React from 'react';

type SocialLink = {
  name: string;
  url: string;
  icon: React.ReactNode;
};

type SocialLinksProps = {
  links: SocialLink[];
};

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}