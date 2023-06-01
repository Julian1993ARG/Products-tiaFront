/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useState } from 'react';
import { ISupplier } from '../src/models/supplier.model';
import { axiosApi } from '../services/axios.api';
import { Root } from '../src/models/default.response';

type dataProps = {
  suppliers: ISupplier[];
  isLoading: boolean;
}

export default function useGetAllSuppliers () {
  const [data, setData] = useState<dataProps>({
    suppliers: [],
    isLoading: false,
  });

  const getAllSuppliers = async () => {
    if (data.suppliers.length > 0) return;
    setData({
      ...data,
      isLoading: true,
    });

    const suppliers = await axiosApi.get<Root<ISupplier[]>>('/Supplier')
      .then(response => response.data.data);

    setData({
      suppliers,
      isLoading: false,
    });
  };

  return { data, getAllSuppliers };
}
