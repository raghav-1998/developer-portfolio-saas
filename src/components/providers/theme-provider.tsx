"use client";

import { ThemeProvider as NextThemesProvide } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({children, ...props}:ThemeProviderProps){
    return <NextThemesProvide {...props}>{children}</NextThemesProvide>
}