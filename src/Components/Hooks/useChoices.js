import { useState } from 'react';

export const useChoices = defolChoice => {
    const [choice, setChoice] = useState(defolChoice);

    const changeChoice = event => {
        const target = event.target;
        setChoice(target.value);
    };

    return { choice, changeChoice };
};
