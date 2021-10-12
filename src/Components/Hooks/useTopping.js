import { useState } from 'react';

const getTopping = toppings => toppings?.map(item => ({
    name: item,
    checked: false,
}));


export const useTopping = openItem => {
    const [toppings, setTopping] = useState(getTopping(openItem.toppings));

    const checkToppings = index => {
        setTopping(toppings.map((item, i) => {
            if (index === i) {
                item.checked = !item.checked;
            }
            return item;
        }));
    };

    return { toppings, checkToppings };
};