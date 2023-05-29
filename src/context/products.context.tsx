import React, { createContext, useContext, useState } from 'react'
import { axiosApi } from '@/services'
import { IProductList, Root, IProduct } from '@/models'

interface IContextProducts {
  products: IProductList[]
  getProductByUpcCode: (upcCode: string) => Promise<void>
}
export const ProductsContext = createContext<IContextProducts>({
  products: [],
  getProductByUpcCode: async () => { },
})

export const ProductsContextProvider = ({ children } : {children:React.ReactNode}) => {
  const [products, setProducts] = useState<IProductList[]>([])

  const getProductByUpcCode = async (upcCode: string) => {
    const response = await axiosApi.get<Root<IProduct>>(`Products/upc:string?upcCode=${upcCode}`)
    setProduct(response.data.data)
  }

  const setProduct = (product:IProduct) => {
    const existProduct = products.find(p => p.id === product.id)
    if (existProduct) {
      setProducts(prev => prev.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p))
    } else {
      setProducts(prev => [...prev, { ...product, quantity: 1 }])
    }
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
