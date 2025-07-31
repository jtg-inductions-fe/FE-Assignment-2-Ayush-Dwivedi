import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';

import { StyledAutocomplete } from './SearchBar.styles';
import { type SearchBarProps } from './SearchBar.types';

/**
 * SearchBar component
 * Provides searchbar with autocomplete functionality.
 * @component
 * @returns Complete searchbar with icon and autocomplete functionalities
 *
 * @example usage
 * ```tsx
 *  <SearchBar
 *      searchOptions={options}
 *      value={searchValue}
 *      handleOnChange={handleSearch}
 *      getOptionLabel={(option) => option.title;}
 *  />
 * ```
 */
export const SearchBar = <OptionType,>({
    searchOptions,
    value,
    handleOnChange,
    ...restProps
}: SearchBarProps<OptionType>) => (
    <StyledAutocomplete<OptionType | string, false, false, true, 'div'>
        freeSolo={true}
        value={value}
        onChange={(_, newValue) => handleOnChange(newValue)}
        options={searchOptions}
        forcePopupIcon={false}
        selectOnFocus
        handleHomeEndKeys
        size="small"
        renderInput={(params) => (
            <TextField
                placeholder="Search"
                slotProps={{
                    input: {
                        ...params.InputProps,
                        startAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        ),
                    },
                }}
                {...params}
            />
        )}
        {...restProps}
    />
);
