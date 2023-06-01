import { axiosApi } from '../services';
import { IProduct } from '../src/models/product.response';
import { useEffect, useState } from 'react';
import { Root } from '../src/models/default.response';

export default function useGetProductsByDescription () {
  const [description, setDescription] = useState<string>('');
  const [data, setData] = useState<IProduct[] | null>(null);

  const getProductsByDescription = async (description: string) => {
    const { data } = await axiosApi.get<Root<IProduct[] | null>>(`/Products/details:string?details=${description}`);
    if (!data) return;
    setData(data.data);
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
