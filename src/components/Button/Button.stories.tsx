import React from 'react';
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import SendIcon from '@mui/icons-material/Send';
import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    variant: 'contained',
    onClick: fn(()=> alert('clicked'))
  },
};