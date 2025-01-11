import React from "react";
import { IPRODUCTS } from "../../types";
import "./ProductBtn.css";

interface Props {
  product: IPRODUCTS;
  orderAddition: () => void;
}

const ProductBtn: React.FC<Props> = ({ product, orderAddition }) => {
  return (
    <>
      <button onClick={orderAddition} className="product-btn">
        <div>
          <img src={product.image} alt={product.name} />
        </div>

        <p className="product-name">{product.name}</p>
        <p>{product.price} KGS</p>
      </button>
    </>
  );
};

export default ProductBtn;
