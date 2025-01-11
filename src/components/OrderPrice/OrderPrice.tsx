import React from 'react';

interface Props {
  totalPrice: number;
}

const OrderPrice: React.FC<Props> = ({totalPrice}) => {
  return (
    <div><b>Total price:</b> {totalPrice}</div>
  );
};

export default OrderPrice;