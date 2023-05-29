import { useProductsContext } from '@/context/products.context'
import { FormSearchByUpcCode, Layout } from '../components'

export function Home () {
  const { getProductByUpcCode, products } = useProductsContext()

  return (
    <Layout>
      <h1>Home</h1>

      <FormSearchByUpcCode getProductByUpcCode={getProductByUpcCode} />

    </Layout>
  )
}
