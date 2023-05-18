import { Meta, StoryObj } from "@storybook/react";
import FeaturedSection from "./FeaturedSection";

type Story = StoryObj<typeof FeaturedSection>;

export default {
  component: FeaturedSection,
} satisfies Meta<typeof FeaturedSection>;

export const Blue: Story = {
  args: {
    bgColour: "blue",
    image: {
      imageSrc: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff",
      imageWidth: 868,
      imageHeight: 650,
    },
    title: "Meet OMHU",
    description: "Curious about who OMHU is? Come meet Jonas and Frederik and read about how they went from selling vintage decor from a tiny basement to creating their own furniture company.",
    buttonLabel: "Read more",
    buttonLink: "/about",
  },
};

export const White: Story = {
  args: {
    bgColour: "white",
    image: {
      imageSrc: "https://images.unsplash.com/photo-1618220179428-22790b461013",
      imageWidth: 529,
      imageHeight: 940,
    },
    title: "Showroom",
    description: "Come meet us at one of our showrooms in Denmark and experience our furniture first hand. Here you can find colour and fabric samples and find the right fit for you. Ready for a TEDDY bear hug?",
    buttonLabel: "Book a time",
    buttonLink: "/showroom",
  },
};
