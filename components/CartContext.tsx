import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.name === item.name);

      if (existing) {
        return prev.map((p) =>
          p.name === item.name
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const increaseQty = (name: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (name: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (name: string) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);