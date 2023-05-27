import { ImagesType } from "./images";

export type ProductColors = {
  [color: string]: {
    label: string;
    value: string;
    hexCode: string;
    images?: ImagesType[];
  };
};
