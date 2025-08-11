import { Fragment } from 'react';

import { Box, Divider, List, Typography } from '@mui/material';

import { InfoListTile, SectionWrapper } from '@components';
import { useGetTopProducts } from '@hooks';

/**
 * Products container
 * Provides container for Top products section
 * @returns Complete Top products section with header and tiles
 *
 * @example usage
 * ```tsx
 * <Products />
 * ```
 */
export const Products = () => {
    const { data: topProducts = [] } = useGetTopProducts();

    return (
        <SectionWrapper
            title="Top products"
            id="top-products"
            sx={{ flexGrow: 1 }}
        >
            <List disablePadding aria-labelledby="top-products">
                {topProducts.map(({ title, techStack, sales, id }, index) => (
                    <Fragment key={id}>
                        <InfoListTile
                            title={title}
                            subtitle={techStack}
                            rightNode={
                                <Typography variant="body1">
                                    {`${sales} `}
                                    <Box
                                        component="span"
                                        fontWeight="fontWeightRegular"
                                        color="text.secondary"
                                    >
                                        sales
                                    </Box>
                                </Typography>
                            }
                        />
                        {index !== topProducts.length - 1 && (
                            <Divider aria-hidden />
                        )}
                    </Fragment>
                ))}
            </List>
        </SectionWrapper>
    );
};
