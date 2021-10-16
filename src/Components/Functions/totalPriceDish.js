export const totalPriceDish = ({ price: priceDish, selectedCount: countDish, selectedToppings }) => {
    const priceOfTopping = 25;
    const countToppings = selectedToppings.filter(item => item.checked).length;
    return (priceDish + (priceOfTopping * countToppings)) * countDish;
};
