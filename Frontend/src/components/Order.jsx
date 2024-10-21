import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import order_img from "../assets/order_img.png";
import './Order.css';
import omlet from "../assets/omlet.png";
import pancakes from "../assets/pancakes.png";
import pizza from "../assets/Pizza.png";
import pasta from "../assets/pasta.png";
import spaghetti from "../assets/spaghetti.png";
import wrap from "../assets/wrap.png";
import Chickensalad from "../assets/Chicken salad.png"
import grilledchicken from "../assets/grilled chicken.png";
import sandwich from "../assets/sandwich1.png"
import avocado from "../assets/avocado.png"
import salad from "../assets/salad.png"
import soup from "../assets/soup.png"
import tacos from "../assets/tacos.png"
import buritto from "../assets/buritto.png"
import bruschetta from "../assets/bruschetta.png"
import garlicbread from "../assets/garlic bread.png"
import friedrice from "../assets/fried rice.png"
import thaicurry from "../assets/thai curry.png"
import smoothie from "../assets/smoothie.png"
import hotcoffee from "../assets/hot coffee.png"
import milkshake from "../assets/milkshake.png"
import mojito from "../assets/mojito.png"
import juice from "../assets/juice.png"
import coldcoffee from "../assets/cold coffee.png"
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const handleOrderNow = async () => {
        const userData = localStorage.getItem('userdata');
        if (!userData) {
            navigate('/login');
        } else {
            const user = JSON.parse(userData);
            const orderData = {
                userId: user._id,
                items: cart.map(item => ({
                    itemid: item.id, // Item ID
                    title: item.title, // Include title
                    price: item.price, // Include price
                    quantity: item.quantity // Quantity
                }))
            };
    
            try {
                const response = await fetch('http://localhost:8800/api/order/placeOrder', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(orderData),
                });
    
                const result = await response.json();
                if (response.ok) {
                    alert('Order placed successfully!');
                    setCart([]); // Clear the cart
                } else {
                    alert(`Error: ${result.message}`);
                }
            } catch (error) {
                console.error('Error placing order:', error);
                alert('An error occurred while placing the order.');
            }
        }
    };
    
    

    const menuItems = {
        breakfast: [
            { id: 1, title: 'Pancakes', price: 199, description: 'Fluffy pancakes with maple syrup', image: pancakes },
            { id: 2, title: 'Classic Omelette', price: 199, description: 'Cheese and ham omelette with tomatoes', image: omlet },
            { id: 3, title: 'Sandwich', price: 249, description: 'Grilled sandwich with cheese', image: sandwich },
            { id: 4, title: 'Avocado Toast', price: 299, description: 'Toasted bread with avocado spread', image: avocado },
            { id: 5, title: 'Salad', price: 199, description: 'Crisp greens with fresh veggies', image: salad },
            { id: 6, title: 'Soup', price: 149, description: 'Rich tomato soup with a hint of basil', image: soup }  
        ],
        lunch: [
            { id: 7, title: 'Pizza', price: 299, description: 'Cheesy pizza with olive and vegetables', image: pizza },
            { id: 8, title: 'Pasta', price: 249, description: 'Italian dish featuring tender pasta', image: pasta },
            { id: 9, title: 'Spaghetti Bolognese', price: 349, description: 'Classic spaghetti with rich meat sauce', image: spaghetti },
            { id: 10, title: 'Grilled Chicken', price: 499, description: 'Juicy grilled chicken with herbs and spices', image: grilledchicken },
            { id: 11, title: 'Chicken Salad', price: 299, description: 'Fresh salad with grilled chicken, veggies', image: Chickensalad },
            { id: 12, title: 'Chicken Wraps', price: 399, description: 'Soft tortilla wraps with veggies', image: wrap },

        ],
        dinner: [
            { id: 13, title: 'Tacos', price: 299, description: 'Crispy tacos filled with seasoned veggies', image: tacos },
            { id: 14, title: 'Burrito', price: 349, description: 'Soft tortilla wrap stuffed with beans, meat, and rice', image: buritto },
            { id: 15, title: 'Bruschetta', price: 199, description: 'Toasted bread topped with fresh tomatoes', image: bruschetta },
            { id: 16, title: 'Thai Curry', price: 399, description: 'Spicy and flavorful Thai curry with cream', image: thaicurry },
            { id: 17, title: 'Garlic Bread', price: 149, description: 'Crispy garlic bread with a buttery herb topping', image: garlicbread },
            { id: 18, title: 'Fried Rice', price: 249, description: 'Stir-fried rice with veggies and choice of protein', image: friedrice },

            
        ],
        drinks: [
            { id: 19, title: 'Smoothies', price: 299, description: 'Refreshing smoothies made with fresh fruits', image: smoothie },
            { id: 20, title: 'Hot Coffee', price: 149, description: 'Rich and aromatic hot coffee', image: hotcoffee },
            { id: 21, title: 'Milkshakes', price: 249, description: 'Creamy milkshakes available in various flavors', image: milkshake },
            { id: 22, title: 'Mojitos', price: 299, description: 'Refreshing mojitos with mint and lime', image: mojito },
            { id: 23, title: 'Fruit Juices', price: 199, description: 'Natural fruit juices packed with vitamins', image: juice },
            { id: 24, title: 'Cold Coffee', price: 179, description: 'Chilled coffee blend for a cool, invigorating treat', image: coldcoffee },

        ],
    };

    const addToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCart(cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            ));
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    const updateQuantity = (itemId, change) => {
        setCart(cart.map(item => {
            if (item.id === itemId) {
                const newQuantity = item.quantity + change;
                return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
            }
            return item;
        }).filter(Boolean));
    };

    return (
        <div>
            <Navbar />
            <img className="order_bg" src={order_img} alt="Order background" />
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
                                {cart.map((item) => (
                                    <li key={item.id}>
                                        {item.title} - {item.quantity}
                                        <div className="button-container">
                                            <button className="icon-btn" onClick={() => updateQuantity(item.id, -1)}>−</button>
                                            <button className="icon-btn" onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            <button className="remove-btn" onClick={() => removeFromCart(item.id)}>✖</button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <p>Total: Rs.{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
                        <button className='order_button' onClick={handleOrderNow}>Order Now</button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="right-section">
                    {Object.entries(menuItems).map(([category, items]) => (
                        <div key={category} id={category}>
                            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                            <div className="card-grid">
                                {items.map((item) => (
                                    <div key={item.id} className="menu-card">
                                        <img className="item_image" src={item.image} alt={item.title} />
                                        <h3>{item.title}</h3>
                                        <p>Rs.{item.price}</p>
                                        <p>{item.description}</p>
                                        <button onClick={() => addToCart(item)}>Add</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Order;
