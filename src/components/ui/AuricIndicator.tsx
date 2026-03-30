import type { CSSProperties } from "react";
import { cn } from "../../lib/utils";

interface AuricIndicatorProps {
  className?: string;
  style?: CSSProperties;
}

export default function AuricIndicator({
  className,
  style,
}: AuricIndicatorProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("auric-indicator", className)}
      style={style}
    >
      <span className="auric-indicator-glow" />
      <span className="auric-indicator-clip">
        <span className="auric-indicator-spin" />
      </span>
      <span className="auric-indicator-plate" />
    </span>
  );
}
