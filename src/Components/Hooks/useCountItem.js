import { useState } from 'react';

export function useCountItem() {
    const [count, setCount] = useState(1);

    const onChange = event => {
        let count = +event.target.value;
        // eslint-disable-next-line brace-style
        if (count < 1) { count = 1; }
        else if (count > 99) { count = 99; }
        setCount(count);
    };

    return { count, setCount, onChange };
}