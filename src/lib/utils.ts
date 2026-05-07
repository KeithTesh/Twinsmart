import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatKsh(value: number): string {
  if (value >= 1_000_000_000) {
    return `KSh ${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B`;
  }
  if (value >= 1_000_000) {
    return `KSh ${(value / 1_000_000).toFixed(0)}M`;
  }
  if (value >= 1_000) {
    return `KSh ${(value / 1_000).toFixed(0)}K`;
  }
  return `KSh ${value}`;
}

export function padIndex(n: number, total?: number): string {
  const digits = total && total >= 100 ? 3 : 2;
  return String(n).padStart(digits, "0");
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length).trimEnd() + "…";
}
