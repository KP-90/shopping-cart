import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link, Outlet} from 'react-router-dom'
import './App.css';

const App = (props) => {
  const style = {fontSize: "2.5em"}
  
  
  
  return (
    <div className="App">
      <div className='banner'>
        <h1>Store</h1>
        <div >
          <Link to="cart" id='cart'>
            <AiOutlineShoppingCart style={style}/>
            <p>( {props.items.length} )</p>
          </Link>
        </div>
        
      </div>
      <div className='section'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="cart">Cart</Link></li>
          <li><Link to="about">About</Link></li>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
      
    </div>
  );
}

export default App;
