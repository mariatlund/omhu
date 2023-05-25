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
      turquoise: {
        label: "Turquoise",
        value: "5771",
        hexCode: "#2C6B7E",
        images: ["https://amorea.dk/exam/finalExam/ProductPictures/corner/turquoise.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/turquoise_closeup.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/turquoise_full.jpg"],
      },
      green: {
        label: "Green",
        value: "768",
        hexCode: "#3D5648",
        images: ["https://amorea.dk/exam/finalExam/ProductPictures/corner/green.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/green_closeup.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/green_full.jpg"],
      },
      mustard_yellow: {
        label: "Mustard yellow",
        value: "5774",
        hexCode: "#C99136",
        images: ["https://amorea.dk/exam/finalExam/ProductPictures/corner/mustard.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/mustard_closeup.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/mustard_full.jpg"],
      },
      dark_orange: {
        label: "Dark orange",
        value: "769",
        hexCode: "#914525",
        images: ["https://amorea.dk/exam/finalExam/ProductPictures/corner/orange.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/orange_closeup.jpg", "https://amorea.dk/exam/finalExam/ProductPictures/corner/orange_full.jpg"],
      },
    },
  },
};
