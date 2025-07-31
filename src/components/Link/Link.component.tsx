import { Link as RouterLink } from 'react-router';

import { Link as MuiLink } from '@mui/material';

import { type LinkProps } from './Link.types';

/**
 * Link Component
 * Used to create Route link or anchor links with href
 * @component
 * @returns Link component with clickable items
 *
 * @example usage
 * ```tsx
 * <Link to='/'>
 *  Click here
 * </Link>
 * ```
 */
export const Link = ({ to, href, children, ...restProps }: LinkProps) => (
    <MuiLink
        {...(to ? { component: RouterLink, to } : { href })}
        {...restProps}
    >
        {children}
    </MuiLink>
);
