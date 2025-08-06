import { useRef } from 'react';

import { Circle as CircleIcon } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

import { StyledTooltip } from './Chart.styles';
import type { CustomTooltipProps } from './Chart.types';

/**
 * CustomTooltip component
 * Provides custom tooltip to be used within chart
 * @component
 * @returns Customized tooltip with name, values and labels
 *
 * @example usage
 * ```tsx
 * <Tooltip
 *       content={(props) => (
 *           <CustomTooltip
 *               {...props}
 *           />
 *       )}
 *   />
 * ```
 */
export const CustomTooltip = ({
    active,
    payload,
    label,
    coordinate,
    tickFormatter,
}: CustomTooltipProps) => {
    const anchorRef = useRef<HTMLSpanElement>(null);
    const position =
        active && coordinate
            ? { left: coordinate.x, top: coordinate.y }
            : { left: 0, top: 0 };

    if (!active || !payload || payload.length === 0) return null;
    const entry = payload[0] as { value: number | string; name: string };
    if (!entry || typeof entry !== 'object' || !('value' in entry)) return null;

    return (
        <>
            <span
                ref={anchorRef}
                style={{
                    position: 'absolute',
                    left: position.left,
                    top: position.top,
                }}
            />
            <StyledTooltip
                open
                title={
                    <Box
                        paddingX={4}
                        paddingTop={2}
                        paddingBottom={4}
                        borderRadius={2}
                    >
                        <Typography variant="body2" gutterBottom>
                            {label}
                        </Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <CircleIcon fontSize="inherit" color="primary" />
                            {entry.name && (
                                <Typography
                                    variant="body1"
                                    fontWeight="fontWeightMedium"
                                    color="text.secondary"
                                >
                                    {entry.name}:
                                </Typography>
                            )}

                            <Typography variant="body1">
                                {tickFormatter
                                    ? tickFormatter(entry.value)
                                    : entry.value}
                            </Typography>
                        </Stack>
                    </Box>
                }
                slotProps={{
                    popper: {
                        anchorEl: anchorRef.current,
                    },
                }}
            >
                <Box visibility="hidden" />
            </StyledTooltip>
        </>
    );
};
