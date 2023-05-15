import { Meta, StoryObj } from "@storybook/react";
import ProductCard from "../ProductCard/ProductCard";

type Story = StoryObj<typeof ProductCard>;

export default {
  component: ProductCard,
} as Meta<typeof ProductCard>;

export const Default: Story = {
  args: {
    productName: "Teddy",
    price: 1200,
    productImage: "https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg",
    newlyAdded: true,
    colors: ["#000000", "#dddddd", "#ff0000", "#00ff00", "#0000ff", "#0000ff", "#00ff00", "#0000ff", "#0000ff", "#dddddd", "#ff0000", "#00ff00", "#0000ff", "#0000ff", "#00ff00"],
  },
};
