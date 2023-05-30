import { ImagesType } from "./images";
import { ProductColors } from "./productColors";

export type singleProductType = {
  product_id: number;
  product_name: string;
  product_description: string;
  product_price: number;
  product_colors: ProductColors;
  product_bars_colors: ProductColors;
  product_material_information: string;
  product_newly_added: boolean;
  product_category: string;
  product_popularity: number;
  product_measument_link: ImagesType[];
  product_sizes: string;
  product_animation: ImagesType[];
};
