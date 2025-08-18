import { MoreVert } from '@mui/icons-material';
import { Box } from '@mui/material';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { Menu } from './Menu.component';

const meta: Meta<typeof Menu> = {
    title: 'Components/Menu',
    component: Menu,
    tags: ['autodocs'],
    args: {
        menuId: 'storybook-menu',
        items: [
            { text: 'Profile', onClick: () => alert('Profile clicked') },
            { text: 'Settings', onClick: () => alert('Settings clicked') },
            { text: 'Logout', onClick: () => alert('Logout clicked') },
        ],
    },
};
export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
    args: {
        children: <MoreVert />,
    },
};

export const WithCustomTrigger: Story = {
    args: {
        children: <Box>Custom</Box>,
    },
};

export const LongList: Story = {
    args: {
        items: Array.from({ length: 10 }).map((_, i) => ({
            text: `Option ${i + 1}`,
            onClick: () => alert(`Clicked option ${i + 1}`),
        })),
        children: <MoreVert />,
    },
};
