"use client";

import { useState } from "react";
import type { TrekImage } from "@/data/treks/types";

interface Props {
  image: TrekImage | null | undefined;
  label: string;
  className?: string;
  eager?: boolean;
}

/** <img> with a graceful gradient placeholder when there is no photo or it fails to load. */
export default function Photo({ image, label, className, eager }: Props) {
  const [failed, setFailed] = useState(false);
  if (!image || !image.src || failed) {
    return (
      <div className={`pp-ph ${className ?? ""}`} role="img" aria-label={image?.alt || label || "Photo coming soon"}>
        <span>{label}</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image.src}
      alt={image.alt || label}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export function PhotoCredit({ image }: { image: TrekImage | null | undefined }) {
  if (!image || !image.credit) return null;
  const text = image.credit + (image.license ? ` · ${image.license}` : "");
  return image.sourceUrl ? (
    <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  ) : (
    <>{text}</>
  );
}
