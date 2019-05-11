import React from 'react';
import { Route,Switch } from 'react-router-dom'
import Login from '@/views/login'
function App() {
  return (
    <Switch>
      <Route path="/login" component= { Login }></Route>
    </Switch>
  );
}

export default App;
