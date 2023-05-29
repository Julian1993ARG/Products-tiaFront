import { useProductsContext } from '@/../context/products.context';
import { FormSearchByUpcCode, Layout, TableProducts } from '../components';

export function Home () {
  const { getProductByUpcCode, products, setQuantity, deleteProduct, setSalePrice, resetProducts } = useProductsContext();
  return (
    <Layout>
      <h1>Home</h1>

      <FormSearchByUpcCode getProductByUpcCode={getProductByUpcCode} />
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg my-2'>
        <TableProducts
          products={products}
          setQuantity={setQuantity}
          deleteProduct={deleteProduct}
          setSalePrice={setSalePrice}
          resetProducts={resetProducts}
        />
      </div>

    </Layout>
  );
}
