import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { DetailsColumn, FormDetailsColum, TrashSvg } from './';
import { useProductsContext } from 'context/products.context';

export default function TableProducts () {
  const { products, setQuantity, deleteProduct, setSalePrice, resetProducts, addProductToList } = useProductsContext();
  const [total, setTotal] = useState(0);
  const [change, setChange] = useState(0);

  useEffect(() => {
    setTotal(products.reduce((acc, curr) => acc + curr.salePrice * curr.quantity, 0));
    setChange(0);
  }, [products]);

  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0) setChange((value - total));
  }, 500);

  const handleReset = () => {
    resetProducts();
    setChange(0);
  };

  return (
    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
      <caption className='p-5 text-xl font-semibold text-left bg-white dark:text-white dark:bg-gray-800 text-green-500 relative'>
        Total venta = $ {total.toLocaleString('en-US')}
        <p className='text-blue-500 text-lg pt-2'>Cantidad de productos: {products.length}</p>
        <div className='text-gray-400 flex mt-3 items-center'>
          <label htmlFor='change'>Calcular vuelto:</label>
          <input
            type='number'
            name='change'
            id='change'
            className='bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.'
            placeholder='0'
            onChange={handleChange}
            disabled={products.length === 0}
          />
          <span
            className={`${change !== 0 ? 'block' : 'hidden'} ${change > 0 ? 'text-green-500' : 'text-red-500'}`}
          >
            {change < 0 ? 'Falta: ' : 'Vuelto: '}
            $&nbsp;
            {Math.abs(change).toLocaleString('en-US')}
          </span>
        </div>
        <button
          type='button'
          onClick={handleReset}
          className='text-black border border-black hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center absolute right-5 top-5 disabled:hover:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed'
          disabled={products.length === 0}
        >
          <TrashSvg />
          <span className='sr-only'>Reiniciar lista</span>
        </button>
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
            updateProductQuantityContext={setQuantity}
            deleteProduct={deleteProduct}
            updateSalePriceContext={setSalePrice}
          />
        ))}

        <FormDetailsColum
          addProduct={addProductToList}
        />

      </tbody>
    </table>
  );
}
