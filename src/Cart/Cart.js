import { useEffect } from 'react'
import { inventory } from '../inventory'
import './cart.css'
const Cart = (props) => {
    let total = 0
    for (let item in props.info) {
        total += (props.info[item].price)
    }

    useEffect(() => {
        const handlePlus = (e) => {
            let name = e.path[1].firstChild.className
            let x = inventory.find(item => item.name === name)
            props.setItems(props.info.concat(x))
        }

        const handleMinus = (e) => {
            let copy = props.info
            let name = e.path[1].firstChild.className
            let removal = props.info.find(i => {
                return i.name === name
            })
            copy.splice(copy.indexOf(removal), 1)
            props.setItems([].concat(copy))
        }

        const allPlus = document.querySelectorAll(".plus")
        allPlus.forEach(btn => {
            btn.addEventListener("click", handlePlus)
        })
        const allMinus = document.querySelectorAll(".minus")
        allMinus.forEach(btn => {
            btn.addEventListener("click", handleMinus)
        })
        return() => {
            allPlus.forEach(btn => {
                btn.removeEventListener("click", handlePlus)
            })
            allMinus.forEach(btn => {
                btn.removeEventListener("click", handleMinus)
            })
        }
    })

    // Counting how many of each line item. Gets array of unique items, and counts how many times each item appears in original array
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
    }
    // sorting it so it displays correctly
    let sorted = (props.info.filter(unique))
    sorted.sort((a, b) => {
        if (a.name > b.name) return 1
        if (a.name < b.name) return -1
        return 0;
    })
    let counts = []
    for (let i in sorted) {
        let count = 0
        for (let j in props.info) {
            if(sorted[i].name === props.info[j].name) {
                count += 1
            }
        }
        counts.push(count)
    }
    // End counting line items

    return(
        <div className='cart-contents'>
            <h1>This is the cart!</h1>
            {sorted.map((item, index) => {
                return(
                    <div key={index} className="line-item">
                        <h5 className={item.name}>{item.name} x{counts[index]}</h5>
                        <p>${(item.price * counts[index]).toFixed(2)}</p>
                        <button className='minus'> - 1 </button>
                        <button className='plus'> + 1 </button>
                    </div>
                )
            })}
            <h4>Total: ${total.toFixed(2)}</h4>
            
        </div>
    )
}

export default Cart