import type { Metadata } from "next";
import { ThemeProvider } from "../components/providers/theme-provider";
import {Navbar} from "@/components/layout/Navbar"
import {Footer} from "@/components/layout/Footer"
import "./global.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
export const metadata: Metadata = {
  title: {
    default: "Raghav | Systems Engineer & AI Builder",
    template: "%s | Raghav",
  },
  description:
    "Project Engineer at BEL building defense-grade systems and LLM-powered agent workflows. Exploring the intersection of production engineering and generative AI.",
  keywords: [
    "systems engineer",
    "LLM",
    "AI agent",
    "Node.js",
    "TypeScript",
    "React",
    "LangChain",
    "Generative AI",
    "BEL",
    "defense engineering",
  ],
  authors: [{ name: "Raghav" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Raghav | Systems Engineer & AI Builder",
    description:
      "Project Engineer at BEL building defense-grade systems and LLM-powered agent workflows.",
    siteName: "Raghav Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghav | Systems Engineer & AI Builder",
    description:
      "Project Engineer at BEL building defense-grade systems and LLM-powered agent workflows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
