import { topProducts } from 'mocks/topProducts.mock';

/**
 * Custom hook to retrieve the list of top products.
 *
 * @returns An array of top products.
 */
export const useTopProducts = () => ({
    data: topProducts,
});
