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
    boxPadding = 6,
    id,
    ...restProps
}: SectionWrapperProps) => (
    <Paper
        component="section"
        aria-labelledby={id}
        elevation={1}
        {...restProps}
        sx={{ p: boxPadding, borderRadius: 4, ...restProps.sx }}
    >
        <Stack gap={gap}>
            <header>
                <Stack alignItems="center" direction="row" gap={2}>
                    <Typography variant="h2" id={id}>
                        {title}
                    </Typography>
                    {
                        //TODO: Update tooltip to popover
                        infoTooltip && (
                            <MuiTooltip
                                title={infoTooltip}
                                arrow
                                placement="top"
                            >
                                <IconButton
                                    aria-label={`More info about ${title}`}
                                >
                                    <ToolTipIcon
                                        sx={{ color: 'text.secondary' }}
                                    />
                                </IconButton>
                            </MuiTooltip>
                        )
                    }
                </Stack>
                {subtitle && (
                    <Typography
                        component="p"
                        variant="subtitle1"
                        color="text.secondary"
                        fontWeight="fontWeightRegular"
                    >
                        {subtitle}
                    </Typography>
                )}
            </header>
            {children}
        </Stack>
    </Paper>
);
