import computerImage from '@assets/images/computer.webp';
import productCodeImage from '@assets/images/product-code.webp';
import techImage from '@assets/images/tech-image.webp';
import uxDesignImage from '@assets/images/ux-design.webp';
import type { ImageGalleryDataType, ImageGalleryLayoutType } from '@components';

export const IMAGE_GALLERY_DATA: ImageGalleryDataType[] = [
    {
        id: 'image1',
        img: productCodeImage,
        title: 'A man with pen in hand working on computer with running code',
    },
    {
        id: 'image2',
        img: techImage,
        title: 'Illustration showing a man with some high tech goggles',
    },
    {
        id: 'image3',
        img: computerImage,
        title: 'Corporate professional working on computer',
    },
    {
        id: 'image4',
        img: uxDesignImage,
        title: 'Illustration showing text UI/UX with random icons',
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
