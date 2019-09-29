import React,{Component} from 'react';
import admin from './pages/admin/Admin'
import Login from './pages/login/login'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import './App.css';



export default class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' Component={admin} exact ></Route>
          <Route path='/login' Component={Login}></Route>
        </Switch>
      </BrowserRouter>
    )
  }
}