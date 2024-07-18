import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Input } from "./Input";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
   
  },
  args: { onBlur: fn(), onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    label: "Username",
    variant: 'outlined',
  },
};

export const Password: Story = {
    args: {
      label: "Password",
      variant: 'outlined',
      type: "password",
    },
  };

export const HelperText: Story = {
    args: {
        label: "Password",
        type: "password",
        helperText: 'Enter the password',
    },
};

