import React from "react";
import "./OrderPrice.css";

interface Props {
  totalPrice: number;
}

const OrderPrice: React.FC<Props> = ({ totalPrice }) => {
  return <div className="total-price">Total price: {totalPrice} KGS</div>;
};

export default OrderPrice;
