import { type AutocompleteProps } from '@mui/material';

export type SearchBarProps<OptionType> = {
    /** List of options to search from */
    searchOptions: OptionType[];
    /** Value typed in search bar */
    value: OptionType | string | null;
    /** Handler function for onChange */
    handleOnChange: (value: OptionType | string | null) => void;
} & Omit<
    AutocompleteProps<OptionType | string, false, false, true, 'div'>,
    'renderInput' | 'onChange' | 'options'
>;
