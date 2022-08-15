import {
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import Chapter from "./components/chapters/Chapter";
function App() {
  return (
    <div>
      <Chapter/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React with me
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
