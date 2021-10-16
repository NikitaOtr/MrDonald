import { useState } from 'react';

export function useCountItem(defoltCount = 1) {
    const [countItem, setCountItem] = useState(defoltCount);

    const changeCountItem = count => {
        // eslint-disable-next-line brace-style
        if (count < 1) { count = 1; }
        else if (count > 99) { count = 99; }
        setCountItem(count);
    };

    return { countItem, changeCountItem };
}