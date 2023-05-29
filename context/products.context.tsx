import React, { createContext, useContext, useState } from 'react';
import { axiosApi } from '../services';
import { IProductList, Root, IProduct } from '@/models';

interface IContextProducts {
  products: IProductList[]
  getProductByUpcCode: (upcCode: string) => Promise<void>
  setQuantity: (id: number, quantity: number) => void
  setSalePrice: (id: number, salePrice: number) => void
  deleteProduct: (id: number) => void
}
export const ProductsContext = createContext<IContextProducts>({
  products: [],
  getProductByUpcCode: async () => { },
  setQuantity: () => { },
  setSalePrice: () => { },
  deleteProduct: () => { },
});

export const ProductsContextProvider = ({ children } : {children:React.ReactNode}) => {
  const [products, setProducts] = useState<IProductList[]>([]);

  const getProductByUpcCode = async (upcCode: string) => {
    const response = await axiosApi.get<Root<IProduct>>(`Products/upc:string?upcCode=${upcCode}`);
    setProduct(response.data.data);
  };

  const setProduct = (product:IProduct) => {
    const existProduct = products.find(p => p.id === product.id);
    if (existProduct) {
      setProducts(prev => prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p));
    } else {
      setProducts(prev => [{ ...product, quantity: 1 }, ...prev]);
    }
  };

  const setQuantity = (id: number, quantity: number) => setProducts(prev => prev.map(p => p.id === id ? { ...p, quantity } : p));

  const deleteProduct = (id: number) => setProducts(prev => prev.filter(p => p.id !== id));

  const setSalePrice = (id: number, salePrice: number) => setProducts(prev => prev.map(p => p.id === id ? { ...p, salePrice } : p));

  return (
    <ProductsContext.Provider
      value={{ products, getProductByUpcCode, setQuantity, deleteProduct, setSalePrice }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// Creamos el hook
export const useProductsContext = () => {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error('useCryptoContext must be used within a CryptoProvider');
  }
  return context;
};
