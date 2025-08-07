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
    if (!active || !payload || payload.length === 0) return null;

    const entry = payload[0] as { value: number; name: string };
    if (!entry || typeof entry !== 'object' || !('value' in entry)) return null;
    const formatValue = (value: number) =>
        tickFormatter ? tickFormatter(value) : value;

    return (
        <>
            <StyledTooltip
                open
                title={
                    <Box
                        paddingX={4}
                        paddingTop={2}
                        paddingBottom={4}
                        borderRadius={2}
                    >
                        <Typography
                            variant="body2"
                            fontWeight="fontWeightMedium"
                            color="text.secondary"
                            gutterBottom
                        >
                            {label}
                        </Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <CircleIcon fontSize="inherit" color="primary" />
                            {entry.name && (
                                <Typography
                                    variant="body1"
                                    fontWeight="fontWeightRegular"
                                    color="text.secondary"
                                >
                                    {entry.name}:
                                </Typography>
                            )}

                            <Typography variant="body1">
                                {formatValue(entry.value)}
                            </Typography>
                        </Stack>
                    </Box>
                }
            >
                <Box
                    visibility="hidden"
                    style={{
                        position: 'absolute',
                        left: coordinate.x,
                        top: coordinate.y,
                    }}
                />
            </StyledTooltip>
        </>
    );
};
