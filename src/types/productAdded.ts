//create type for productAdded
export type ProductAdded = {
  image: string;
  name: string;
  chosenFabricColor: string;
  fabricHex?: string;
  chosenMetalColor?: string;
  metalHex?: string;
  price: number;
  quantity: number;
};
