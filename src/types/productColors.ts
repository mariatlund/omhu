import { ImagesType } from "./images";

//create a type as an array for product colors
export type ProductColors = {
  [color: string]: {
    label: string;
    value: string;
    hexCode: string;
    images?: ImagesType[];
  };
}[];
