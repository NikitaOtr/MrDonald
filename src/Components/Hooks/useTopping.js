import { useState } from 'react';

const getTopping = toppings => toppings.map(item => ({
    name: item,
    checked: false,
}));

export const useTopping = openItem => {
    const readyTopping = openItem.toppings ?? [];
    const [toppings, setTopping] = useState(getTopping(readyTopping));

    const checkToppings = index => {
        setTopping(toppings.map((item, i) => {
            if (index === i) { item.checked = !item.checked; }
            return item;
        }));
    };

    return { toppings, checkToppings };
};