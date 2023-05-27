import { Meta, StoryObj } from "@storybook/react";
import AboutHero from "./AboutHero";

type Story = StoryObj<typeof AboutHero>;

export default {
  component: AboutHero,
} as Meta<typeof AboutHero>;

export const Default: Story = {
  args: {},
};
