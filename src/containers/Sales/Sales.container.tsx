import { useMemo } from 'react';

import { Chart, SectionWrapper } from '@components';
import { useGetSalesData } from '@hooks';

/**
 * Sales container
 * Provides container for sales section
 * @returns Complete sales section with header and chart
 *
 * @example usage
 * ```tsx
 * <Sales />
 * ```
 */
export const Sales = () => {
    const { data: salesData } = useGetSalesData();

    const tickFormatter = useMemo(
        () => ({
            yAxis: (value: number) => {
                if (isNaN(value) || !isFinite(value)) return '0K';

                return `${(value / 1000).toFixed(0)}K`;
            },
            xAxis: (value: number | string) => {
                const [first] = String(value).split(',');

                return first;
            },
            tooltip: (value: number) => {
                if (isNaN(value) || !isFinite(value)) return '$0k';

                return `$${(value / 1000).toFixed(0)}k`;
            },
        }),
        [],
    );

    return (
        <SectionWrapper
            title="Sales"
            infoTooltip="Sales info"
            gap={7}
            boxPadding={8}
            id="sales"
        >
            <Chart
                xKey="date"
                yKey="amount"
                data={salesData}
                dataName="Sales"
                tickFormatter={tickFormatter}
            />
        </SectionWrapper>
    );
};
