import { IProductList } from '@/models';
import { getRandonNumber } from '@/utils';
import { useState } from 'react';

type Prop = {
  addProduct: (product: IProductList) => void
}

export default function FormDetailsColum ({ addProduct }:Prop) {
  const [data, setData] = useState<IProductList>({
    id: Number(getRandonNumber(10)),
    description: 'VARIOS',
    quantity: 1,
    salePrice: 0,
    costPrice: 1,
    proffit: 1,
    upcCode: '123',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    addProduct(data);
    setData({
      id: Number(getRandonNumber(10)),
      description: 'VARIOS',
      quantity: 1,
      salePrice: 0,
      costPrice: 1,
      proffit: 1,
      upcCode: '123',
    });
  };

  return (
    <tr className='bg-blue-200 border-b pt-6'>
      <th scope='row' className='px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'>
        <input
          type='text'
          name='description'
          className='bg-gray-50 w-52 border uppercase border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 '
          placeholder='Descripcion'
          required
          minLength={5}
          value={data.description}
          onChange={handleChange}
        />
      </th>
      <td className='px-6 py-4'>
        ***upcCode***
      </td>
      <td className='px-6 py-4'>

        <input
          type='number'
          name='quantity'
          className='bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 '
          placeholder='1'
          required
          autoComplete='off'
          min={1}
          value={data.quantity}
          onChange={handleChange}
        />

      </td>
      <td className='px-6 py-4'>
        <input
          type='number'
          name='salePrice'
          className='bg-gray-50 w-[5.8rem] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 '
          placeholder='1'
          required
          autoComplete='off'
          min={1}
          value={data.salePrice}
          onChange={handleChange}
        />
      </td>
      <td className='px-6 py-4 text-green-500'>
        ${(data.salePrice * data.quantity).toLocaleString('en-US')}
      </td>

      <td className='px-6 py-4 text-center relative'>
        <button
          type='submit'
          onClick={handleSubmit}
          className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2 disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={data.salePrice === 0}
        >
          √
        </button>
      </td>

    </tr>
  );
}
