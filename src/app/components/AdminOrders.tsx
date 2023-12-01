import React, { useEffect, useState } from 'react';
import Pocketbase from 'pocketbase';
import { useParams } from 'react-router-dom';

interface IProduct {
  products: any;
  id: string;
  name: string;
  fullName: string;
  phone: string;
  address: string;
  postal_code: string;

}

const OrdersTab: React.FC = () => {
  const [purchases, setPurchases] = useState<IProduct>();
  const id = useParams().id;

  useEffect(() => {
    const pb = new Pocketbase(import.meta.env.VITE_PB);
    (async () => {
      try {
        const purchases = await pb.collection('purchases').getOne<IProduct>(id!);

        for (let index in purchases.products) {
          const product = await pb
            .collection('products')
            .getOne<{ name: any }>(purchases.products[index]);
            purchases.products[index] = product.name;
        }

      
        setPurchases(purchases);
      } catch (error) {
        window.alert((error as Error).message);
      }
    })();
  }, [id]);


  return (
    <div>
      <h2>Orders Tab Content</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>ID</th>
            <th>نام کامل</th>
            <th>شماره تلفن</th>
            <th>آدرس</th>
            <th>کد پستی</th>
            <th>نام محصول</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>{purchases?.id}</td>
              <td>{purchases?.fullName}</td>
              <td>{purchases?.phone}</td>
              <td>{purchases?.address}</td>
              <td>{purchases?.postal_code}</td>
              <td>{purchases?.products}</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTab;