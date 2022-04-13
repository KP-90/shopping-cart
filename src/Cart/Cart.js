import { useEffect } from 'react'
import './cart.css'
const Cart = (props) => {
    let total = 0
    for (let item in props.info) {
        total += (props.info[item].price)
    }

    useEffect(() => {
        const handleDelete = (e) => {
            let name = e.path[1].firstChild.innerText
            props.setItems(props.info.filter(item => {
                return item.name !== name
            }))
        }

        const allBtns = document.querySelectorAll("button")
        allBtns.forEach(btn => {
            btn.addEventListener("click", handleDelete)
        })
        return() => {
            allBtns.forEach(btn => {
                btn.removeEventListener("click", handleDelete)
            })
        }
    })

    return(
        <div className='cart-contents'>
            <h1>This is the cart!</h1>
            {props.info.map((item, index) => {
                return(
                    <div key={index} className="line-item">
                        <h5>{item.name}</h5>
                        <p>${item.price}</p>
                        <button>Remove</button>
                    </div>
                )
            })}
            <h4>Total: ${total.toFixed(2)}</h4>
            
        </div>
    )
}

export default Cart