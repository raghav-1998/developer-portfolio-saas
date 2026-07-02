import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps{
    className?:string;
}

export function Logo({className}:LogoProps){
    return(
        <Link
          href="/"
          className={cn(
            "group inline-flex items-center gap-2 font-mono text-lg font-semibold tracking-tight transition-opacity hover:opacity-80",
            className
          )}
          aria-label="Home"
        >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground text-background text-sm font-bold group-hover:opacity-90 transition-opacity">
                R
            </span>
            <span className="text-foreground">
                raghav
                <span className="text-muted-foreground">.dev</span>
            </span>
        </Link>
    )
}