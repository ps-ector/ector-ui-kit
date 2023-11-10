import { Input } from "./Input";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Input",
  component: Input,
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
    label: "Default",
  },
};

export const ButtonInside = {
  args: {
    mode: "buttonInside",
    label: "Button inside",
  },
};

export const Error = {
  args: {
    mode: "error",
    label: "Error",
  },
};

export const Tooltip = {
  args: {
    mode: "tooltip",
    label: "With tooltip",
  },
};
export const Disabled = {
  args: {
    mode: "disabled",
    label: "I'm disabled",
  },
};
