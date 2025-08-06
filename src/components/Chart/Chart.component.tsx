import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import { useMediaQuery, useTheme } from '@mui/material';

import type { ChartProps } from './Chart.types';
import { CustomTooltip } from './CustomTooltip.component';

/**
 * Chart component
 * Provides line chart for a pair of key data
 * @component
 * @returns Line chart with proper label formatting and tooltip
 *
 * @example usage
 * ```tsx
 * <Chart
 *       xKey="xkey"
 *       yKey="ykey"
 *       data=[{xkey: abc, ykey: 123},...]
 *       dataName="XYZ"
 *       tickFormatter={tickFormatter}
 *   />
 * ```
 */
export const Chart = <XKey extends string, YKey extends string>({
    data,
    xKey,
    yKey,
    xTickCount = 7,
    yTickCount = 7,
    dataName,
    tickFormatter,
}: ChartProps<XKey, YKey>) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const labelDesign = {
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.caption.fontWeight,
        fill: theme.palette.text.secondary,
    };

    return (
        <ResponsiveContainer minHeight={420} height="100%">
            <LineChart
                data={data}
                margin={{ bottom: 40, left: isDesktop ? 40 : -40, right: 8 }}
            >
                <CartesianGrid
                    horizontal={true}
                    vertical={false}
                    stroke={theme.palette.divider}
                />
                <XAxis
                    angle={isDesktop ? 0 : -45}
                    dataKey={xKey}
                    tickFormatter={tickFormatter?.xAxis}
                    axisLine={false}
                    tickLine={false}
                    tickCount={xTickCount}
                    dy={28}
                    dx={-5}
                    style={labelDesign}
                />
                <YAxis
                    dataKey={yKey}
                    tickFormatter={tickFormatter?.yAxis}
                    axisLine={false}
                    tickLine={false}
                    tickCount={yTickCount}
                    dx={-55}
                    style={labelDesign}
                />
                <Tooltip<string | number, string>
                    cursor={{
                        stroke: theme.palette.divider,
                        strokeDasharray: '5 5',
                    }}
                    content={(props) => (
                        <CustomTooltip
                            tickFormatter={tickFormatter?.tooltip}
                            {...props}
                        />
                    )}
                />
                <Line
                    type="monotone"
                    stroke={theme.palette.primary.main}
                    strokeWidth={3}
                    dot={false}
                    name={dataName || yKey}
                    dataKey={yKey}
                    animationDuration={0}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
