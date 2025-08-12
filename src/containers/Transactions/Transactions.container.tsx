import { SectionWrapper, Table } from '@components';
import { TRANSACTIONS_TABLE_CONFIG } from '@constant';
import { useGetTransactions } from '@hooks';

export const Transactions = () => {
    const { data: transactions } = useGetTransactions();

    return (
        <SectionWrapper
            title="Transactions"
            subtitle="This is a list of latest transactions."
            id="transactions"
        >
            <Table
                title="Transactions"
                data={transactions}
                config={TRANSACTIONS_TABLE_CONFIG}
            />
        </SectionWrapper>
    );
};
