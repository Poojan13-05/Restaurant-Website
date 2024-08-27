import React, { useState } from 'react'
import omlet from "../assets/omlet.png"
import sandwich from "../assets/sandwich.png"
import pancakes from "../assets/pancakes.png"
import avocado from "../assets/avocado.png"
import salad from "../assets/salad.png"
import soup from "../assets/soup.png"
import Chickensalad from "../assets/Chicken salad.png"
import grilledchicken from "../assets/grilled chicken.png"
import pizza from "../assets/Pizza.png"
import pasta from "../assets/pasta.png"
import spaghetti from "../assets/spaghetti.png"
import wrap from "../assets/wrap.png"

import "./Menu.css"
const Menu = () => {
    const [selectedCategory, setSelectedCategory] = useState("Breakfast");
    const dishes = {
        Breakfast: [
            { name: "Classic Omlet", img: omlet },
            { name: "Sandwich", img: sandwich },
            { name: "Pancakes", img: pancakes },
            { name: "Avocado", img: avocado },
            { name: "Salad", img: salad },
            { name: "Soup", img: soup }

        ],
        Lunch: [
            { name: "Chicken salad", img: Chickensalad },
            { name: "Grilled chicken", img: grilledchicken },
            { name: "Pizza", img: pizza },
            { name: "Pasta", img: pasta },
            { name: "Spaghetti", img:spaghetti },
            { name: "Wrap", img: wrap }

        ]
    }
    return (
        <div>
            <div className='nav_menu'>
                {["Breakfast", "Lunch", "Dinner", "Drinks"].map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={selectedCategory === category ? "active" : ""}
                    >
                        {category}
                    </button>
                ))

                }

            </div>
            <div className='menu_items'>
                <h2>Menu</h2>
                <div className='menu_grid'>
                    {dishes[selectedCategory].map((dish, index) => (
                        <div key={index} className='menu_dish'>
                            <img src={dish.img} alt={dish.name} />
                            <p>{dish.name}</p>
                        </div>
                    ))

                    }

                </div>

            </div>
        </div>
    );
};

export default Menu