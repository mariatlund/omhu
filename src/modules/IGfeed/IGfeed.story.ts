import { Meta, StoryObj } from "@storybook/react";
import IGfeed from "./IGfeed";

type Story = StoryObj<typeof IGfeed>;

export default {
  component: IGfeed,
} as Meta<typeof IGfeed>;

export const Default: Story = {
  args: {},
};
