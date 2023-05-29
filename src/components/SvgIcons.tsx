/* eslint-disable react/prop-types */

export const CodeIcon = ({ className = '' }, { ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke='currentColor'
    strokeWidth={1.5}
    viewBox='0 0 24 24'
    className={`w-7 h-7 ${className}`}
    {...rest}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5zm0 9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5zm9.75-9.75c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M6.75 6.75h.75v.75h-.75v-.75zm0 9.75h.75v.75h-.75v-.75zm9.75-9.75h.75v.75h-.75v-.75zm-3 6.75h.75v.75h-.75v-.75zm0 6h.75v.75h-.75v-.75zm6-6h.75v.75h-.75v-.75zm0 6h.75v.75h-.75v-.75zm-3-3h.75v.75h-.75v-.75z'
    />
  </svg>
);

export const SearchIcon = ({ className = '' }, { ...rest }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke='currentColor'
    strokeWidth={1.5}
    className={`w-7 h-7 ${className}`}
    viewBox='0 0 24 24'
    {...rest}
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z'
    />
  </svg>
);
