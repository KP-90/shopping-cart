import {FaRegWindowClose} from 'react-icons/fa'
import './card.css'
const Card = (props) => {
    let element = undefined
    if (props.info.icon) {
        element = props.info.icon
    }
    else {
        element = <FaRegWindowClose />
    }
    return(
        <div key={props.name} className="card">
            <h3>{props.info.name}</h3>
            <p>${props.info.price}</p>
            <span className='icon'>{element}</span>
            <button >Add</button>
        </div>
    )
}

export default Card