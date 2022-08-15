import {
  Routes,
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chapter from "./components/chapters/Chapter";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
function App() {
  return (
    <div>
      <Chapter/>
    </div>
  );
}

export default App;
