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

const RadioButtonExample = () => {
  const [selectedOption, setSelectedOption] = useState<String>('');
  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h2>Pilih warna favorit</h2>
      <div>
        <label >
          <input type="radio" name='favColor' value={'merah'} checked={selectedOption === 'merah'} onChange={handleOptionChange} />
          Merah
        </label>
      </div>
      <div>
        <label >
          <input type="radio" name='favColor' value={'biru'} checked={selectedOption === 'biru'} onChange={handleOptionChange} />
          Biru
        </label>
      </div>
      <div>
        <label >
          <input type="radio" name='favColor' value={'hijau'} checked={selectedOption === 'hijau'} onChange={handleOptionChange} />
          Hijau
        </label>
      </div>
      <p>Pilihan Anda: {selectedOption}</p>
    </div>
  )
}

const CheckboxExample = () => {
  const [checkedItems, setCheckedItems] = useState({
    jeruk: false,
    apel: false,
    mangga: false,
  });

  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked })
  }

  return (
    <div>
      <h2>Pilih Buah favorit!</h2>
      <div>
        <label>
          <input type="checkbox" name='jeruk' checked={checkedItems.jeruk} onChange={handleCheckboxChange} />
          Jeruk
        </label>
        <label>
          <input type="checkbox" name='apel' checked={checkedItems.apel} onChange={handleCheckboxChange} />
          Apel
        </label>
        <label>
          <input type="checkbox" name='mangga' checked={checkedItems.mangga} onChange={handleCheckboxChange} />
          Mangga
        </label>
      </div>
      <h3>Buah yang dipilih:</h3>
      <ul>
        {Object.keys(checkedItems)
          .filter((key) => checkedItems[key as keyof typeof checkedItems])
          .map((key) => (
            <li key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</li>
          ))}
      </ul>
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
        <RadioButtonExample />
        <CheckboxExample />
      </header>
    </div>
  );
}

export default App;
