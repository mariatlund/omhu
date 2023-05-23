import { Meta, StoryObj } from "@storybook/react";
import HeroSection from "./HeroSection";

type Story = StoryObj<typeof HeroSection>;

export default {
  component: HeroSection,
} as Meta<typeof HeroSection>;

export const Default: Story = {
  args: {},
};
