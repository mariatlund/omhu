import { Meta, StoryObj } from "@storybook/react";
import Select from "../Select/Select";

type Story = StoryObj<typeof Select>;

export default {
  component: Select,
} satisfies Meta<typeof Select>;

const optionsArray = [
  {
    value: "DK",
    label: "Denmark",
  },
  {
    value: "UK",
    label: "United Kingdom",
  },
  {
    value: "US",
    label: "United States",
  },
  {
    value: "SE",
    label: "Sweden",
  },
];

export const Default: Story = {
  args: {
    options: optionsArray,
    defaultOption: {
      value: "DK",
      label: "Denmark",
    },
  },
};
