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
    const tickFormatter = {
        yAxis: (value: number | string) => {
            const num = typeof value === 'string' ? parseFloat(value) : value;

            return `${(num / 1000).toFixed(0)}K`;
        },
        xAxis: (value: number | string) => {
            const str = String(value);
            const parts = str.split(',');

            return parts[0];
        },
        tooltip: (value: number | string) => {
            const num = typeof value === 'string' ? parseFloat(value) : value;

            return `$${(num / 1000).toFixed(0)}k`;
        },
    };

    return (
        <SectionWrapper
            title="Sales"
            infoTooltip="Sales data for top products"
            gap={7}
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
