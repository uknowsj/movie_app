import React from "react"

const foodInfo =[
  {
    id : 1,
    name : "kimbap",
    img : "http://loremflickr.com/300/300"
  },
  {
    id : 2,
    name : "soondae",
    img : "http://loremflickr.com/300/300"
  },
  {
    id :3,
    name : "tteokbokki",
    img : "http://loremflickr.com/300/300"
  }
];

function Food({name,img}){
  return (
  <div>
    <h3>I love {name}</h3>
    <img src={img}></img>
  </div>
  )
}

function App() {
  return (
  <div className="App" >
    {foodInfo.map(dish =>
      <Food key={dish.id} name={dish.name} img={dish.img} />
    )}
  </div>
  );
}

export default App;
