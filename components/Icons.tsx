type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
};

export function TimerIcon({
  size = 24,
  color = '#9A9A9A',
  strokeWidth = 1.8,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle
        cx="12"
        cy="13"
        r="8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M12 9v4l2.5 2.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 3h6M12 3v2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BellIcon({
  size = 24,
  color = '#9A9A9A',
  strokeWidth = 1.8,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M6 16V11a6 6 0 0 1 12 0v5l1.5 1.5h-15L6 16Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M10 19a2 2 0 0 0 4 0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClockUtcIcon({
  size = 28,
  color = '#7FB0E8',
  strokeWidth = 1.8,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="M12 7v5l3 2"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CandleStackIcon({
  size = 28,
  color = '#7FB0E8',
  strokeWidth = 1.8,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M6 4v16"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <rect
        x="4"
        y="8"
        width="4"
        height="8"
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M12 3v18"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <rect
        x="10"
        y="6"
        width="4"
        height="12"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M18 6v14"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <rect
        x="16"
        y="10"
        width="4"
        height="6"
        fill={color}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SmartwatchIcon({
  size = 28,
  color = '#7FB0E8',
  strokeWidth = 1.8,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <rect
        x="6"
        y="7"
        width="12"
        height="10"
        rx="3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M9 7l.5-3h5l.5 3M9 17l.5 3h5l.5-3"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 10v2.2l1.6 1"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WarningBellsIcon({
  size = 28,
  color = '#7FB0E8',
  strokeWidth = 1.8,
  className,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M5 15V11a5 5 0 0 1 10 0v4l1 1.5H4L5 15Z"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M8 18a2 2 0 0 0 4 0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <path
        d="M17 8v3M17 13h.01"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
