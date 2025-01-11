import { useState } from 'react';
import foodImg from './assets/food.png';
import drinkImg from './assets/drink.png';
import { IPRODUCTS, IProducts } from './types';
import ProductBtn from './components/ProductBtn/ProductBtn';
import OrderList from './components/OrderList/OrderList';
import OrderPrice from './components/OrderPrice/OrderPrice';
import AlternativeText from './components/AlternativeText/AlternativeText';
import './App.css';

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

  const [totalPrice, setTotalPrice] = useState(0);

  const orderAddition = (productItem: IPRODUCTS, index: number) => {
    const copyProducts = [...products];
    const copyProduct = copyProducts[index];

    if (copyProduct.name === productItem.name) {
      copyProduct.count++;
      copyProduct.price = fastFoodProducts[index].price * copyProduct.count;
      copyProducts[index] = copyProduct;
      setProducts(copyProducts);

      setTotalPrice(prevState => prevState + fastFoodProducts[index].price);
    }
  };

  const deleteProduct = (index: number) => {
    const copyProducts = [...products];
    const copyProduct = copyProducts[index];

    if (copyProduct.count > 0) {
      copyProduct.count--;
      copyProduct.price = copyProduct.price - fastFoodProducts[index].price;
      copyProducts[index] = copyProduct;
      setTotalPrice(prevState => prevState - fastFoodProducts[index].price);
    }

    setProducts(copyProducts);
  };

  return (
    <>
      <div>
        <div>
          <h2>Order Details</h2>
          {totalPrice > 0 ?
            <div>
              {products.map((product, index) => {
                if (product.count) {
                  return (
                    <OrderList
                      key={index}
                      product={product}
                      index={index}
                      deleteProduct={() => deleteProduct(index)}/>
                  );
                }
              })}
              <OrderPrice totalPrice={totalPrice} />
            </div>
            : <AlternativeText text='Order is empty! Please add some item'/>
          }

        </div>

        <div>
          <h2>Add items</h2>
          {fastFoodProducts.map((productItem, index) => (
            < ProductBtn
              key={productItem.name}
              product={productItem}
              orderAddition={() => orderAddition(productItem, index)}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
