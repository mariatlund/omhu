import { Meta, StoryObj } from "@storybook/react";
import ImageCarousel from "./ImageCarousel";
import measurements from "../../assets/mesurments_teddyFolded.svg";

type Story = StoryObj<typeof ImageCarousel>;

export default {
  component: ImageCarousel,
} as Meta<typeof ImageCarousel>;

export const Default: Story = {
  args: {
    images: [
      {
        imageSrc: "https://images.unsplash.com/photo-1567016432779-094069958ea5",
        imageWidth: 900,
        imageHeight: 900,
        alt: "Sofa",
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1615800001964-5afd0ae8e49a",
        imageWidth: 852,
        imageHeight: 1279,
        alt: "Sofa",
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
        imageWidth: 946,
        imageHeight: 630,
        alt: "Sofa",
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1567016507665-356928ac6679",
        imageWidth: 946,
        imageHeight: 946,
        alt: "Sofa",
      },
      {
        imageSrc: "https://images.unsplash.com/photo-1569813017258-b9bbf395b008",
        imageWidth: 946,
        imageHeight: 1261,
        alt: "Sofa",
      },
    ],
  },
};
