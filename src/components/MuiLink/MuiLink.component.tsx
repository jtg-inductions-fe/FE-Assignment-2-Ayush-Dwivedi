import { Link as RouterLink } from 'react-router';

import { Link } from '@mui/material';

import { type MuiLinkProps } from '@components';

/**
 * MuiLink Component
 * Used to create Route link or anchor links with href
 * @component
 * @param props - Props for MuiLink
 * @param props.to - Used to define route in case of react-router Link
 * @param props.href - Used to define link destination for anchor tags
 * @param props.children - JSX block that will be used to catch click event
 * @returns MuiLink component with clickable items
 * @example usage
 * ```tsx
 * <MuiLink to='/'>
 *  Click here
 * </MuiLink>
 * ```tsx
 */
export const MuiLink = ({ to, href, children, ...restProps }: MuiLinkProps) => {
    if (to) {
        return (
            <Link component={RouterLink} to={to} {...restProps}>
                {children}
            </Link>
        );
    }

    return (
        <Link href={href} {...restProps}>
            {children}
        </Link>
    );
};
