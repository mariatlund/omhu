import { Meta, StoryObj } from "@storybook/react";
import ShowroomBox from "./ShowroomBox";

type Story = StoryObj<typeof ShowroomBox>;

export default {
  component: ShowroomBox,
} as Meta<typeof ShowroomBox>;

export const Default: Story = {
  args: {},
};
