import { useState } from 'react';
import './App.css'


function Mybutton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function Aboutpage() {
  return (
    <>
      <h1>
        About
      </h1>
      <p>Hello there.<br />How do you do? </p>
    </>
  )
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

export default function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
    alert('You clicked me!');
  }

  return (
    <div>
      <h1>
        Welcome to my app
      </h1>
      <Aboutpage />
      <div>
        <Profile />
      </div>
      <Mybutton count={count} onClick={handleClick} />
      <Mybutton count={count} onClick={handleClick} />
      <div><ShoppingList /></div>
    </div>
  );
}

