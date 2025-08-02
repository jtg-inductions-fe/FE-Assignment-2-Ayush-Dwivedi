import { Badge, styled } from '@mui/material';

export const StyledErrorBadge = styled(Badge)(({ theme: { palette } }) => ({
    '& .MuiBadge-badge': {
        color: palette.error.main,
        backgroundColor: palette.error.light,
    },
})) as typeof Badge;
