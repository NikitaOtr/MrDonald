import { useState } from 'react';

export function useCountDish() {
    const [countDish, setCountDish] = useState(1);

    const onChangeCountDish = event => {
        let count = +event.target.value;
        // eslint-disable-next-line brace-style
        if (count < 1) { count = 1; }
        else if (count > 99) { count = 99; }
        setCountDish(count);
    };

    return { countDish, setCountDish, onChangeCountDish };
}