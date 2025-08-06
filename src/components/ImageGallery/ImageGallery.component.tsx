import type { Theme } from '@mui/material';
import {
    ImageList as MuiImageList,
    ImageListItem,
    useMediaQuery,
} from '@mui/material';

import type { ImageGalleryProps } from './ImageGallery.type';

/**
 * ImageGallery component
 * Provides Image list as a designed gallery
 * @component
 * @returns ImageList with 3 cols and customized rows for desktop and mobile
 *
 * @example usage
 * ```tsx
 * <ImageGallery
 *      imageGalleryData={imageGalleryData}
 *      noOfColumns={{
 *          xs: no-of-cols-in-mobile,
 *          md: no-of-cols-in-desktop
 *      }}
 *      maxNoOfImages={{
 *          xs: no-of-img-in-mobile,
 *          md: no-of-img-in-desktop
 *      }}
 *      gap={gap}
 *      rowHeight={{
 *          xs: rowHeight-for-mobile
 *          md: rowHeight-for-desktop
 *      }}
 * />
 * ```
 */
export const ImageGallery = ({
    imageGalleryData,
    noOfColumns,
    maxNoOfImages,
    gap = 11,
    rowHeight = { xs: 122, md: 244 },
}: ImageGalleryProps) => {
    const isDesktop = useMediaQuery((theme: Theme) =>
        theme.breakpoints.up('md'),
    );
    const { imageData, imageLayout } = imageGalleryData;
    const finalImageData = isDesktop
        ? imageData.slice(0, maxNoOfImages.md)
        : imageData.slice(0, maxNoOfImages.xs).reverse();
    const layoutConfig = isDesktop ? imageLayout.md : imageLayout.xs;

    return (
        <MuiImageList
            aria-label="Image gallery"
            variant="quilted"
            cols={isDesktop ? noOfColumns.md : noOfColumns.xs}
            gap={gap}
            rowHeight={isDesktop ? rowHeight.md : rowHeight.xs}
        >
            {finalImageData.map((item, index) => (
                <ImageListItem
                    key={item.id}
                    cols={layoutConfig[index].cols || 1}
                    rows={layoutConfig[index].rows || 1}
                >
                    <img src={item.img} alt={item.title} />
                </ImageListItem>
            ))}
        </MuiImageList>
    );
};
