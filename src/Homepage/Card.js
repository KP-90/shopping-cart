const Card = (props) => {
    return(
        <div key={props.name} className="card">
            <h5>{props.info.name}</h5>
            <p>${props.info.price}</p>
            <button >Add</button>
        </div>
    )
}

export default Card