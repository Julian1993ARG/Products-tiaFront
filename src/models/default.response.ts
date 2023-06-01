export interface Root<T> {
  statusCode: number
  ok: boolean
  errorMessage: [string] | null
  data: T
}
