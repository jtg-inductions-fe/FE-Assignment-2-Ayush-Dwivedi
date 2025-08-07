import { topProducts } from 'mocks/topProducts.mock';

/**
 * Custom hook to retrieve the list of top products.
 *
 * @returns An object containing the top products data.
 */
export const useGetTopProducts = () => ({
    data: topProducts,
});
