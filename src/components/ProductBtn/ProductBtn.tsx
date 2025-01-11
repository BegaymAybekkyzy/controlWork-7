import React from 'react';
import { IPRODUCTS } from '../../types';
import './ProductBtn.css';

interface Props {
  product: IPRODUCTS;
  orderAddition: () => void;
}

const ProductBtn: React.FC<Props> = ({product, orderAddition}) => {
  return (
    <>
      <button onClick={orderAddition}>
        <div><img src={product.image} alt={product.name}/></div>
        <div><p>{product.name}</p>
          <p>{product.price} KGS</p></div>
      </button>
    </>
  );
};

export default ProductBtn;