import React,{useState}from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import order_img from "../assets/order_img.png"
import './Order.css'; 




const Order = () => {
    const [cart, setCart] = useState([]);

    const menuItems = {
        breakfast: [
            { id: 1, title: 'Pancakes', description: 'Fluffy pancakes with syrup', image: '/images/pancakes.jpg' },
            { id: 2, title: 'Omelette', description: 'Cheese and ham omelette', image: '/images/omelette.jpg' },
        ],
        lunch: [
            { id: 3, title: 'Burger', description: 'Juicy beef burger', image: '/images/burger.jpg' },
        ],
        dinner: [
            { id: 4, title: 'Steak', description: 'Grilled steak with vegetables', image: '/images/steak.jpg' },
        ],
        drinks: [
            { id: 5, title: 'Coffee', description: 'Hot coffee', image: '/images/coffee.jpg' },
        ],
    };

    const addToCart = (item) => {
        setCart([...cart, item]);
    };


    return (
        <div>
            <Navbar></Navbar>
            <img src={order_img}></img>
            <div className="order-container">
                {/* Left Section */}
                <div className="left-section">
                    <div className="category-card">
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
                                        <img src={item.image} alt={item.title} />
                                        <h3>{item.title}</h3>
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