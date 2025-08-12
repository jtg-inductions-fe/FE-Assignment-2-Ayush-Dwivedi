import { ListItem, Stack, Typography } from '@mui/material';

import { Link } from '@components';

import { StyledPaper } from './Footer.styles';
import type { FooterProps } from './Footer.types';

/**
 * Footer component
 * Provides footer component with copyright info and social links
 * @component
 * @returns Footer component with proper layout and links
 *
 * @example usage
 * ```tsx
 * <Footer socialLinks={FOOTER_LINKS} />
 * ```
 */
export const Footer = ({ socialLinks }: FooterProps) => (
    <StyledPaper component="footer" aria-label="Site footer" elevation={0}>
        <Typography
            variant="body1"
            fontWeight="fontWeightRegular"
            color="text.secondary"
        >
            &copy; {new Date().getFullYear()} ThemesBerg, LLC. All rights
            reserved.
        </Typography>
        <Stack
            component="ul"
            aria-label="footer controls"
            direction="row"
            flexWrap="wrap"
            gap={6}
            margin={0}
            padding={0}
        >
            {socialLinks.map(({ icon: SocialIcon, href, label }) => (
                <ListItem
                    key={href}
                    disablePadding
                    sx={{ width: 'fit-content' }}
                >
                    <Link
                        href={href}
                        title={label}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                    >
                        <SocialIcon
                            aria-hidden
                            sx={{ color: 'text.primary' }}
                        />
                    </Link>
                </ListItem>
            ))}
        </Stack>
    </StyledPaper>
);
