import { useEffect } from 'react';
import {inventory} from '../inventory';
import Card from './Card';

const Home = (props) => {

    useEffect(() => {
        const handleClick = (e) => {
          console.log("clcick")
          let name = e.path[1].firstChild.innerText
          let x = inventory.find(item => item.name === name)
          props.setItems(props.items.concat(x))
        }
        const allBtns = document.querySelectorAll("button")
        allBtns.forEach(btn => {
          btn.addEventListener("click", handleClick)
        })
        return() => {
          allBtns.forEach(btn => {
            btn.removeEventListener("click", handleClick)
          })
        }
    
      })

    return(
        <div className='homepage'>
            <h1>Homepage</h1>
            <div className='container'>
                {inventory.map(item => {
                    return <Card key={item.name} info={item} />
                })}
            </div>
            
        </div>
    )
}

export default Home