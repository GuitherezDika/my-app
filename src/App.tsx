import React, { useState } from 'react';
import './App.css';

interface MyComponentProps {
  name: string;
}
const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
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
      <button onClick={increment} >Count Me</button>
    </div>
  )
}

const ChangeExample = () => {
  const [name, setName] = useState<string>('');

  return (
    <input
      type='text'
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder='Ketik Nama..'
    />
  )
}
const Latihan1 = () => {
  const [text, setText] = useState<string>('');

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p>Jumlah karakter: {text.length}</p>
      <button onClick={() => setText('')}> Clear</button>
    </div>
  )
}

const LatihanDropdown = () => {
  const [value, setValue] = useState<string>('');
  const fruits = ['apple', 'banana', 'orange', 'mango'];
  return (
    <div>
      <h3>Pilih Buah</h3>
      <select name="" id="" value={value} onChange={(e) => setValue(e.target.value)}>
        <option value="">--Pilih Buah--</option>
        {fruits.map((value, key) => (
          <option key={key} value={value}>{value}</option>
        ))}
      </select>
      <p>{value}</p>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent name='aaaa' />
        <Counter />
        <ChangeExample />
        <Latihan1 />
        <LatihanDropdown />
      </header>
    </div>
  );
}

export default App;
