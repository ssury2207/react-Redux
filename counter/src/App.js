import './App.css';
import { decrement, increment } from './redux';
import { connect, useDispatch, useSelector } from 'react-redux';

function App(props) {
  const count = useSelector(state => state.count)
  const dispatch= useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <p>{count}</p>
        <div style={{justifyContent:'space-around', alignItems:'center',flexDirection:'row', padding:10,margin:10 }}>
          <div style={{padding:10}}>
          <button onClick={()=> dispatch(increment())} >UP-VOTE</button>
          </div>
          <div style={{padding:10}}>
          <button onClick={()=> dispatch(decrement())} > DOWN-VOTE</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App ;

