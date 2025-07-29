import { topProducts } from 'constant/topProducts.mock';

import { type ProductType } from '@types';

/**
 * Custom hook to retrieve the list of top products.
 *
 * @returns {ProductType[]} An array of top products.
 */
export const useTopProducts = (): ProductType[] => topProducts;
