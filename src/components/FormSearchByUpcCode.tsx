import { useRef } from 'react';
import { CodeIcon, SearchIcon } from './SvgIcons';

type Props = {
  getProductByUpcCode: (upcCode: string) => void
}

export default function FormSearchByUpcCode ({ getProductByUpcCode }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ref.current !== null) {
      const upcCode = ref.current?.value;
      if (upcCode) {
        getProductByUpcCode(upcCode);
      }
      ref.current.value = '';
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
    >
      <label
        htmlFor='email-address-icon'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        Ingresa el Código del producto.
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <CodeIcon className='w-5 h-5 text-gray-500 dark:text-gray-400' />
        </div>
        <input
          name='searchProduct'
          type='text'
          id='email-address-icon'
          ref={ref}
          className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Por ejemplo 123456789'
          minLength={3}
          maxLength={20}
          required
          autoComplete='off'
        />
      </div>
      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
      >
        <div className='flex text-center gap-2 justify-center items-center'>
          <SearchIcon className='w-5' />
          Buscar!
        </div>
      </button>
    </form>
  );
}
