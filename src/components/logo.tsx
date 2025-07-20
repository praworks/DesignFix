export default function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <path
        d="M19.648 7.336L12.352 24.664L7.5 19.812L14.796 12.516L19.648 7.336Z"
        fill="hsl(var(--primary-foreground))"
      />
      <path
        d="M24.5 12.188L17.204 19.484L12.352 24.664L19.648 7.336L24.5 12.188Z"
        fill="hsl(var(--accent))"
        fillOpacity="0.8"
      />
    </svg>
  );
}
