import React,{Component} from 'react';
import logo from './logo.svg';
import {Button, message} from 'antd'
import './App.css';


export default class App extends Component {
  handleClick = () => {
    message.success('成功了！')
  }
  render() {
    return <Button type="primary" onClick={this.handleClick}>Primary</Button>
  }
}