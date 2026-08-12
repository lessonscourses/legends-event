export function LegendsLogo({
  className = "h-9",
  variant = "dark",
}: {
  className?: string
  /** "dark" = dark logo for light surfaces, "light" = white logo for black surfaces */
  variant?: "dark" | "light"
}) {
  return (
    <img
      src={variant === "light" ? "/images/legends-logo.png" : "/images/legends-logo-dark.png"}
      alt="Legends — AI-Powered Private Network"
      className={`${className} w-auto`}
    />
  )
}
