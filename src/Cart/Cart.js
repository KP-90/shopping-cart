import { useEffect } from 'react'
import './cart.css'
const Cart = (props) => {
    let total = 0
    for (let item in props.info) {
        total += (props.info[item].price)
    }
    
    // Counting line items
    
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    let sorted = props.info.filter(unique)
    let counts = []
    for (let i in sorted) {
        let count = 0
        for (let j in props.info) {
            if(sorted[i].name == props.info[j].name) {
                count += 1
            }
        }
        counts.push(count)
    }
    // End counting line items

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
            {sorted.map((item, index) => {
                return(
                    <div key={index} className="line-item">
                        <h5>{item.name} x{counts[index]}</h5>
                        <p>${item.price * counts[index]}</p>
                        <button>Remove</button>
                    </div>
                )
            })}
            <h4>Total: ${total.toFixed(2)}</h4>
            
        </div>
    )
}

export default Cart