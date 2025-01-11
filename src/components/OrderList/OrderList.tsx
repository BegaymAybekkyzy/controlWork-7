import React from 'react';
import { IProducts } from '../../types';

interface Props {
  product: IProducts,
  deleteProduct: (index: number) => void,
  index: number,
}

const OrderList: React.FC<Props> = ({product, deleteProduct, index}) => {
  return (
    <div>
      <p>{product.name} : x{product.count}</p>
      <p>Price: {product.price}</p>
      <button onClick={() => deleteProduct(index)}>Delete</button>
      <hr/>
    </div>
  );
};

export default OrderList;