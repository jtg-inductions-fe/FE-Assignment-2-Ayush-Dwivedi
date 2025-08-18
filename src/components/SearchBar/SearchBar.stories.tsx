import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchBar } from './SearchBar.component';

// Example options (pretend you’re searching products)
type ProductOption = { title: string };
const options: ProductOption[] = [
    { title: 'Apple' },
    { title: 'Banana' },
    { title: 'Orange' },
    { title: 'Mango' },
    { title: 'Pineapple' },
];

// Storybook metadata
const meta = {
    title: 'Components/SearchBar',
    component: SearchBar,
    tags: ['autodocs'],
    argTypes: {
        handleOnChange: { action: 'changed' }, // log changes in Storybook Actions panel
    },
} satisfies Meta<typeof SearchBar>;
export default meta;

type Story = StoryObj<typeof SearchBar<ProductOption>>;

// Default story (basic search bar)
export const Default: Story = {
    args: {
        searchOptions: options,
        value: '',
        getOptionLabel: (option: ProductOption | string) =>
            typeof option === 'string' ? option : option.title,
    },
};

// Story with a pre-filled value
export const Prefilled: Story = {
    args: {
        ...Default.args,
        value: 'Apple',
    },
};

// Story with empty options
export const NoOptions: Story = {
    args: {
        searchOptions: [],
        value: '',
        getOptionLabel: (option: { title: string } | string) =>
            typeof option === 'string' ? option : option.title,
    },
};
