import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import logo from "./logo.svg";
import "./App.css";
import Posts from "./components/posts";
import PostForm from "./components/postForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
