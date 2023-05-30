import { axiosApi } from '../services';
import { IProduct } from '../src/models/product.response';
import { useEffect, useState } from 'react';
import { Root } from '../src/models/default.response';

type StateProps = {
  products: IProduct[] | null;
  loading: boolean;
  notFound: boolean;
}
export default function useGetProductsByDescription () {
  const [description, setDescription] = useState<string>('');
  const [data, setData] = useState<StateProps>({
    products: null,
    loading: false,
    notFound: false,
  });

  const getProductsByDescription = async (description: string) => {
    setData(prev => ({ ...prev, loading: true }));
    const response = await axiosApi.get<Root<IProduct[] | null>>(`/Products/details:string?details=${description}`);
    if (response.data.statusCode === 404) setData(prev => ({ ...prev, notFound: true }));
    else setData(prev => ({ ...prev, products: response.data.data, notFound: false, loading: false }));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (description.length > 2) {
        getProductsByDescription(description);
      }
    }
    , 1000);
    return () => clearTimeout(interval);
  }, [description]);

  const handleDescriptionChange = (description: string) => {
    setDescription(description);
  };

  return { data, handleDescriptionChange, description };
}
