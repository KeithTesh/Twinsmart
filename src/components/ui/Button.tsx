import { cn } from "@/lib/utils";
import Link from "next/link";

type Variant = "primary" | "ghost" | "outline";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
}

const base =
  "inline-flex items-center justify-center font-mono tracking-widest uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-terracotta text-cream hover:bg-terracotta-dark",
  ghost:   "text-charcoal hover:text-terracotta",
  outline: "border border-charcoal/30 text-charcoal hover:border-terracotta hover:text-terracotta",
};

const sizes: Record<Size, string> = {
  sm: "text-[0.6rem] px-4 py-2 gap-2",
  md: "text-[0.65rem] px-6 py-3 gap-3",
  lg: "text-[0.7rem] px-8 py-4 gap-3",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
