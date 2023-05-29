export interface IProduct {
  id: number
  description: string
  upcCode: string
  costPrice: number
  proffit: number
  salePrice: number
  supplierId: number
}

export interface IProductList extends Omit<IProduct, 'supplierId'>{
  quantity:number
}
