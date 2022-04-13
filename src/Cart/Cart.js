import './cart.css'
const Cart = (props) => {
    let total = 0
    for (let item in props.info) {
        total += (props.info[item].price)
    }
    console.log(total)
    return(
        <div className='cart'>
            <h1>This is the cart!</h1>
            {props.info.map((item, index) => {
                return(
                    <div key={index} className="line-item">
                        <h5>{item.name}</h5>
                        <p>{item.price}</p>
                    </div>
                )
            })}
            <h4>Total: {total.toFixed(2)}</h4>
            
        </div>
    )
}

export default Cart