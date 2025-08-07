import { ResponsiveContainer } from 'recharts';

import {
    styled,
    Tooltip,
    tooltipClasses,
    type TooltipProps,
    useMediaQuery,
} from '@mui/material';

export const StyledChartContainer = styled(ResponsiveContainer)(({
    theme: {
        typography: { caption },
        palette,
    },
}) => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return {
        '& .tick': {
            fontSize: isDesktop ? '1.4rem' : caption.fontSize,
            fontWeight: isDesktop ? 600 : caption.fontWeight,
            fill: palette.text.secondary,
        },
    };
});

export const StyledTooltip = styled(
    ({ className, ...props }: TooltipProps & { className?: string }) => (
        <Tooltip
            {...props}
            arrow
            placement="top"
            classes={{ popper: className }}
        />
    ),
)(({ theme: { palette, shadows } }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: palette.background.paper,
        color: palette.text.primary,
        borderRadius: 12,
        boxShadow: shadows[8],
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: palette.background.paper,
    },
}));
