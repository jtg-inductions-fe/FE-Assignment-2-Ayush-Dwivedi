import { latestCustomers } from '@mocks/latestCustomers.mock';

/**
 * Custom hook to retrieve the latest customer data.
 *
 * @returns An object containing the latest customer data.
 */
export const useGetLatestCustomersData = () => ({
    data: latestCustomers,
});
