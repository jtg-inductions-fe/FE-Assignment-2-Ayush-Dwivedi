import { Search as SearchIcon } from '@mui/icons-material';
import { Box, TextField, Typography } from '@mui/material';

import { StyledAutocomplete } from '@components';
import { type SearchBarProps } from '@components';

/**
 * SearchBar component
 * Provides searchbar with autocomplete functionality.
 * @component
 * @param props - Props for SearchBar.
 * @param props.searchOptions - List of options to search from.
 * @param props.value - Current selected or typed value.
 * @param props.handleOnChange - Called when value changes.
 * @returns Complete searchbar with icon and autocomplete functionalities
 * @example usage
 * ```tsx
 * <Header>
 *  <SearchBar
 *      searchOptions={options}
 *      value={searchValue}
 *      handleOnChange={handleSearch}
 *      getOptionLabel={(option) => option.title;}
 *  />
 * </Header>
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
                {...params}
                label={
                    <Box display="flex" alignItems="center" gap={1}>
                        <SearchIcon fontSize="small" />
                        <Typography
                            variant="body1"
                            fontWeight={'fontWeightRegular'}
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
