import React from 'react';
import { Route,Switch } from 'react-router-dom'
import Login from '@/views/login'
import Home from '@/views/home'
function App() {
  return (
    <Switch>
      <Route path="/login" component= { Login }></Route>
      <Route path="/home" component= { Home }></Route>
    </Switch>
  );
}

export default App;
