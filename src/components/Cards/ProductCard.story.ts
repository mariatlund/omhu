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
        images: [
          {
            alt: "Brown Corner Sofa",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Close Up",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_closeup.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Full Picture",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_full.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
        ],
      },
      cream_white: {
        label: "Cream White",
        value: "765",
        hexCode: "#EEE6E4",
        images: [
          {
            alt: "Brown Corner Sofa",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Close Up",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_closeup.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Full Picture",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_full.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
        ],
      },
      turquoise: {
        label: "Turquoise",
        value: "5771",
        hexCode: "#2C6B7E",
        images: [
          {
            alt: "Brown Corner Sofa",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Close Up",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_closeup.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Full Picture",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_full.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
        ],
      },
      green: {
        label: "Green",
        value: "768",
        hexCode: "#3D5648",
        images: [
          {
            alt: "Brown Corner Sofa",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Close Up",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_closeup.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Full Picture",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_full.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
        ],
      },
      mustard_yellow: {
        label: "Mustard yellow",
        value: "5774",
        hexCode: "#C99136",
        images: [
          {
            alt: "Brown Corner Sofa",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Close Up",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_closeup.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Full Picture",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_full.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
        ],
      },
      dark_orange: {
        label: "Dark orange",
        value: "769",
        hexCode: "#914525",
        images: [
          {
            alt: "Brown Corner Sofa",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Close Up",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_closeup.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
          {
            alt: "Brown Corner Sofa Full Picture",
            imageSrc: "https://amorea.dk/exam/finalExam/ProductPictures/corner/brown_full.jpg",
            imageWidth: 900,
            imageHeight: 900,
          },
        ],
      },
    },
  },
};
