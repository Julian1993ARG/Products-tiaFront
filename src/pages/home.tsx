import { useProductsContext } from '@/context/products.context';
import { FormSearchByUpcCode, Layout } from '../components';

export function Home () {
  const { getProductByUpcCode, products, setQuantity, deleteProduct } = useProductsContext();
  const total = products.reduce((acc, curr) => acc + curr.salePrice * curr.quantity, 0).toFixed(2);
  return (
    <Layout>
      <h1>Home</h1>

      <FormSearchByUpcCode getProductByUpcCode={getProductByUpcCode} />
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg my-2'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <caption className='p-5 text-lg font-semibold text-left bg-white dark:text-white dark:bg-gray-800 text-green-500'>
            Total = $ {total}
            <p className='mt-1 text-sm font-normal text-gray-500 dark:text-gray-400'>Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
          </caption>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Producto
              </th>
              <th scope='col' className='px-6 py-3'>
                Código
              </th>
              <th scope='col' className='px-6 py-3'>
                Cantidad
              </th>
              <th scope='col' className='px-6 py-3'>
                Precio
              </th>
              <th scope='col' className='px-6 py-3'>
                Total
              </th>
              <th scope='col' className='px-6 py-3' />

            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <DetailsColumn
                key={product.id}
                description={product.description}
                upcCode={product.upcCode}
                salePrice={product.salePrice}
                quantity={product.quantity}
                produtId={product.id}
                updateContext={setQuantity}
                deleteProduct={deleteProduct}
              />
            ))}

          </tbody>
        </table>
      </div>

    </Layout>
  );
}

type Props = {
  description: string
  upcCode: string
  salePrice: number
  quantity: number
  produtId: number
  updateContext: (id: number, quantity: number) => void
  deleteProduct: (id: number) => void
}

const DetailsColumn = ({ description, upcCode, salePrice, quantity, produtId, updateContext, deleteProduct }:Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateContext(produtId, Number(e.target.value));
  };

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
      <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
        {description}
      </th>
      <td className='px-6 py-4'>
        {upcCode}
      </td>
      <td className='px-6 py-4'>

        <div>
          <input
            type='number'
            id='first_product'
            className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='1'
            required
            autoComplete='off'
            min={1}
            value={quantity}
            onChange={handleChange}
          />
        </div>

      </td>
      <td className='px-6 py-4'>
        ${salePrice}
      </td>
      <td className='px-6 py-4'>
        ${(salePrice * quantity).toFixed(2)}
      </td>

      <td className='px-6 py-4 text-center relative'>
        <button
          type='submit'
          onClick={() => deleteProduct(produtId)}
          className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
        >
          X
        </button>
      </td>

    </tr>
  );
};
