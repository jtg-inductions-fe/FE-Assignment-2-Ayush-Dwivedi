import { ResponsiveContainer } from 'recharts';

import {
    styled,
    Tooltip,
    tooltipClasses,
    type TooltipProps,
} from '@mui/material';

export const StyledChartContainer = styled(ResponsiveContainer)(
    ({
        theme: {
            typography: { caption },
            palette,
            breakpoints,
        },
    }) => ({
        '& .tick': {
            fontSize: caption.fontSize,
            fontWeight: caption.fontWeight,
            fill: palette.text.secondary,
            [breakpoints.up('md')]: {
                fontSize: '1.4rem',
                fontWeight: 600,
            },
        },

        '& svg[role="application"]': {
            overflow: 'visible',
        },
    }),
);

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
