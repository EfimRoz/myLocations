import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Category from "./js/components/category"
import { Provider } from "react-redux";
import CrudBar from "./js/components/toolbars/CrudBar"
import Home from "./js/components/App"
import store from "./js/store/index";
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <Provider store={store}>
        <div>
          <CrudBar />
          <Route  path="/" component={Home} />
          <Route path="/about" component={Category} />
          {/* <Route path="/topics" component={Topics} /> */}
        </div>
      </Provider>
    </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
