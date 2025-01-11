// import { useState } from "react";
import foodImg from './assets/food.png';
import drinkImg from './assets/drink.png';
import { IProducts } from './types';
import ProductBtn from './components/ProductBtn/ProductBtn';
import './App.css';


const fastFoodProducts: IProducts[] = [
  {name: 'Hamburger', price: 80, image: foodImg},
  {name: 'Cheeseburger', price: 90, image: foodImg},
  {name: 'Fries', price: 45, image: foodImg},
  {name: 'Coffee', price: 70, image: drinkImg},
  {name: 'Tea', price: 50, image: drinkImg},
  {name: 'Cola', price: 40, image: drinkImg},
];

const App = () => {

  // const [products, setProducts] = useState([
  //   {name: 'Hamburger', count: 0},
  //   {name: 'Cheeseburger', count: 0},
  //   {name: 'Fries', count: 0},
  //   {name: 'Coffee', count: 0},
  //   {name: 'Tea', count: 0},
  //   {name: 'Cola', count: 0},
  // ]);

  const orderAddition = (product: IProducts) => {
    console.log(product);
  };

  return (
    <>
      {fastFoodProducts.map((product, index) => {
        return (
          < ProductBtn
            key={index}
            product={product}
            orderAddition={() => orderAddition(product)}/>
          );
      })}
    </>
  );
};

export default App;
