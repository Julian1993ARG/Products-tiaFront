import { SearchIcon, Spinner } from './';
import { useProductsContext } from 'context/products.context';
import { useGetProductsByDescription } from '@/../hooks';
import { IProduct } from '@/models';

export default function FormSearchByName () {
  const { description, handleDescriptionChange, data } = useGetProductsByDescription();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {};
  const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => handleDescriptionChange(e.target.value);

  return (
    <div className='relative col-span-3'>
      <label
        htmlFor='search'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >Ingresa para buscar productos
      </label>
      <form
        className='w-full relative'
        onSubmit={handleSubmit}
      >
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <SearchIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
        </div>
        <input
          type='text'
          id='search'
          name='search'
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5'
          placeholder='Ingresa aquí por ejemplo "Gaseosa Coca Cola"'
          value={description}
          onChange={handleInput}
          autoComplete='off'
        />
        <button
          type='submit'
          className='absolute right-1 cursor-pointer'
        />
      </form>
      {description.length > 2 && (<SearchBar
        data={data.products}
        loading={data.loading}
        notFound={data.notFound}
                                  />)}
    </div>
  );
}

type Props = {
  data: IProduct[] | null
  loading: boolean
  notFound: boolean
}

const SearchBar = ({ data, loading, notFound }:Props) => {
  const { setProduct } = useProductsContext();
  if (loading && !notFound) {
    return (
      <ul className='absolute top-15 right-0 w-full bg-gray-200 rounded overflow-x-hidden  py-2  backdrop-filter backdrop-blur-md bg-opacity-60  scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200  z-10 h-60 '>
        <Spinner />
      </ul>
    );
  };
  if (data !== null && !notFound) {
    return (
      <ul className='absolute top-15 right-0 w-full bg-gray-200 rounded overflow-x-hidden  py-2  backdrop-filter backdrop-blur-md bg-opacity-60  scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200  z-10 h-60 '>
        {
                 data.map((product) => (
                   <li
                     key={product.id}
                     className='flex items-center ml-4 my-2 cursor-pointer '
                     onClick={() => setProduct(product)}
                   >
                     <span>{product.description}</span>
                   </li>
                 ))
               }
        {/* eslint-disable-next-line react/jsx-closing-tag-location */}
      </ul>
    );
  }

  if (notFound) {
    return (
      <ul className='absolute top-15 right-0 w-full bg-gray-200 rounded overflow-x-hidden  py-2  backdrop-filter backdrop-blur-md bg-opacity-60  scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200  z-10 h-60 '>
        <li className='flex items-center ml-4 my-2 '>
          <span>No se encontraron resultados</span>
        </li>
      </ul>
    );
  };

  return null;
};
