import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Paper } from "./Paper";
import Chip from "../Chip";

const meta = {
  title: "Paper",
  component: Paper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Paper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PaperWithChips: Story = {
  args: {
    title: "My ECG Inbox",
    background: "#F5F5F5",
    variant: "outlined",
    children: (
      <div style={{ display: "flex", gap: "16px" }}>
        <Chip avatar={12} label="Incoming" type="normal" />
        <Chip avatar={12} label="Incoming" type="abnormal" />
        <Chip avatar={12} label="Incoming" />
      </div>
    ),
  },
};

export const PaperWithinPaperWithChips: Story = {
  args: {
    title: "At a Glance",
    background: "#F5F5F5",
    variant: "outlined",
    titleColor: "rgba(0, 0, 0, 0.6)",
    children: (
      <div style={{ display: "flex", gap: "16px", flexDirection: "column" }}>
        <Paper title="My ECG Inbox" variant="outlined">
          <div style={{ display: "flex", gap: "16px" }}>
            <Chip avatar={12} label="Incoming" type="normal" />
            <Chip avatar={12} label="Incoming" type="abnormal" />
            <Chip avatar={12} label="Incoming" />
            <Chip avatar={12} label="Incoming" />
          </div>
        </Paper>
        <Paper title="My ECG Inbox" variant="outlined">
          <div style={{ display: "flex", gap: "16px" }}>
            <Chip avatar={12} label="Incoming" type="normal" />
            <Chip avatar={12} label="Incoming" type="abnormal" />
            <Chip avatar={12} label="Incoming" />
            <Chip avatar={12} label="Incoming" />
          </div>
        </Paper>
      </div>
    ),
  },
};
