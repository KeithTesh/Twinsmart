import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/types/sanity";

interface TagProps {
  status: ProjectStatus;
  className?: string;
}

const labels: Record<ProjectStatus, string> = {
  ongoing:  "Ongoing",
  complete: "Complete",
  concept:  "Concept",
};

const styles: Record<ProjectStatus, string> = {
  ongoing:  "badge badge-ongoing",
  complete: "badge badge-complete",
  concept:  "badge badge-concept",
};

export function Tag({ status, className }: TagProps) {
  return (
    <span className={cn(styles[status], className)}>
      {labels[status]}
    </span>
  );
}
