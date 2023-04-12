import React, { useState } from 'react'
import ColorBlock from './components/ColorBlock';
import ColorForm from './components/ColorForm';
import './App.css';

const DEFAULT_COLOR = [
  'red',
  'yellow',
  'blue',
  'violet',
  'magenta',
  'teal',
  'greenyellow',
  'lightblue'
]

function App() {
 let [colors, setColors] = useState(DEFAULT_COLOR);

  const addToColors = newColor => {
    setColors([...colors,newColor])
  }

  let colorMap = colors.map((colorString, index) => {
    return <ColorBlock color = {colorString} key={index}/>
  })

  return (
    <div className="App">
      { colorMap }
      <ColorForm addToColors={addToColors} />
    </div>
  );
    
}

export default App;
