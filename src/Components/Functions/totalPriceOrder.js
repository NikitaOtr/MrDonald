import { totalPriceItem } from "./totalPriceItem";

export const totalPriceOrder = order => order.reduce((sum, item) => sum + totalPriceItem(item), 0);