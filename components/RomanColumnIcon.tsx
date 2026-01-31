type Props = {
  className?: string;
};

export default function RomanColumnIcon({ className }: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Capital */}
      <rect x="12" y="6" width="40" height="6" rx="1" />
      {/* Shaft */}
      <rect x="18" y="12" width="28" height="36" rx="1" />
      {/* Base */}
      <rect x="10" y="48" width="44" height="6" rx="1" />
    </svg>
  );
}