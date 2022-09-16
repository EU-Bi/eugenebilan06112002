import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { LeftPanel } from './components/leftPanel';
import { RightPanel } from './components/rightPanel';
import { MainBody } from './components/mainBody';
import { Footer } from './components/footer';
import { useState } from 'react';
import cat from './img/cats.jpg'
import chubacka from './img/chubaka.jpg'
import dogs from './img/dogs.jpg'
import dyno from './img/dyno.jpg'
import planet from './img/planets.jpg'



const photos=[
  {1:cat},
  {2:chubacka},
  {3:dogs},
  {4:dyno},
  {5:planet}
]


const shufflArr=(arr)=>{
  let shuffled = photos
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    return shuffled
}

function App() {
  const [arr, setArr]=useState(photos)
  
  
  return (
    
    <div className="App">
      
      <Header obj={arr[0]}/>
      <div style={{display:'flex',flexDirection:'row', position:'relative'}}>
        <LeftPanel obj={arr[1]}/>
        <RightPanel obj={arr[2]}/>
        <button style={{position:'absolute', top:'50%', left:'50%' }} onClick={()=>{
          setArr(shufflArr(arr))
          console.log(arr)
        }}>Click</button>
        <MainBody obj={arr[3]}/>
      </div>
      
      <Footer obj={arr[4]}/>
    </div>
  );
}

export default App;
