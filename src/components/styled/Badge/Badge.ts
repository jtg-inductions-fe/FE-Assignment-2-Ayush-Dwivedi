import { Badge, styled } from '@mui/material';

import { type BadgeProps } from './Badge.types';

export const StyledBadge = styled(Badge, {
    shouldForwardProp: (prop) => prop !== 'badgeVariant',
})<BadgeProps>(({ badgeVariant, theme: { palette } }) => ({
    '& .MuiBadge-badge': {
        color:
            badgeVariant === 'error'
                ? palette.error.main
                : palette.success.main,
        backgroundColor:
            badgeVariant === 'error'
                ? palette.error.light
                : palette.success.light,
    },
}));
