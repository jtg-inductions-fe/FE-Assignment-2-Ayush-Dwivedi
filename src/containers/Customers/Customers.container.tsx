import { Fragment } from 'react';

import { Divider, List, Typography } from '@mui/material';

import { InfoListTile, SectionWrapper } from '@components';
import { useGetLatestCustomersData } from '@hooks';

/**
 * Customers container
 * Provides container for latest customer section
 * @returns Complete latest customer section with header and tiles
 *
 * @example usage
 * ```tsx
 * <Customers />
 * ```
 */
export const Customers = () => {
    const { data: latestCustomers } = useGetLatestCustomersData();

    return (
        <SectionWrapper
            title="Latest Customers"
            id="customer"
            sx={{ width: { xl: '33.33%', xs: '100%' } }}
        >
            <List disablePadding aria-labelledby="customer">
                {latestCustomers.map((customer, index) => (
                    <Fragment key={customer.email}>
                        <InfoListTile
                            avatar={customer.image}
                            title={customer.name}
                            subtitle={customer.email}
                            rightNode={
                                <Typography
                                    variant="body1"
                                    title={customer.amount.toLocaleString(
                                        'en-US',
                                        {
                                            style: 'currency',
                                            currency: 'USD',
                                        },
                                    )}
                                    noWrap
                                >
                                    {customer.amount.toLocaleString('en-US', {
                                        style: 'currency',
                                        currency: 'USD',
                                        maximumFractionDigits: 0,
                                        useGrouping: false,
                                    })}
                                </Typography>
                            }
                            key={customer.email}
                        />
                        {index !== latestCustomers.length - 1 && (
                            <Divider aria-hidden />
                        )}
                    </Fragment>
                ))}
            </List>
        </SectionWrapper>
    );
};
