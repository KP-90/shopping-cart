import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link, Outlet} from 'react-router-dom'
import './App.css';

function App() {
  const style = {fontSize: "2.5em", float: "right"}
  return (
    <div className="App">
      <div className='banner'>
        <h1>Store</h1>
        <AiOutlineShoppingCart style={style}/>
      </div>
      <div className='section'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="cart">Cart</Link></li>
          <li>Hello</li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
