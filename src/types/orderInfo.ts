export type OrderInfoType = {
  total: number;
  items: Array<{
    image: string;
    productName: string;
    fabricColor: string;
    fabricHex: string;
    frameColour: string;
    frameHex: string;
    amount: number;
    price: number;
  }>;
};
