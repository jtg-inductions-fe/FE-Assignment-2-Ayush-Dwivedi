import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';
import Autocomplete, {
    type AutocompleteProps,
} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export type SearchBarProps<OptionType> = {
    searchOptions: OptionType[];
    value: OptionType | string | null;
    handleOnChange: (value: OptionType | string | null) => void;
} & Omit<
    AutocompleteProps<OptionType | string, false, false, true, 'div'>,
    'renderInput' | 'onChange' | 'options'
>;

/**
 * SearchBar component with autocomplete functionality.
 *
 * @template OptionType
 * @param {Object} props - Props for SearchBar.
 * @param {Array<OptionType>} props.searchOptions - List of options to search from.
 * @param {OptionType | string | null} props.value - Current selected or typed value.
 * @param {(value: OptionType | string | null) => void} props.handleOnChange - Called when value changes.
 */
export const SearchBar = <OptionType,>({
    searchOptions,
    value,
    handleOnChange,
    ...restProps
}: SearchBarProps<OptionType>) => (
    <Autocomplete
        freeSolo={true}
        value={value}
        onChange={(_, newValue) => handleOnChange(newValue)}
        options={searchOptions}
        forcePopupIcon={false}
        selectOnFocus
        handleHomeEndKeys
        size="small"
        sx={{
            width: 402,
            fieldset: {
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '1.6rem',
                boxShadow: 3,
            },
        }}
        renderInput={(params) => (
            <TextField
                {...params}
                label={
                    <Box display="flex" alignItems="center">
                        <SearchIcon fontSize="small" sx={{ mr: 1 }} />
                        <Typography
                            variant="body1"
                            sx={{ fontWeight: 'fontWeightRegular' }}
                        >
                            Search
                        </Typography>
                    </Box>
                }
            />
        )}
        {...restProps}
    />
);
