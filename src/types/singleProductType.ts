import { ProductColors } from "./productColors";

export type singleProductType = {
  id: number;
  productName: string;
  description: string;
  price: number;
  colors: ProductColors;
  frameColors: ProductColors;
  material: string;
  new: boolean;
  category: string;
  popularity: number;
  measurementsImage: string[];
  size: string;
};
