import logo from "./logo.jpg"
import './App.css';
import { getFullYear,getFooterCopy} from "./utils";

function App() {
  return (
    
     <>
     <div className="App-header">
      <img src={logo}/>
      <h1>
      School dashboard
      </h1>
    </div>
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label for="email">
          <input type="email" id="email" name="email"/>
        </label>
        <label for="password">your password ?</label>
        <input type="password" id="password" name="password"/>
        
        <button type="submit">OK</button>
      </div>
      <div className="App-footer" >
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
      </>
  );
}

export default App;