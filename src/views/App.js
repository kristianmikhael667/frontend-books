import MainRouter from "../router/MainRouter";
import "./../static/css/App.css";
import React from "react";

class App extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "js/main.min.js";
    script.src = "js/date-time.js";
    script.src = "js/script.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();

    document.body.appendChild(script);
  }
  render() {
    return (
      <div class="theme-layout">
        <MainRouter />
      </div>
    );
  }
}

export default App;
