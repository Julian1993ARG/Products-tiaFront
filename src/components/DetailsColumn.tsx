import { useState } from 'react';

type Props = {
  description: string
  upcCode: string
  salePrice: number
  quantity: number
  produtId: number
  updateProductQuantityContext: (id: number, quantity: number) => void
  updateSalePriceContext: (id: number, salePrice: number) => void
  deleteProduct: (id: number) => void
}

const DetailsColumn = ({
  description,
  upcCode,
  salePrice,
  quantity,
  produtId,
  updateProductQuantityContext,
  deleteProduct,
  updateSalePriceContext,
}:Props) => {
  const [originalSalePrice] = useState(salePrice);
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => updateProductQuantityContext(produtId, Number(e.target.value));
  const handleSalePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => updateSalePriceContext(produtId, Number(e.target.value));

  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
      <th scope='row' className='px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'>
        {description}
      </th>
      <td className='px-6 py-4'>
        {upcCode}
      </td>
      <td className='px-6 py-4'>

        <input
          type='number'
          id='first_product'
          className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 '
          placeholder='1'
          required
          autoComplete='off'
          min={1}
          value={quantity}
          onChange={handleQuantityChange}
        />

      </td>
      <td className='px-6 py-4'>
        <input
          type='number'
          className={`bg-gray-50 w-[5.8rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 ${salePrice !== originalSalePrice ? salePrice > originalSalePrice ? 'bg-green-300' : 'bg-red-300' : ''}`}
          placeholder='1'
          required
          autoComplete='off'
          min={1}
          value={salePrice}
          onChange={handleSalePriceChange}
        />
      </td>
      <td className='px-6 py-4 text-green-500'>
        ${(salePrice * quantity).toLocaleString('en-US')}
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

export default DetailsColumn;
