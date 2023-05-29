export interface IProduct {
  id: number
  decription: string
  upcCode: string
  costPrice: number
  proffit: number
  salePrice: number
  supplierId: number
}

export interface IProductList extends IProduct{
  quantity:number
}
