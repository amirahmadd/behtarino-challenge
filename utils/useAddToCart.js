import { useState } from "react";

export const useAddToCart = (productId) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const addToCart = async () => {
    try {
      setLoading(true);
      const result = await fetch("https://fakestoreapi.com/carts", {
        method: "POST",
        body: JSON.stringify({
          userId: 1, //fake id
          date: new Date(),
          products: [{ productId, quantity: 1 }],
        }),
      });
      const data = await result.json();
      console.log(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    addToCart,
  };
};
