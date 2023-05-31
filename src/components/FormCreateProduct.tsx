import React, { ChangeEvent, InputHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';
import { useFormik } from 'formik';
import { useGetAllSuppliers, usePostAProduct } from 'hooks';

type InitialProps = {
  description: string;
  upcCode: string;
  costPrice: number;
  proffit: number;
  supplierId: number | null;
};

export default function FormCreateProduct () {
  const { data } = useGetAllSuppliers();
  const { postAProduct } = usePostAProduct();
  const formik = useFormik({
    initialValues: {
      description: '',
      upcCode: '',
      costPrice: 1,
      proffit: 50,
      supplierId: null,
    },
    onSubmit: async (values: InitialProps) => {
      await postAProduct(values);
    },
  });

  return (
    <div className='p-4 '>
      <form onSubmit={formik.handleSubmit}>
        <div className='relative z-0 w-full mb-6 group'>
          <DefaultInput
            id='description'
            name='description'
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          <DefaultLabel htmlFor='description'>
            Descripción del producto, regla (detalle, marca, medida) ej: Gaseosa cola light Coca Cola 2,15Lt.
          </DefaultLabel>
        </div>

        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='relative z-0 w-full mb-6 group'>
            <DefaultInput
              id='upcCode'
              name='upcCode'
              onChange={formik.handleChange}
              value={formik.values.upcCode}
              min={3}
              max={20}
            />
            <DefaultLabel htmlFor='upcCode'>
              Código del product (UPC)
            </DefaultLabel>
          </div>

          <div className='relative z-0 w-full mb-6 group'>
            <DefaultInput
              id='costPrice'
              name='costPrice'
              onChange={formik.handleChange}
              value={formik.values.costPrice}
              min={1}
              type='number'
            />
            <DefaultLabel htmlFor='costPrice'>
              Precio costo del producto $$
            </DefaultLabel>
          </div>
        </div>

        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='relative z-0 w-full mb-6 group'>
            <DefaultInput
              id='proffit'
              name='proffit'
              onChange={formik.handleChange}
              value={formik.values.proffit}
              min={1}
              type='number'
            />
            <DefaultLabel htmlFor='proffit'>
              Redondeo de precio en %, por defecto 50%
            </DefaultLabel>
          </div>
          <div className='relative z-0 w-full mb-6 group'>
            <label htmlFor='supplierId' className='sr-only'>Selecciona el proveedor</label>
            <select
              name='supplierId'
              id='supplierId'
              className='block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
              onChange={formik.handleChange}
            >
              <option value={undefined}>Proveedor</option>
              {data.suppliers.map(supplier => (
                <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
              ))}
            </select>
          </div>

        </div>

        <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Submit</button>
      </form>
    </div>
  );
}

interface DefaultInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  id: string;
  name: string;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
  onChange,
  value,
  id,
  name,
  type = 'text',
  ...props
}) => {
  return (
    <input
      name={name}
      id={id}
      className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
      placeholder=' '
      required
      autoComplete='off'
      onChange={onChange}
      type={type}
      value={value}
      {...props}
    />
  );
};

type DefaultLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor: string;
  children: ReactNode;
}
const DefaultLabel = ({ htmlFor, children }:DefaultLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
    >
      {children}
    </label>
  );
};
