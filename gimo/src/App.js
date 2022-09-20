import logo from './logo.svg';
import './App.css';

function App() {
  let count=0;
  function click(){
    count=count +1
    alert(count);
  }
  return (
    

    <div className="App">
      <div>{count}</div>
      <button onclick={click}>기모링</button>
    </div>
  );
}

export default App;
