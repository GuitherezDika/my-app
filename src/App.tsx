import React, { useState } from 'react';
import './App.css';

interface MyComponentProps {
  name: string;
}
const MyComponent: React.FC<MyComponentProps> = ({name}) => {
  return (
    <div>
      <h1>Hello World1 {name}!</h1>
      <p>Paragraph Component</p>
    </div>
  )
}

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(prevState => prevState + 1);
  };

  return (
    <div>
      <p>Count {count}</p>
      <button  onClick={increment} >Count Me</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <p>This is a paragraph</p>
        <MyComponent name='aaaa' />
        <Counter />
      </header>

    </div>
  );
}

export default App;
