import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import { useEffect } from 'react';
import MenuApp from './app/modules/Menu/MenuApp';
import rutas from './route.config';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  useEffect(()=>{
    console.log(rutas);
  })
  
  return (
    <>
      <BrowserRouter>
        <MenuApp rutas={rutas}/>
        <div className="container">
          <Switch>
            {rutas.map(ruta =>
              <Route key={ruta.path} exact={ruta.exact} path={ruta.path}>
                <ruta.componente/>
              </Route>
            )}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
