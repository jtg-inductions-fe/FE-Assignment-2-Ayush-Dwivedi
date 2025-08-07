import { List, Typography } from '@mui/material';

import { SectionTile, SectionWrapper } from '@components';
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
        <SectionWrapper title="Latest Customers" headerId="customer-header">
            <List>
                {latestCustomers.slice(0, 6).map((customer, index) => (
                    <SectionTile
                        avatar={customer.image}
                        title={customer.name}
                        subtitle={customer.email}
                        value={
                            <Typography variant="body1">
                                ${customer.amount}
                            </Typography>
                        }
                        key={customer.email}
                        lastItem={index === 5}
                    />
                ))}
            </List>
        </SectionWrapper>
    );
};
