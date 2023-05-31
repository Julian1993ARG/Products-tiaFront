/* eslint-disable jsx-a11y/anchor-is-valid */
import { Layout, ShoppingCartSvg } from '@/components';
import { routes } from '@/models';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

export default function Admin () {
  return (
    <Layout admin>
      <Aside />
      <div className='pl-64'>
        <Outlet />
      </div>
    </Layout>
  );
}

const Aside = () => {
  const { pathname } = useLocation();
  const hrefRoutes = [{
    to: routes.Admin.path,
    classNameTo: 'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
    label: 'Productos',
    icon: <ShoppingCartSvg className='flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75' />,
  }];

  return (
    <>
      <button data-drawer-target='logo-sidebar' data-drawer-toggle='logo-sidebar' aria-controls='logo-sidebar' type='button' className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
        <span className='sr-only'>Open sidebar</span>
        <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
          <path clipRule='evenodd' fillRule='evenodd' d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z' />
        </svg>
      </button>

      <aside id='logo-sidebar' className='fixed top-0 w-64 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0' aria-label='Sidebar'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
          <Link to={routes.Home.path} className='flex items-center pl-2.5 mb-5'>
            <img src='https://flowbite.com/docs/images/logo.svg' className='h-6 mr-3 sm:h-7' alt='Flowbite Logo' />
            <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Inicio</span>
          </Link>
          <ul className='space-y-2 font-medium'>

            {hrefRoutes.map(({ to, label, icon, classNameTo }, index) => (
              <li key={index}>
                <Link to={to} className={`${classNameTo} ${to === pathname ? '!text-blue-500 bg-gray-200 hover:bg-gray-200' : ''}`}>
                  {icon}
                  {label}
                </Link>
              </li>
            ))}

          </ul>
        </div>
      </aside>
    </>
  );
};
