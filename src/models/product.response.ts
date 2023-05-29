export interface IProduct {
  id: number
  decription: string
  upcCode: string
  costPrice: number
  proffit: number
  salePrice: number
  supplierId: number
}
export interface Root {
  statusCode: number
  ok: boolean
  errorMessage: any
  data: IProduct
}
