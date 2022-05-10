import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css';
import Header from "./Components/Header/Header.js"
import ListSection from './Components/ListSection/ListSection';


function App() {
  return (
    <div className="App">
      <Header/>
      <ListSection/>
    </div>
  );
}

export default App;
