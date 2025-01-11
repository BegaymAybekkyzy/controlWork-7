import React from "react";
import ProductBtn from "../ProductBtn/ProductBtn";
import { IPRODUCTS } from "../../types";

interface Props {
  fastFoodProducts: IPRODUCTS[];
  orderAddition: (productItem: IPRODUCTS, index: number) => void;
}

const Menu: React.FC<Props> = ({ fastFoodProducts, orderAddition }) => {
  return (
    <>
      {fastFoodProducts.map((productItem, index) => (
        <ProductBtn
          key={productItem.name}
          product={productItem}
          orderAddition={() => orderAddition(productItem, index)}
        />
      ))}
    </>
  );
};

export default Menu;
