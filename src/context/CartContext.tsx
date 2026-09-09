"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string; // unique ID e.g. "1" or "d2-0,40 l"
  menuId: string;
  name: string;
  variant?: string;
  price: number; // numeric price in Euros e.g. 5.1
  priceFormatted: string; // e.g. "5,10"
  quantity: number;
  category?: string;
  itemNumber?: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: {
    menuId: string;
    name: string;
    variant?: string;
    price: string | number;
    category?: string;
    itemNumber?: string;
  }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalAmount: number;
  getItemQuantity: (menuId: string, variant?: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function parsePrice(priceStr: string | number): number {
  if (typeof priceStr === "number") return priceStr;
  const cleaned = priceStr.replace("€", "").replace(",", ".").trim();
  return parseFloat(cleaned) || 0;
}

function formatPrice(val: number): string {
  return val.toFixed(2).replace(".", ",");
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("aastha_cart");
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load cart", e);
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("aastha_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }, [cart]);

  const addToCart = (item: {
    menuId: string;
    name: string;
    variant?: string;
    price: string | number;
    category?: string;
    itemNumber?: string;
  }) => {
    const numericPrice = parsePrice(item.price);
    const cartItemId = item.variant ? `${item.menuId}-${item.variant}` : item.menuId;

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex((i) => i.id === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      } else {
        return [
          ...prevCart,
          {
            id: cartItemId,
            menuId: item.menuId,
            name: item.name,
            variant: item.variant,
            price: numericPrice,
            priceFormatted: formatPrice(numericPrice),
            quantity: 1,
            category: item.category,
            itemNumber: item.itemNumber,
          },
        ];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const getItemQuantity = (menuId: string, variant?: string) => {
    const id = variant ? `${menuId}-${variant}` : menuId;
    const found = cart.find((i) => i.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        totalAmount,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
