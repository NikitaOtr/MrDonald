export const totalPriceItem = ({ price, count, toppings }) => {
    const priceTopping = 25;
    const countToppings = toppings?.filter(item => item.checked).length ?? 0;
    return (price + (priceTopping * countToppings)) * count;
};
