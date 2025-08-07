import type { TooltipContentProps } from 'recharts';

export type ChartProps<
    XKey extends string = string,
    YKey extends string = string,
> = {
    /**
     * The key in the data array used for the X-axis values.
     */
    xKey: XKey;

    /**
     * The key in the data array used for the Y-axis values.
     */
    yKey: YKey;

    /**
     * The dataset to be visualized in the chart.
     * Each object must contain a string XKey and a numeric YKey.
     */
    data: (Record<XKey, string> & Record<YKey, number>)[];

    /**
     * Optional number of ticks to display on the X-axis.
     */
    xTickCount?: number;

    /**
     * Optional number of ticks to display on the Y-axis.
     */
    yTickCount?: number;

    /**
     * Optional name or title of the dataset shown on the tooltip.
     */
    dataName?: string;

    /**
     * Optional custom formatter functions for ticks and tooltip.
     */
    tickFormatter?: {
        /**
         * Formatter function for Y-axis tick values.
         */
        yAxis?: (value: number) => string;

        /**
         * Formatter function for X-axis tick values.
         * Can be string or number depending on data.
         */
        xAxis?: (value: string | number) => string;

        /**
         * Formatter function for tooltip values.
         */
        tooltip?: (value: number) => string;
    };
};

export type CustomTooltipProps = {
    /**
     * Optional formatter function to format the tooltip value.
     */
    tickFormatter?: (value: number) => string;
} & TooltipContentProps<number | string, string>;
