import { ErrorOutlineRounded as ToolTipIcon } from '@mui/icons-material';
import {
    IconButton,
    Paper,
    Stack,
    Tooltip as MuiTooltip,
    Typography,
} from '@mui/material';

import { type SectionWrapperProps } from './SectionWrapper.types';

/**
 * SectionWrapper component
 * Provides section wrapper with designs and accessibility
 * @component
 * @returns Section wrapper component with elevation, background, semantics, custom styling and accessibility
 *
 * @example usage
 * ```tsx
 * <SectionWrapper title="ABC" subtitle="XYZ">
 *  {children}
 * </SectionWrapper>
 * ```
 */
export const SectionWrapper = ({
    title,
    subtitle,
    infoTooltip,
    children,
    gap = 4,
}: SectionWrapperProps) => (
    <Paper
        component="section"
        aria-label={`${title} section`}
        elevation={1}
        sx={{ p: 4, borderRadius: 4 }}
    >
        <Stack gap={gap}>
            <header aria-label={`Header for ${title} section`}>
                <Stack alignItems="center" direction="row" gap={2}>
                    <Typography variant="h2">{title}</Typography>
                    {infoTooltip && (
                        <MuiTooltip title={infoTooltip} arrow placement="top">
                            <IconButton>
                                <ToolTipIcon sx={{ color: 'text.secondary' }} />
                            </IconButton>
                        </MuiTooltip>
                    )}
                </Stack>
                {subtitle && (
                    <Typography variant="subtitle1" color="text.secondary">
                        {subtitle}
                    </Typography>
                )}
            </header>
            {children}
        </Stack>
    </Paper>
);
