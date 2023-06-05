import { ChangeEvent, useEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { DetailsColumn, FormDetailsColum, TrashSvg } from './';
import { useProductsContext } from 'context/products.context';

export default function TableProducts () {
  const { products, setQuantity, deleteProduct, setSalePrice, resetProducts, addProductToList } = useProductsContext();
  const [total, setTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [priceIncrease, setPriceIncrease] = useState(0);
  const [priceDiscount, setPriceDiscount] = useState(0);

  useEffect(() => {
    setSubTotal(products.reduce((acc, curr) => acc + curr.salePrice * curr.quantity, 0));
  }, [products]);

  useEffect(() => {
    setTotal(subTotal + ((priceIncrease / 100) * subTotal) - ((priceDiscount / 100) * subTotal));
  }, [priceIncrease, priceDiscount, subTotal]);

  const handleIncrease = (e:ChangeEvent<HTMLInputElement>) => setPriceIncrease(Number(e.target.value));
  const handleDiscount = (e:ChangeEvent<HTMLInputElement>) => setPriceDiscount(Number(e.target.value));

  const handleReset = () => {
    resetProducts();
    setPriceIncrease(0);
    setPriceDiscount(0);
  };

  return (
    <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
      <caption className='p-5 text-xl font-semibold text-left bg-white dark:text-white dark:bg-gray-800 text-green-500 relative'>
        Total venta = $ {total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        <p className='text-blue-500 text-lg pt-2'>Cantidad de productos: {products.length}</p>

        <div className='w-2/4 flex justify-start items-center text-red-500'>
          <label htmlFor='surcharge' className=''>Recargo %</label>
          <input
            type='number'
            name='surcharge'
            min={0}
            id='surcharge'
            placeholder='%'
            className='bg-gray-300 rounded-md mx-3 px-1 py-0 w-12 border-none outline-none '
            value={priceIncrease}
            onChange={handleIncrease}
          />
          <span className=''>total: {((priceIncrease / 100) * subTotal).toFixed(2)}</span>
        </div>
        <div className='w-2/4 flex justify-start items-center text-green-500 pt-1'>
          <label htmlFor='discount' className=''>Descuento %</label>
          <input
            type='number'
            name='discount'
            min={0}
            id='discount'
            placeholder='%'
            className='bg-gray-300 rounded-md mx-3 px-1 py-0 w-12 border-none outline-none '
            value={priceDiscount}
            onChange={handleDiscount}
          />
          <span className=''>total: {((priceDiscount / 100) * subTotal).toFixed(2)}</span>
        </div>

        <div className='text-gray-400 flex mt-3 items-center'>
          <ChangeCalculator length={products.length} total={total} />
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

type ChangeProps ={
  length:number
  total:number
}
const ChangeCalculator = ({ length, total }:ChangeProps) => {
  const [change, setChange] = useState(0);
  const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0) setChange((value - total));
    else setChange(0);
  }, 500);
  useEffect(() => { setChange(0); }, [length]);
  return (
    <>
      <label htmlFor='change'>Calcular vuelto:</label>
      <input
        type='number'
        name='change'
        id='change'
        className='bg-gray-50 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/5 p-2.'
        placeholder='0'
        onChange={handleChange}
        disabled={length === 0}
      />
      <span
        className={`${change !== 0 ? 'block' : 'hidden'} ${change > 0 ? 'text-green-500' : 'text-red-500'}`}
      >
        {change < 0 ? 'Falta: ' : 'Vuelto: '}
        $&nbsp;
        {Math.abs(change).toLocaleString('en-US')}
      </span>
    </>
  );
};
