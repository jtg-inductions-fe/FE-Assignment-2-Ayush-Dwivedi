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
        yAxis: (value: number) => {
            const num = typeof value === 'string' ? parseFloat(value) : value;
            if (isNaN(num) || !isFinite(num)) return '0K';

            return `${(num / 1000).toFixed(0)}K`;
        },
        xAxis: (value: number | string) => {
            const str = String(value);
            if (!str || typeof str !== 'string') return '';
            const parts = str.split(',');

            return parts[0];
        },
        tooltip: (value: number) => {
            if (isNaN(value) || !isFinite(value)) return '$0k';

            return `$${(value / 1000).toFixed(0)}k`;
        },
    };

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
