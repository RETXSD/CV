import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeStyles = cva("inline-flex min-h-11 items-center border-2 border-ink p-4 font-body text-sm leading-normal text-ink shadow-sm", {
  variants: { tone: { default: "bg-secondary", alert: "bg-secondary" } },
  defaultVariants: { tone: "default" },
});

export function Badge({ children, tone, className }) {
  return <span className={cn(badgeStyles({ tone }), className)}>{children}</span>;
}
