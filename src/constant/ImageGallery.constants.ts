import computerImage from '@assets/images/computer.webp';
import productCodeImage from '@assets/images/product-code.webp';
import techImage from '@assets/images/tech-image.webp';
import uxDesignImage from '@assets/images/ux-design.webp';
import type { ImageGalleryDataType, ImageGalleryLayoutType } from '@components';

export const IMAGE_GALLERY_DATA: ImageGalleryDataType[] = [
    {
        id: 'image1',
        img: productCodeImage,
        title: 'Product code',
    },
    {
        id: 'image2',
        img: techImage,
        title: 'Tech Image',
    },
    {
        id: 'image3',
        img: computerImage,
        title: 'Computer',
    },
    {
        id: 'image4',
        img: uxDesignImage,
        title: 'UX Design',
    },
];

export const IMAGE_GALLERY_LAYOUT: ImageGalleryLayoutType = {
    xs: [
        { rows: 2, cols: 1 },
        { rows: 1, cols: 1 },
        { rows: 1, cols: 1 },
    ],
    md: [
        {
            rows: 1,
            cols: 1,
        },
        {
            rows: 1,
            cols: 1,
        },
        {
            rows: 2,
            cols: 1,
        },
        {
            rows: 1,
            cols: 2,
        },
    ],
};
