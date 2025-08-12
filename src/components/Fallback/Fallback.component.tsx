import { Box, Button, Stack, Typography } from '@mui/material';

import { Link } from '@components';

import type { FallbackConfig } from './Fallback.types';

/**
 * Fallback component
 * Provides fallback structure for 404, error boundary pages
 * @component
 * @returns A component with hero image, heading, description, button for home
 *
 * @example usage
 * ```tsx
 * <Fallback title="404" description="Not found" heroImg={heroImg}>
 * ```
 */
export const Fallback = ({ title, description, heroImg }: FallbackConfig) => (
    <Stack gap={4} aria-labelledby="fallback-head">
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                height: { md: 476, xs: 250 },
            }}
        >
            <Box
                component="img"
                src={heroImg.src}
                alt={heroImg.label}
                sx={{
                    height: '100%',
                    maxWidth: '100%',
                    objectFit: 'cover',
                }}
            />
        </Box>
        <Stack alignItems="center" textAlign="center" gap={5.5}>
            <Typography variant="h1" id="fallback-head">
                {title}
            </Typography>
            <Typography
                variant="body1"
                color="text.secondary"
                fontWeight="fontWeightRegular"
            >
                {description}
            </Typography>
            <Button
                component={Link}
                to="/"
                variant="contained"
                sx={{ textTransform: 'none', borderRadius: 3 }}
            >
                Go back home
            </Button>
        </Stack>
    </Stack>
);
