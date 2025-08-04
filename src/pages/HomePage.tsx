import { Stack } from '@mui/material';

import { ImageGallery } from '@components';
import { IMAGE_GALLERY_DATA, IMAGE_GALLERY_LAYOUT } from '@constant';
export const HomePage = () => (
    <Stack padding={4} gap={4}>
        <ImageGallery
            imageGalleryData={{
                imageData: IMAGE_GALLERY_DATA,
                imageLayout: IMAGE_GALLERY_LAYOUT,
            }}
            noOfColumns={{ xs: 1, md: 3 }}
            maxNoOfImages={{ xs: 3, md: 4 }}
        />
    </Stack>
);
