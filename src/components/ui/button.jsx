import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex min-h-11 items-center justify-center border-4 border-ink p-4 font-body text-md leading-normal text-ink shadow-sm transition-[transform,box-shadow,background-color] duration-fast focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-tertiary hover:bg-tertiary active:translate-x-1 active:translate-y-1 active:shadow-none",
  {
    variants: { variant: { primary: "bg-primary", outline: "bg-secondary" } },
    defaultVariants: { variant: "primary" },
  },
);

export function Button({ href, variant, download, children, className }) {
  return (
    <a className={cn(buttonStyles({ variant }), "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-md", className)} href={href} download={download || undefined}>
      {children}
    </a>
  );
}
