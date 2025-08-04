import type { Theme } from '@mui/material';
import {
    ImageList as MuiImageList,
    ImageListItem,
    useMediaQuery,
} from '@mui/material';

import type { ImageGalleryProps } from './ImageGallery.type';

/**
 * ImageList component
 * Provides Image list as a designed gallery
 * @component
 * @returns ImageList with 3 cols and customized rows for desktop and mobile
 *
 * @example usage
 * ```tsx
 * <ImageList
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

    return (
        <MuiImageList
            aria-label="Image gallery"
            variant="quilted"
            cols={isDesktop ? noOfColumns.md : noOfColumns.xs}
            gap={gap}
            rowHeight={isDesktop ? rowHeight.md : rowHeight.xs}
        >
            {imageData
                .slice(0, isDesktop ? maxNoOfImages.md : maxNoOfImages.xs)
                .reverse()
                .map((item) => {
                    const itemLayout = imageLayout.find(
                        (layout) => layout.id === item.id,
                    );

                    return (
                        <ImageListItem
                            key={item.id}
                            cols={
                                isDesktop
                                    ? itemLayout?.md.cols || 1
                                    : itemLayout?.xs.cols || 1
                            }
                            rows={
                                isDesktop
                                    ? itemLayout?.md.rows || 1
                                    : itemLayout?.xs.rows || 1
                            }
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    );
                })}
        </MuiImageList>
    );
};
