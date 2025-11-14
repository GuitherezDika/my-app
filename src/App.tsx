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
  const [nameList, setNameList] = useState<string[]>([]);
  const handleTextName = () => {
    setNameList([...nameList, name.trim()]);
    setName('');
  }


  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='aname' />
      <button onClick={handleTextName}>Save</button>
      <ul>
        {nameList?.map((item, index) => {
          const className = item.length < 10 ? 'container' : 'mainContainer';

          return (
            <li key={index}>
              <h6 className={className} >{item}</h6>
            </li>
          )
        })}

      </ul>
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
