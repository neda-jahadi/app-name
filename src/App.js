import React, {useState} from 'react';
import './App.css';
import Space from './components/Space';
import Fruits from './components/Fruits';
import Effect from './components/Effect';
import Family from './components/Family';
import Tabs from './components/Tabs';
import Bordered from './components/bordered';
import Clock from './components/Clock';
function App() {
  //eventuella kontanter

  const fruktList =[
    {name:'äpple', nr:1},
    {name:'apelsin',nr:2}, 
    {name:'banan',nr:3}, 
    {name:'melon',nr:4}
  ];
  //för att göra en komponent synligt eller osynlight
  const [showClock,setShowClock] = useState(true);
  let maybeClock = null;
  if(showClock){ maybeClock = <Clock />}
   


  const list = ['neda', 'farhad', 'mehrsa'];
  const flikList = ['flik1', 'flik2', 'flik3', 'flik4'];
  const bilList =[
    {name:'Benz',price: 20000},
    {name:'Peikan',price: 30000},
    {name:'Neisan',price: 1000000}
  ];

  //State variabler
  const [selectedPlanet, setPlanet] = useState('Pluto');
  const [selectedPrice, setPrice] = useState(1500000);

  //eventuella funktioner
  const setPlanetJupiter = () =>{setPlanet('Jupiter') ; setPrice(5000000);}
  
  const jsxFruitList = fruktList.map(fruit=><li key={fruit.name}>Fruit is:{fruit.name} with number {fruit.nr}</li>)
  
  const  elements=list.map(item => <li key={item}> {item} </li>);
  const jsxBilList = bilList.map(bil=><li key={bil.name}>{bil.name}</li>);

  //retunera jsx
  return (
    <div className="App">
      <header className="App-header">
        <h1>React in Space</h1>
      </header>
      <main>
        <h2>Where do you want to go?</h2>
        <div>
          <button onClick={setPlanetJupiter}>Jupiter</button>
          <button onClick={() =>{setPlanet('Mars'); setPrice(6000000);}}>Mars</button>
          <button onClick={()=>{setPlanet('Pluto'); setPrice(1500000);}}>Pluto</button>
        </div>
        <Space planet={selectedPlanet} cost={selectedPrice} />
        <div className="fruits">
          
          <Fruits jsxFruitList={jsxFruitList} />
          
        </div>
        <div>
          <Family elements={elements} />
        </div>
        <h2>Effect Demo</h2>
        <Effect />

        <h2>props.children demo</h2>
        <Tabs headers={flikList}>
          <div>Content1</div>
          <div>Content2</div>
          <div>Content3</div>
          <div>Content4</div>
        </Tabs>
        
        <Bordered bilHeader={['first car','second car','third car']}>
          {jsxBilList}
        </Bordered>
        <div className="clock">
          <button onClick={()=>setShowClock(!showClock)}>Toggle Clock!</button>
          {maybeClock}
        </div>
          
        
        
        
      </main>
       
        
      
    </div>
  );
}

export default App;
