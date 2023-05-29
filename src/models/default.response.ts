export interface Root<T> {
  statusCode: number
  ok: boolean
  errorMessage: any
  data: T
}
