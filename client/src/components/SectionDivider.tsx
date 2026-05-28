/**
 * SectionDivider — Cute feminine SVG wave/petal separators
 * Design: Soft sky blue, sage green, ivory waves that flow between sections
 * Variants: wave (default), petal, ripple
 */

interface SectionDividerProps {
  /** Color of the divider shape — matches the NEXT section's background */
  fill?: string;
  /** Flip vertically so the wave faces the other direction */
  flip?: boolean;
  /** Visual style */
  variant?: "wave" | "petal" | "ripple";
  className?: string;
}

export default function SectionDivider({
  fill = "#F5F0E8",
  flip = false,
  variant = "wave",
  className = "",
}: SectionDividerProps) {
  const transform = flip ? "scale(1,-1)" : undefined;

  if (variant === "petal") {
    return (
      <div
        className={className}
        style={{
          lineHeight: 0,
          overflow: "hidden",
          transform,
          transformOrigin: "center",
        }}
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 80 }}
        >
          {/* Soft petal scallop */}
          <path
            d="M0,40 C60,10 120,70 180,40 C240,10 300,70 360,40 C420,10 480,70 540,40 C600,10 660,70 720,40 C780,10 840,70 900,40 C960,10 1020,70 1080,40 C1140,10 1200,70 1260,40 C1320,10 1380,70 1440,40 L1440,80 L0,80 Z"
            fill={fill}
            opacity="0.6"
          />
          <path
            d="M0,55 C80,25 160,75 240,55 C320,25 400,75 480,55 C560,25 640,75 720,55 C800,25 880,75 960,55 C1040,25 1120,75 1200,55 C1280,25 1360,75 1440,55 L1440,80 L0,80 Z"
            fill={fill}
          />
        </svg>
      </div>
    );
  }

  if (variant === "ripple") {
    return (
      <div
        className={className}
        style={{
          lineHeight: 0,
          overflow: "hidden",
          transform,
          transformOrigin: "center",
        }}
      >
        <svg
          viewBox="0 0 1440 90"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: "block", width: "100%", height: 90 }}
        >
          <path
            d="M0,45 C180,90 360,0 540,45 C720,90 900,0 1080,45 C1260,90 1440,20 1440,45 L1440,90 L0,90 Z"
            fill={fill}
            opacity="0.4"
          />
          <path
            d="M0,60 C200,20 400,80 600,60 C800,40 1000,80 1200,60 C1300,50 1380,65 1440,60 L1440,90 L0,90 Z"
            fill={fill}
          />
        </svg>
      </div>
    );
  }

  // Default: elegant wave
  return (
    <div
      className={className}
      style={{
        lineHeight: 0,
        overflow: "hidden",
        transform,
        transformOrigin: "center",
      }}
    >
      <svg
        viewBox="0 0 1440 70"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 70 }}
      >
        <path
          d="M0,35 C240,70 480,0 720,35 C960,70 1200,0 1440,35 L1440,70 L0,70 Z"
          fill={fill}
          opacity="0.45"
        />
        <path
          d="M0,50 C360,10 720,70 1080,30 C1260,10 1380,55 1440,50 L1440,70 L0,70 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
