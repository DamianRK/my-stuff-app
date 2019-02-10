import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return <h2>App is Initialized</h2>;
  }
}

ReactDOM.render(<App />, document.querySelector("#react-application"));
