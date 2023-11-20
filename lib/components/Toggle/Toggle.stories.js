import { Toggle } from "./Toggle";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    mode: "default",
    label: "Toggle me",
  },
};

export const Checked = {
  args: {
    mode: "checked",
    label: "Untoggle me",
  },
};

export const Disabled = {
  args: {
    mode: "disabled",
    label: "I'm disabled",
  },
};
