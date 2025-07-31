import { Autocomplete, styled } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)(
    ({ theme: { shape, shadows, palette } }) => ({
        minWidth: 402,
        fieldset: {
            border: `1px solid ${palette.divider}`,
            borderRadius: shape.borderRadius * 4,
            boxShadow: shadows[3],
        },
    }),
) as typeof Autocomplete;
