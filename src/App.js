import React from 'react';
import Books from "./books/index";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Description from './books/Book';
const App=()=>{
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Books} />
      <Route path="/description/:id"  exact component={Description}  />
    </Switch>
    </BrowserRouter>
 
  )
}
export default App;