import React, { createContext, useContext, useState } from 'react'
import { IProduct } from '@/models'

interface IContextProducts {
  products: IProduct[]
}
export const ProductsContext = createContext<IContextProducts>({
  products: [],
})

export const ProductsContextProvider = ({ children } : {children:React.ReactNode}) => {
  const [products, setProducts] = useState<IProduct[]>([])
  return (
    <ProductsContext.Provider
      value={{ products }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

// Creamos el hook
export const useProductsContext = () => {
  const context = useContext(ProductsContext)
  if (context === undefined) {
    throw new Error('useCryptoContext must be used within a CryptoProvider')
  }
  return context
}
