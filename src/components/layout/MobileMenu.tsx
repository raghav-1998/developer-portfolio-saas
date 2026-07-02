import { useState } from "react"
import Link from "next/link"
import { NAV_LINKS } from "@/constants/navigation"
import { cn } from "@/lib/utils"    

export function MobileMenu(){
    const [open, setOpen] = useState(false);
    return(
        <div className="md:hidden">
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
            >
                {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                    ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                )}
            </button>

            {open && (
                <div className="absolute inset-x-0 top-16 z-50 border-b border-border bg-background/95 backdrop-blur-md animate-fade-in">
                <nav className="mx-auto max-w-7xl px-4 py-4">
                    <ul className="flex flex-col gap-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                        <Link
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                            "block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                            )}
                        >
                            {link.title}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </nav>
                </div>
            )}
        </div>
    )
}