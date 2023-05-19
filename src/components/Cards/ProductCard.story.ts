import { Meta, StoryObj } from "@storybook/react";
import ProductCard from "../Cards/ProductCard";

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
    colors: {
      brown: {
        label: "Brown",
        value: "765",
        hexCode: "#60342C",
        images: ["https://amorea.dk/exam/finalExam/ProductPictures/corner/brown.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_closeup.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_full.jpg"],
      },
      cream_white: {
        label: "Cream White",
        value: "765",
        hexCode: "#EEE6E4",
        images: [
          "https://amorea.dk/exam/finalExam/ProductPictures/corner/cream_white.jpg",
          "https://amorea.dk/exam/finalExam/ProductPictures/corner/cream_white_closeup.jpg",
          "https://amorea.dk/exam/finalExam/ProductPictures/corner/cream_white_full.jpg",
        ],
      },
    },
  },
};
