import React from 'react';

const Menu = () => {
    const menuItems = [
        { name: 'Classic Burger', description: 'A juicy beef patty with lettuce, tomato, and our special sauce.', price: '$8.99' },
        { name: 'Cheese Burger', description: 'A classic burger topped with melted cheese.', price: '$9.49' },
        { name: 'Bacon Burger', description: 'A delicious burger topped with crispy bacon.', price: '$10.49' },
        { name: 'Veggie Burger', description: 'A flavorful plant-based burger with fresh veggies.', price: '$7.99' },
        { name: 'BBQ Burger', description: 'A smoky BBQ sauce burger with onion rings.', price: '$10.99' },
    ];

    return (
        <div>
            <h1>Our Menu</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;