import { Autocomplete, styled } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
    minWidth: 402,
    fieldset: {
        border: '1px solid',
        borderColor: theme.palette.divider,
        borderRadius: theme.shape.borderRadius * 4,
        boxShadow: theme.shadows[3],
    },
})) as typeof Autocomplete;
