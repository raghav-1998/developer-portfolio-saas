import { SocialLinks } from "../common/SocialLinks";
import { Logo } from "../common/Logo";
import { Container } from "./Container";
import { SITE } from "@/constants/site";
import { NAV_LINKS } from "@/constants/navigation";
import { Link } from "lucide-react";

export function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer className="border-t border-border">
            <Container className="py-12">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                    <div className="space-y-3">
                        <Logo/>
                        <p className="max-w-xs text-sm text-muted-foreground">
                            {SITE.description}
                        </p>
                        <SocialLinks/>
                    </div>

                    <nav>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                            Navigation
                        </p>
                        <ul className="space-y-2">
                            {NAV_LINKS.map((link)=>(
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="mt-8 border-t border-border pt-8">
                    <p className="text-center text-xs text-muted-foreground">
                        &copy; {year} {SITE.name}. Built with Next.js &amp; Tailwind CSS.
                    </p>
                </div>
            </Container>
        </footer>
    )
}