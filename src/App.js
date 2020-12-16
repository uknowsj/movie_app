import React from "react";
import {HashRouter,Route} from "react-router-dom"
import Home from "./routes/Home";
import About from "./routes/About";
import Navigator from "./components/Navigator";
import Detail from "./components/Detail";

// import {About as Potato} from "./routes/About";


function App(){
  return (
      <HashRouter>
        <Navigator />
        <Route path="/" exact={true} component={Home} />     
        <Route path="/about" component={About}/>
        <Route path="/movie/:id" component={Detail}/>
      </HashRouter>
  );
}

export default App
