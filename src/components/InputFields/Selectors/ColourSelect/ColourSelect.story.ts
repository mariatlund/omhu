import { Meta, StoryObj } from "@storybook/react";
import ColourSelect from "./ColourSelect";

type Story = StoryObj<typeof ColourSelect>;

export default {
  component: ColourSelect,
} as Meta<typeof ColourSelect>;

//   render: function Wrapper(args) {
//     const [selectedValue, setSelectedValue] = useState<string | undefined>();
//     return <Select {...args} selectedOptionValue={selectedValue} onChange={setSelectedValue} />;
//   },

// export default {
//   component: SidePanelLinks,
//   parameters: {
//     layout: 'padded',
//   },
//   render: function Wrapper(args) {
//     return (
//       <aside className="max-w-sm">
//         <SidePanelLinks {...args} />
//       </aside>
//     );
//   },
// } satisfies Meta<typeof SidePanelLinks>;

const optionsArray = {
  Mustard: {
    value: "5774",
    label: "Mustard",
    hexCode: "#C99136",
  },
  Turquoise: {
    value: "5771",
    label: "Turquoise",
    hexCode: "#2C6B7E",
  },
  Blue: {
    value: "5772",
    label: "Blue",
    hexCode: "#6B6BEC",
  },
  Brown: {
    value: "765",
    label: "Brown",
    hexCode: "#60342C",
  },
};
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
