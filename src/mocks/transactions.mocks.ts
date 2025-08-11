export type TransactionRowDataType = {
    name: string;
    date: string;
    amount: number;
    status: {
        value: 'completed' | 'cancelled' | 'in-progress';
        label: 'Completed' | 'Cancelled' | 'In progress';
    };
};

export const transactions: TransactionRowDataType[] = [
    {
        name: 'Bonnie Green',
        date: 'Apr 23, 2021',
        amount: 2300,
        status: { value: 'completed', label: 'Completed' },
    },
    {
        name: 'Bonnie Green',
        date: 'Apr 23, 2021',
        amount: -670,
        status: { value: 'completed', label: 'Completed' },
    },
    {
        name: 'Jefe Leos',
        date: 'Apr 18, 2021',
        amount: 234,
        status: { value: 'cancelled', label: 'Cancelled' },
    },
    {
        name: 'Bonnie Green',
        date: 'Apr 15, 2021',
        amount: 5000,
        status: { value: 'in-progress', label: 'In progress' },
    },
    {
        name: 'Jess Leos',
        date: 'Apr 15, 2021',
        amount: 2300,
        status: { value: 'in-progress', label: 'In progress' },
    },
    {
        name: 'TPO LLC',
        date: 'Apr 11, 2021',
        amount: 280,
        status: { value: 'completed', label: 'Completed' },
    },
];
