import { useProductsContext } from '@/../context/products.context';
import { FormSearchByName, FormSearchByUpcCode, Layout, TableProducts } from '../components';

export default function Home () {
  const { getProductByUpcCode } = useProductsContext();
  return (
    <Layout>
      <div className='grid grid-cols-5 w-full gap-3'>
        <FormSearchByUpcCode getProductByUpcCode={getProductByUpcCode} />
        <FormSearchByName />
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg my-2'>
        <TableProducts />
      </div>

    </Layout>
  );
}
