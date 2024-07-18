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

export const Outline: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "outlined",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Disabled: Story = {
  args: {
    size: "large",
    label: "Button",
    variant: "contained",
    disabled: true,
    loading: true,
  },
};

export const Icons: Story = {
  args: {
    size: "medium",
    label: "Button",
    variant: "contained",
    loading: false,
    startIcon: <SendIcon />,
    endIcon: <SendIcon />
  },
};
