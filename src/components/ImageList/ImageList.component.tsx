import {
    ImageList as MuiImageList,
    ImageListItem,
    useMediaQuery,
} from '@mui/material';

import type { ImageListDataType } from './ImageList.type';

/**
 * ImageList component
 * Provides Image list as a designed gallery
 * @component
 * @returns ImageList with 3 cols and customized rows for desktop and mobile
 *
 * @example usage
 * ```tsx
 * <ImageList imageListData={imageListData} />
 * ```
 */
export const ImageList = ({
    imageListData,
}: {
    imageListData: ImageListDataType[];
}) => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));

    return (
        <MuiImageList
            variant="quilted"
            cols={isDesktop ? 3 : 1}
            gap={16}
            rowHeight={isDesktop ? 244 : 122}
        >
            {imageListData.slice(0, isDesktop ? 4 : 3).map((item, index) => (
                <ImageListItem
                    key={index}
                    cols={isDesktop ? item.cols || 1 : 1}
                    rows={item.rows || 1}
                >
                    <img src={item.img} alt={item.title} loading="lazy" />
                </ImageListItem>
            ))}
        </MuiImageList>
    );
};
