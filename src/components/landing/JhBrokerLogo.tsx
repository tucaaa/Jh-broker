import logoAsset from "@/assets/jh-broker-logo.png.asset.json";

type Props = {
  className?: string;
  /** When true, wraps the logo in a cream pill so it stays legible on dark backgrounds */
  onDark?: boolean;
};

/**
 * JH Broker official wordmark (PNG). Use `onDark` over navy/cream-dark surfaces
 * so the navy lettering keeps contrast.
 */
export function JhBrokerLogo({ className = "", onDark = false }: Props) {
  const img = (
    <img
      src={logoAsset.url}
      alt="JH Broker"
      className={`block h-full w-auto select-none ${className}`}
      draggable={false}
    />
  );

  if (!onDark) {
    return <span className="inline-flex h-10 items-center">{img}</span>;
  }

  return (
    <span className="inline-flex h-10 items-center rounded-xl bg-cream px-3 py-1.5 shadow-sm">
      {img}
    </span>
  );
}
