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
 *      imageListData={imageGalleryData}
 *      noOfColumns={{
 *          xs: no-of-cols-in-mobile,
 *          md: no-of-cols-in-desktop
 *      }}
 *      maxNoOfImages={{
 *          xs: no-of-img-in-mobile,
 *          md: no-of-img-in-desktop
 *      }}
 * />
 * ```
 */
export const ImageGallery = ({
    imageGalleryData,
    noOfColumns,
    maxNoOfImages,
}: ImageGalleryProps) => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    const { imageData, imageLayout } = imageGalleryData;

    return (
        <MuiImageList
            variant="quilted"
            cols={isDesktop ? noOfColumns.md : noOfColumns.xs}
            gap={11}
            rowHeight={isDesktop ? 244 : 122}
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
