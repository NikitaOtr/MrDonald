import { totalPriceDish } from "./totalPriceDish";

export const totalPriceOrder = order => order.reduce((sum, dish) => sum + totalPriceDish(dish), 0);