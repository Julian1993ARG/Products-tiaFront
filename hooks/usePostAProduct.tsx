import { IProduct } from '../src/models/product.response';
import { axiosApi } from '../services/axios.api';

interface IPostAProduct extends Omit<IProduct, 'id'|'salePrice'>{};

export default function usePostAProduct () {
  const postAProduct = async (product:IPostAProduct) => {
    if (isNaN(Number(product.supplierId))) product.supplierId = null;
    const response = await axiosApi.post('/Products', product);
    console.log(response);
  };

  return { postAProduct };
}
