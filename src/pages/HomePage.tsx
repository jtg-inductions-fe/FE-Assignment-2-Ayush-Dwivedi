import { Stack } from '@mui/material';

import { ImageGallery } from '@components';
import { IMAGE_GALLERY_DATA, IMAGE_GALLERY_LAYOUT } from '@constant';
import { Customers, Products, Sales } from '@containers';

/**
 * HomePage
 * Provides homepage for '/' route
 * @returns complete homepage design with all sections
 *
 * @example usage
 * <HomePage />
 */
export const HomePage = () => (
    <Stack padding={4} gap={4}>
        <section aria-label="Image Gallery section">
            <ImageGallery
                imageGalleryData={{
                    imageData: IMAGE_GALLERY_DATA,
                    imageLayout: IMAGE_GALLERY_LAYOUT,
                }}
                noOfColumns={{ xs: 1, md: 3 }}
                maxNoOfImages={{ xs: 3, md: 4 }}
            />
        </section>
        <Sales />
        <Stack gap={4} sx={{ flexDirection: { md: 'column', xl: 'row' } }}>
            <Customers />
            <Products />
        </Stack>
    </Stack>
);
