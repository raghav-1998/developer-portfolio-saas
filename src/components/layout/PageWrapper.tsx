import { cn } from "@/lib/utils";
interface PageWrapperProps{
    children:React.ReactNode;
    className?:string;
}

export function PageWrapper({children,className}:PageWrapperProps){
    return (
    <div className={cn("animate-fade-in", className)}>
      {children}
    </div>
  )
}