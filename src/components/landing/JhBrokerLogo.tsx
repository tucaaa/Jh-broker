type Props = {
  className?: string;
  /** color for the dark letters — defaults to current text color (use text-cream on dark bg) */
  baseClassName?: string;
  /** color for the mint "ok" accent */
  accentClassName?: string;
};

/**
 * JH Broker wordmark — "jH broker." with the "ok" rendered in brand mint.
 * Built in HTML so it inherits the hero typography and brand tokens.
 */
export function JhBrokerLogo({
  className = "",
  baseClassName = "text-cream",
  accentClassName = "text-gold",
}: Props) {
  return (
    <span
      className={`font-display inline-flex items-baseline font-extrabold leading-none tracking-tight lowercase ${baseClassName} ${className}`}
    >
      <span>j</span>
      <span className="uppercase">H</span>
      <span>&nbsp;br</span>
      <span className={accentClassName}>ok</span>
      <span>er</span>
      <span className={accentClassName}>.</span>
    </span>
  );
}
