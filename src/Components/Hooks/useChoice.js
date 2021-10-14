import { useState } from 'react';

export const useChoice = () => {
    const [choice, setChoice] = useState();

    const changeChoice = event => {
        setChoice(event.target.value);
    };

    return { choice, changeChoice };
};
