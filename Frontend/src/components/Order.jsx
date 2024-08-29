import React,{useState}from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import order_img from "../assets/order_img.png"
import './Order.css'; 
import omlet from "../assets/omlet.png"
import pancakes from "../assets/pancakes.png"
import pizza from "../assets/Pizza.png"
import pasta from "../assets/pasta.png"
import spaghetti from "../assets/spaghetti.png"
import wrap from "../assets/wrap.png"
import smoothie from "../assets/smoothie.png"
import hotcoffee from "../assets/hot coffee.png"


const Order = () => {
    const [cart, setCart] = useState([]);

    const menuItems = {
        breakfast: [
            { id: 1, title: 'Pancakes', price: 'Rs.199', description: 'Fluffy pancakes with syrup', image: pancakes },
            { id: 2, title: 'Classic Omelette', price: 'Rs.199', description: 'Cheese and ham omelette', image: omlet },
        ],
        lunch: [
            { id: 3, title: 'Pizza', description: 'Cheesy pizza with olive and vegetables', image: pizza },
            { id: 3, title: 'Pasta', description: 'Italian dish featuring tender pasta', image: pasta },
        ],
        dinner: [
            { id: 3, title: 'Spaghetti', description: 'Tossed in creamy sauce', image: pizza },
            { id: 3, title: 'Wrap', description: 'Combination of veggies', image: pasta },
        ],
        drinks: [
            { id: 3, title: 'Smoothie', description: 'Strawberry smoothie', image: pizza },
            { id: 3, title: 'Hot Coffee', description: 'Freshly brewed coffee', image: pasta },
        ],
    };

    const addToCart = (item) => {
        setCart([...cart, item]);
    };


    return (
        <div>
            <Navbar></Navbar>
            <img className="order_bg" src={order_img}></img>
            <div className="order-container">
                {/* Left Section */}
                <div className="left-section">
                    <div className="category-card">
                    <h2>Categories</h2>
                        <a href="#breakfast">Breakfast</a>
                        <a href="#lunch">Lunch</a>
                        <a href="#dinner">Dinner</a>
                        <a href="#drinks">Drinks</a>
                    </div>
                    <div className="cart-card">
                        <h2>Your Cart</h2>
                        {cart.length === 0 ? (
                            <p>No items added yet.</p>
                        ) : (
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index}>{item.title}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                {/* Right Section */}
                <div className="right-section">
                    {Object.keys(menuItems).map((category) => (
                        <div key={category} id={category}>
                            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                            <div className="card-grid">
                                {menuItems[category].map((item) => (
                                    <div key={item.id} className="menu-card">
                                        <img className="item_image" src={item.image} alt={item.title} />
                                        <h3>{item.title}</h3>
                                        <p>{item.price}</p>
                                        <p>{item.description}</p>
                                        <button onClick={() => addToCart(item)}>Add</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            <Footer></Footer>
        </div>

    )
}

export default Order