import logo from './logo.svg';
import './App.css';
import Router from './config/router'

function App() {
  console.log('From the Laptop of Muhammad Mukarram Asad.')
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <h1>Header</h1>
        <Router />
        <h1>Footer</h1>
      {/* </header> */}
    </div>
  );
}

export default App;
