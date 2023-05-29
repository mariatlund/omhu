export type OrderInfoType = {
  total: number;
  items: {
    image?: string;
    productName: string;
    fabricColor: string;
    fabricHex: string;
    frameColor: string;
    frameHex: string;
    amount: number;
    price: number;
  }[];
};
