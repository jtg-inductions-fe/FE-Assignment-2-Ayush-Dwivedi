import { describe, expect, it, vi } from 'vitest';

import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SearchBar } from './SearchBar.component';

describe('SearchBar Component', () => {
    const OPTIONS = [
        { title: 'Apple' },
        { title: 'Banana' },
        { title: 'Cherry' },
    ];
    const user = userEvent.setup();
    it('should render clear button and dropdown with searchbar component', async () => {
        const mockHandleOnChange = vi.fn();
        const { getByRole, findByLabelText, findByRole } = render(
            <SearchBar
                searchOptions={OPTIONS}
                value=""
                handleOnChange={mockHandleOnChange}
                getOptionLabel={(option) => {
                    if (typeof option === 'string') return option;

                    return option.title;
                }}
            />,
        );
        const searchElement = getByRole('combobox');
        expect(searchElement).toBeInTheDocument();

        // Asserting on opening the dropdown the options are rendered correctly.
        await user.click(searchElement);
        const dropdown = await findByRole('listbox');
        const options = await within(dropdown).findAllByRole('option');
        expect(options).toHaveLength(OPTIONS.length);
        OPTIONS.forEach(({ title }) => {
            expect(within(dropdown).getByText(title)).toBeInTheDocument();
        });

        // Clicking on the list item should trigger the callback function correctly
        await user.click(options[0]);
        expect(mockHandleOnChange).toHaveBeenCalledWith(OPTIONS[0]);
        await user.clear(searchElement);

        // Clicking enter after typing free solo should trigger the callback function correctly
        await user.type(searchElement, 'Testing{enter}');
        expect(mockHandleOnChange).toHaveBeenCalledWith('Testing');

        // Asserting clear button is rendered correctly or not
        const clearButton = await findByLabelText('Clear');
        expect(clearButton).toBeInTheDocument();

        // Clicking on clear button should clear the searchbar
        await user.click(clearButton);
        expect(searchElement).toHaveValue('');
    });
});
