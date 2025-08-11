import type { RowDataType } from 'mocks/transactions.mocks';

import { Typography } from '@mui/material';

import type { ConfigType } from '@components';

export const TABLE_CONFIG: ConfigType<RowDataType>[] = [
    {
        title: 'Transaction',
        type: 'custom',
        renderConfig: ({ amount, name, status }) => {
            let message = 'Payment from ';
            if (status.value === 'cancelled') message = 'Payment failed from ';
            else if (amount < 0) message = 'Payment refund to ';

            return (
                <Typography variant="subtitle1">
                    <Typography component="span" fontWeight="fontWeightRegular">
                        {message}
                    </Typography>
                    {name}
                </Typography>
            );
        },
        selector: (rowData) => rowData.name,
    },
    {
        title: 'Date & Time',
        type: 'text',
        renderConfig: {
            color: 'text.secondary',
            variant: 'subtitle1',
            fontWeight: 'fontWeightRegular',
        },
        selector: (rowData) => rowData.date,
    },
    {
        title: 'Amount',
        type: 'custom',
        renderConfig: ({ amount }) => (
            <Typography variant="body1" fontWeight="fontWeightMedium">
                {amount.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    maximumFractionDigits: 0,
                    useGrouping: false,
                })}
            </Typography>
        ),
        selector: (rowData) => rowData.amount,
    },
    {
        title: 'Status',
        type: 'badge',
        renderConfig: ({ status: { value } }) => ({
            color:
                value === 'completed'
                    ? 'success'
                    : value === 'cancelled'
                      ? 'error'
                      : 'info',
        }),
        selector: (rowData) => rowData.status.label,
    },
];
