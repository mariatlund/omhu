import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Select from "./ColourSelect";

type Story = StoryObj<typeof Select>;

export default {
  component: Select,
  //   render: function Wrapper(args) {
  //     const [selectedValue, setSelectedValue] = useState<string | undefined>();
  //     return <Select {...args} selectedOptionValue={selectedValue} onChange={setSelectedValue} />;
  //   },
} satisfies Meta<typeof Select>;

const optionsArray = [
  {
    value: "5774",
    label: "Mustard",
    hexCode: "#C99136",
  },
  {
    value: "5771",
    label: "Turquoise",
    hexCode: "#2C6B7E",
  },
  {
    value: "5772",
    label: "Blue",
    hexCode: "#6B6BEC",
  },
  {
    value: "765",
    label: "Brown",
    hexCode: "#60342C",
  },
];

export const Default: Story = {
  args: {
    options: optionsArray,
    defaultOption: {
      value: "5774",
      label: "Mustard",
      hexCode: "#C99136",
    },
  },
};

export const Placeholder: Story = {
  args: {
    options: optionsArray,
    placeholder: "Select a colour",
  },
};

export const DefinedWidth: Story = {
  args: {
    options: optionsArray,
    placeholder: "Select a colour",
    containerClass: "w-60",
  },
};
