/* eslint-disable jsx-a11y/anchor-is-valid */
import { Layout } from '@/components';
import { Outlet } from 'react-router';

export default function Admin () {
  return (
    <Layout admin>
      <Aside />
      <Outlet />
    </Layout>
  );
}

const Aside = () => {
  return (
    <>
      <button data-drawer-target='logo-sidebar' data-drawer-toggle='logo-sidebar' aria-controls='logo-sidebar' type='button' className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
        <span className='sr-only'>Open sidebar</span>
        <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path clipRule='evenodd' fillRule='evenodd' d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z' />
        </svg>
      </button>

      <aside id='logo-sidebar' className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0' aria-label='Sidebar'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <a href='https://flowbite.com/' className='flex items-center pl-2.5 mb-5'>
            <img src='https://flowbite.com/docs/images/logo.svg' className='h-6 mr-3 sm:h-7' alt='Flowbite Logo' />
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Flowbite</span>
          </a>
          <ul className='space-y-2 font-medium'>

            <li>
              <a href='#' className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                <svg aria-hidden='true' className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z' clipRule='evenodd' /></svg>
                <span className='flex-1 ml-3 whitespace-nowrap'>Products</span>
              </a>
            </li>

          </ul>
        </div>
      </aside>
    </>
  );
};