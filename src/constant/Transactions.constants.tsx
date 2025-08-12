import type { RowDataType } from 'mocks/transactions.mocks';

import { type ChipProps, Typography } from '@mui/material';

import type { TableConfigType } from '@components';

export const TRANSACTIONS_TABLE_CONFIG: TableConfigType<RowDataType>[] = [
    {
        title: 'Transaction',
        renderConfig: {
            type: 'custom',
            render: ({ amount, name, status }: RowDataType) => {
                const messageMap = {
                    cancelled: 'Payment failed from ',
                    completed:
                        amount < 0 ? 'Payment refund to ' : 'Payment from ',
                    'in-progress': 'Payment pending from ',
                };

                return (
                    <Typography variant="subtitle1">
                        <Typography
                            component="span"
                            fontWeight="fontWeightRegular"
                        >
                            {messageMap[status.value]}
                        </Typography>
                        {name}
                    </Typography>
                );
            },
        },
        selector: (rowData) => rowData.name,
    },
    {
        title: 'Date & Time',
        renderConfig: {
            type: 'text',
            color: 'text.secondary',
            variant: 'subtitle1',
            fontWeight: 'fontWeightRegular',
        },
        selector: (rowData) => rowData.date,
    },
    {
        title: 'Amount',
        renderConfig: {
            type: 'custom',
            render: ({ amount }) => (
                <Typography variant="body1" fontWeight="fontWeightMedium">
                    {amount.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        maximumFractionDigits: 0,
                        useGrouping: false,
                    })}
                </Typography>
            ),
        },
        selector: (rowData) => rowData.amount,
    },
    {
        title: 'Status',
        renderConfig: ({ status }) => ({
            type: 'badge',
            color: ({
                completed: 'success',
                cancelled: 'error',
                'in-progress': 'info',
            }[status.value] || 'default') as ChipProps['color'],
        }),
        selector: (rowData) => rowData.status.label,
    },
];
