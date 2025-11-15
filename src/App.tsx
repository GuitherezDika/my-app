import React, { useState } from 'react';
import './App.css';

interface MyComponentProps {
  name: string;
}
const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Paragraph Component</p>
    </div>
  )
}

const TextArrayList = () => {
  const [name, setName] = useState<string>('');
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [nameList, setNameList] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onValidateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    if (value.length < 5) {
      setError('Minimal 5 karakter!');
    } else {
      setError('')
    }
  }
  const handleTextName = () => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setNameList(prev => [...prev, name])
      setName('');
    }, 2000);
  }

  return (
    <div>
      <input type="text" value={name} onChange={onValidateInput} placeholder='aname' onFocus={() => {
        setIsFocused(true);
      }} onBlur={() => {
        setIsFocused(false);
      }}
        style={{
          border: "2px solid",
          borderColor: isFocused ? "blue" : "#ccc",
          padding: "8px",
          outline: 'none'
        }}
      />
      <button disabled={!!error} onClick={handleTextName}>Save</button>
      {error ? <p style={{ color: 'red', marginTop: 2, marginBottom: 12, fontSize: 12 }}>{error}</p> : null}
      {showLoading ? <div>
        <p>Loading....</p>
      </div> : <div>
        <ul>
          {nameList?.map((item, index) => {
            const className = item.length < 10 ? 'container' : 'mainContainer';
            return (
              <li key={index} className={className}>
                <h6 >{item}</h6>
              </li>
            )
          })}
        </ul>
      </div>}
      <p>{isFocused ? "Input on Focuse mode!" : "Input not focus!"}</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyComponent name='LEVEL 2' />
        <TextArrayList />
      </header>
    </div>
  );
}

export default App;
