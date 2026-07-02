import { SOCIAL_LINKS } from "@/constants/social-links";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className, iconSize = 18 }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <link.Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
