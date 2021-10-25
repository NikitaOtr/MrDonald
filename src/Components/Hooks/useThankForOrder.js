import { useState } from 'react';

export const useThankForOrder = () => {
    const [thankForOrder, setThankForOrder] = useState(false);

    return { thankForOrder, setThankForOrder };
};