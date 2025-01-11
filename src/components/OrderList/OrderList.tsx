import React from "react";
import OrderPrice from "../OrderPrice/OrderPrice";
import AlternativeText from "../AlternativeText/AlternativeText";
import OrderItem from "./OrderItem/OrderItem";
import { IProducts } from "../../types";

interface Props {
  totalPrice: number;
  products: IProducts[];
  deleteProduct: (index: number) => void;
}

const OrderList: React.FC<Props> = ({
  totalPrice,
  products,
  deleteProduct,
}) => {
  return (
    <>
      {totalPrice > 0 ? (
        <div>
          {products.map((product, index) => {
            if (product.count) {
              return (
                <OrderItem
                  key={index}
                  product={product}
                  index={index}
                  deleteProduct={() => deleteProduct(index)}
                />
              );
            }
          })}
          <OrderPrice totalPrice={totalPrice} />
        </div>
      ) : (
        <AlternativeText text="Order is empty! Please add some items" />
      )}
    </>
  );
};

export default OrderList;
