import { Chip } from '@mui/material';

import avatar from '@assets/images/avatar.webp';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { InfoListTile } from './InfoListTile.component';

const meta: Meta<typeof InfoListTile> = {
    title: 'Components/InfoListTile',
    component: InfoListTile,
    tags: ['autodocs'],
    args: {
        title: 'Sample Title',
        subtitle: 'This is a subtitle',
    },
};
export default meta;

type Story = StoryObj<typeof InfoListTile>;

export const Default: Story = {};

export const WithAvatar: Story = {
    args: {
        avatar: avatar,
    },
};

export const WithRightNode: Story = {
    args: {
        rightNode: <Chip label="Active" color="success" size="small" />,
    },
};

export const WithAvatarAndRightNode: Story = {
    args: {
        avatar: avatar,
        rightNode: <Chip label="Status" color="primary" size="small" />,
    },
};
