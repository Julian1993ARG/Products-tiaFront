import React, { createContext, useContext, useState } from 'react'
import { axiosApi } from '@/services'
import { IProduct, Root } from '@/models'

interface IContextProducts {
  products: IProduct[]
  getProductByUpcCode: (upcCode: string) => Promise<void>
}
export const ProductsContext = createContext<IContextProducts>({
  products: [],
  getProductByUpcCode: async () => { },
})

export const ProductsContextProvider = ({ children } : {children:React.ReactNode}) => {
  const [products, setProducts] = useState<IProduct[]>([])

  const getProductByUpcCode = async (upcCode: string) => {
    const response = await axiosApi.get<Root<IProduct>>(`Products/upc:string?upcCode=${upcCode}`)
    setProducts(prev => [...prev, response.data.data])
  }
  return (
    <ProductsContext.Provider
      value={{ products, getProductByUpcCode }}
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
