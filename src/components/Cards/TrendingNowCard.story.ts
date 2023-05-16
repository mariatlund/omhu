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
    src: "https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg",
  },
};

export const AsLink: Story = {
  args: {
    intent: "link",
    size: "large",
    href: "https://omhucph.com/",
    src: "https://omhucph.com/wp-content/uploads/2023/04/DSC_9254_MBS-5769-Cream-white_chrome_square-1.jpg",
    target: "_blank",
    label: "Teddy sofa",
  },
};
