"use client";

import { type ReactNode } from "react";

interface BuyNowButtonProps {
  href: string;
  sku: string;
  name: string;
  price: number;
  className?: string;
  children: ReactNode;
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (...args: unknown[]) => void };
  }
}

export default function BuyNowButton({
  href,
  sku,
  name,
  price,
  className,
  children,
}: BuyNowButtonProps) {
  function handleClick() {
    if (typeof window === "undefined") return;

    // Meta Pixel — InitiateCheckout
    window.fbq?.("track", "InitiateCheckout", {
      content_name: name,
      content_ids: [sku],
      content_type: "product",
      value: price,
      currency: "USD",
      num_items: 1,
    });

    // TikTok Pixel — InitiateCheckout
    window.ttq?.track("InitiateCheckout", {
      content_id: sku,
      content_name: name,
      content_type: "product",
      value: price,
      currency: "USD",
      quantity: 1,
    });
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
