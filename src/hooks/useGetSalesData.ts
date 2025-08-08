import { salesData } from 'mocks/sales.mock';

/**
 * Custom hook to retrieve the sales data.
 *
 * @returns An object containing the sales data.
 */
export const useGetSalesData = () => ({
    data: salesData,
});
