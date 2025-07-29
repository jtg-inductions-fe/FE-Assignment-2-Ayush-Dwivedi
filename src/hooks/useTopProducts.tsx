import { topProducts } from 'constant/topProducts.mock';

/**
 * Custom hook to retrieve the list of top products.
 *
 * @returns {ProductType[]} An array of top products.
 */
export const useTopProducts = () => topProducts;
