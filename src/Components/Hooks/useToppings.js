import { useState } from 'react';

export const useToppings = (startToppings, selectedToppings) => {

    const getToppings = toppings => toppings.map(item => ({
        name: item,
        checked: false,
    }));

    const readyTopping = selectedToppings ?? getToppings(startToppings ?? []);
    const [toppings, setTopping] = useState(readyTopping);

    const checkTopping = index => {
        setTopping(toppings.map((item, i) => {
            if (index === i) { item.checked = !item.checked; }
            return item;
        }));
    };

    return { toppings, checkTopping };
};