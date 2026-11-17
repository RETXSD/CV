import { cn } from "@/lib/utils";

export function Card({ title, children, className }) {
  return (
    <article className={cn("border-ink bg-secondary flex h-full flex-col border-4 shadow-md", className)}>
      <h3 className="border-ink bg-primary font-body text-ink flex min-h-24 items-center border-b-4 px-6 py-4 text-lg leading-normal">{title}</h3>
      <div className="flex flex-1 flex-col gap-3 p-6">{children}</div>
    </article>
  );
}
