import { Box, Button, Stack, Typography } from '@mui/material';

import { Link } from '@components';
import { ERROR_PAGE_CONFIG } from '@constant';
import { useErrorBoundaryContext } from '@contexts';

import type { ErrorScreenProps } from './ErrorScreen.type';

/**
 * ErrorScreen component
 * Provides error page for 404, error boundary pages
 * @component
 * @returns A component with hero image, heading, description, button for home
 *
 * @example usage
 * ```tsx
 * <ErrorScreen status={404} />
 * ```
 */
export const ErrorScreen = ({ status }: ErrorScreenProps) => {
    const { resetErrorBoundary } = useErrorBoundaryContext();
    const { title, description, heroImg } = status
        ? ERROR_PAGE_CONFIG[status]
        : ERROR_PAGE_CONFIG['error'];

    return (
        <Stack component="section" gap={4} aria-labelledby="fallback-head">
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
                    alt={heroImg.alt}
                    sx={{
                        height: '100%',
                        maxWidth: '100%',
                        objectFit: 'cover',
                    }}
                    decoding="async"
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
                {(!status || status === 'error') && (
                    <Button
                        onClick={resetErrorBoundary}
                        variant="text"
                        sx={{ textTransform: 'none', borderRadius: 3 }}
                    >
                        Retry
                    </Button>
                )}
            </Stack>
        </Stack>
    );
};
