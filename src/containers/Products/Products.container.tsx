import { Box, List, Typography } from '@mui/material';

import { SectionTile, SectionWrapper } from '@components';
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
    const { data: topProducts } = useGetTopProducts();

    return (
        <SectionWrapper title="Top products" headerId="top-products">
            <List>
                {topProducts
                    .slice(0, 6)
                    .map(({ title, techStack, sales, id }, index) => (
                        <SectionTile
                            title={title}
                            subtitle={techStack}
                            value={
                                <Typography variant="body1">
                                    {`${sales} `}
                                    <Box
                                        component="span"
                                        fontWeight="fontWeightRegular"
                                        sx={{
                                            color: 'text.secondary',
                                        }}
                                    >
                                        sales
                                    </Box>
                                </Typography>
                            }
                            key={id}
                            lastItem={index === 5}
                        />
                    ))}
            </List>
        </SectionWrapper>
    );
};
