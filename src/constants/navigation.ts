export interface NavLink{
    title:string;
    href:string;
}

export const NAV_LINKS:NavLink[]=[
    { title: "Home",       href: "/" },
    { title: "About",      href: "/#about" },
    { title: "Projects",   href: "/#projects" },
    { title: "Experience", href: "/#experience" },
    { title: "Blog",       href: "/blog" },
    { title: "Contact",    href: "/#contact" },
];