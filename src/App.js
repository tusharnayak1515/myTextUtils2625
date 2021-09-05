import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';

import './App.css';
import TextForm from './text-utils/TextForm';
import About from './about/About';

function App() {

  const [mode,SetMode] = useState("light");

  const onModeChange = ()=> {
    if(mode === "dark") {
      document.body.style.backgroundColor = "white";
      SetMode("light");
    }
    else {
      document.body.style.backgroundColor = "rgb(4, 1, 44)";
      SetMode("dark");
    }
  }

  return (
    <Fragment>
      <Navbar mode={mode} onModeChange={onModeChange} />
      <Switch>
        <Route exact path='/'>
            <TextForm mode={mode} />
        </Route>

        <Route exact path='/about'>
            <About mode={mode} />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
