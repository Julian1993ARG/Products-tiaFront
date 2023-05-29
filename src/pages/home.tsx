import { useProductsContext } from '@/../context/products.context';
import { FormSearchByUpcCode, Layout, TableProducts } from '../components';

export function Home () {
  const { getProductByUpcCode } = useProductsContext();
  return (
    <Layout>
      <h1>Home</h1>

      <FormSearchByUpcCode getProductByUpcCode={getProductByUpcCode} />
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg my-2'>
        <TableProducts />
      </div>

    </Layout>
  );
}
