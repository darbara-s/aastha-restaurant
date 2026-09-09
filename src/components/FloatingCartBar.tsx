"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function FloatingCartBar() {
  const { totalCount } = useCart();
  const pathname = usePathname();

  // Do not show floating bar if cart is empty or on bestellung / summary page
  if (totalCount === 0 || pathname?.startsWith("/bestellung")) {
    return null;
  }

  return (
    <div className="fixed bottom-20 md:bottom-6 left-0 right-0 z-40 px-4 pointer-events-none flex justify-center mb-1">
      <Link
        href="/bestellung"
        className="pointer-events-auto bg-emerald-700 hover:bg-emerald-800 text-white rounded-full px-5 py-2.5 shadow-[0_6px_24px_rgba(0,0,0,0.25)] flex items-center gap-2.5 transition-all duration-200 transform active:scale-95 group border border-emerald-600/30"
      >
        <ShoppingBag className="w-4 h-4" />
        <span className="font-bold text-sm tracking-wide">
          Order now ({totalCount})
        </span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}
