import { type BadgeProps as MuiBadgeProps } from '@mui/material';

export type BadgeProps = {
    /**
     * Applies styling based on the variant type
     */
    badgeVariant?: 'error' | 'success';
} & MuiBadgeProps;
