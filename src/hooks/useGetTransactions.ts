import { transactions } from 'mocks/transactions.mocks';

/**
 * Custom hook to retrieve the transactions data.
 *
 * @returns An object containing the transactions data.
 */
export const useGetTransactions = () => ({
    data: transactions,
});
