export const totalPriceDish = ({ price: priceDish, count: countDish, toppings }) => {
    const priceOfTopping = 25;
    const countToppings = toppings.filter(item => item.checked).length;
    return (priceDish + (priceOfTopping * countToppings)) * countDish;
};
