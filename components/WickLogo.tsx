export function WickLogo({ size = 24 }: { size?: number }) {
  const barW = size * 0.18;
  const gap = size * 0.1;
  const totalW = barW * 3 + gap * 2;
  const startX = (size - totalW) / 2;
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      aria-label="Wick logo"
    >
      <rect
        x={startX}
        y={size * 0.18}
        width={barW}
        height={size * 0.64}
        rx={1}
        fill="#E24B4A"
      />
      <rect
        x={startX + (barW + gap)}
        y={size * 0.1}
        width={barW}
        height={size * 0.8}
        rx={1}
        fill="#1FBF7A"
      />
      <rect
        x={startX + (barW + gap) * 2}
        y={size * 0.22}
        width={barW}
        height={size * 0.56}
        rx={1}
        fill="#1FBF7A"
      />
    </svg>
  );
}
