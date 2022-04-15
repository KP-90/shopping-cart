import image1 from './burger.jpg'
import './about.css'

const About = () => {
    return(
        <div className='about'>
            <h2>About This Store</h2>
            <img src={image1} alt="burger"/>
            <article>
                <p>This is an about page just to add some extra routes to this project. This projects focus was to get some experience using React routes along
                    with Reacts useState, setState, and useEffect tools. 
                </p>
                <p>This is filler stuff. This Store was founded in 2022 as a minimilist store only serving the most basic of items. 
                    We have Burger, Fries, Drink, and Toy. Nothing more, nothing less.
                    Want something else like chicken? Fish? Go somewhere else.
                </p>
            </article>
        </div>
    )
}

export default About