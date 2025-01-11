
import foodImg from './assets/food.png';
import drinkImg from './assets/drink.png';
import { IPRODUCTS, IProducts } from './types';
import ProductBtn from './components/ProductBtn/ProductBtn';
import './App.css';
import { useState } from 'react';
import OrderList from './components/OrderList/OrderList';
// import OrderList from './components/OrderList/OrderList';

const fastFoodProducts: IPRODUCTS[] = [
  {name: 'Hamburger', price: 80, image: foodImg},
  {name: 'Cheeseburger', price: 90, image: foodImg},
  {name: 'Fries', price: 45, image: foodImg},
  {name: 'Coffee', price: 70, image: drinkImg},
  {name: 'Tea', price: 50, image: drinkImg},
  {name: 'Cola', price: 40, image: drinkImg},
];

const App = () => {
  const [products, setProducts] = useState<IProducts[]>([
    {name: 'Hamburger', count: 0, price: 0},
    {name: 'Cheeseburger', count: 0, price: 0},
    {name: 'Fries', count: 0, price: 0},
    {name: 'Coffee', count: 0, price: 0},
    {name: 'Tea', count: 0, price: 0},
    {name: 'Cola', count: 0, price: 0},
  ]);

  const [orderListDisplay, setOrderListDisplay] = useState<boolean>(false);

  const orderAddition = (productItem: IPRODUCTS, index: number) => {
    const copyProducts = [...products];
    const copyProduct = copyProducts[index];

    if (copyProduct.name === productItem.name) {
      copyProduct.count++;
      copyProduct.price = fastFoodProducts[index].price * copyProduct.count;
      setOrderListDisplay(true);
      copyProducts[index] = copyProduct;
      setProducts(copyProducts);
    }
  };

  const deleteProduct = (index: number) => {
    const copyProducts = [...products];
    const copyProduct = copyProducts[index];
    copyProduct.count--;
    if (copyProduct.price > fastFoodProducts[index].price) {
      copyProduct.price = copyProduct.price - fastFoodProducts[index].price;
      copyProducts[index] = copyProduct;
    }
    setProducts(copyProducts);
  };

  return (
    <>
      <div>
        <div>
          <h2>Order Details</h2>
          {orderListDisplay ?
            products.map((product, index) => {
              if (product.count) {
                return (
                  <OrderList
                    product={product}
                    index={index}
                    deleteProduct={() => deleteProduct(index)} />
                );
              }
            })


            : <div>Order is empty! Please add some item</div>
          }
        </div>

        <div>
          <h2>Add items</h2>
          {fastFoodProducts.map((productItem, index) => (
            < ProductBtn
              key={index}
              product={productItem}
              orderAddition={() => orderAddition(productItem, index)}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
