import {
    styled,
    Tooltip,
    tooltipClasses,
    type TooltipProps,
} from '@mui/material';

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
