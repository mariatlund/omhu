import { Meta, StoryObj } from "@storybook/react";
import TrendingNowCard from "../Cards/TrendingNowCard";

type Story = StoryObj<typeof TrendingNowCard>;

export default {
  component: TrendingNowCard,
} as Meta<typeof TrendingNowCard>;

export const AsImage: Story = {
  args: {
    intent: "image",
    size: "large",
    image: {
      imageSrc: "https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg",
      imageHeight: 973,
      imageWidth: 973,
    },
  },
};

export const AsLink: Story = {
  args: {
    intent: "link",
    size: "large",
    href: "https://omhucph.com/",
    image: {
      imageSrc: "https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg",
      imageHeight: 973,
      imageWidth: 973,
    },
    target: "_blank",
    label: "Teddy sofa",
  },
};
