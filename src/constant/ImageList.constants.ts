import computerImage from '@assets/images/computer.webp';
import productCodeImage from '@assets/images/product-code.webp';
import techImage from '@assets/images/tech-image.webp';
import uxDesignImage from '@assets/images/ux-design.webp';
import { type ImageListDataType } from '@components';

export const imageListData: ImageListDataType[] = [
    {
        img: productCodeImage,
        title: 'Product code',
        rows: 1,
        cols: 1,
    },
    {
        img: techImage,
        title: 'Tech Image',
        rows: 1,
        cols: 1,
    },
    {
        img: computerImage,
        title: 'Computer',
        rows: 2,
        cols: 1,
    },
    {
        img: uxDesignImage,
        title: 'UX Design',
        rows: 1,
        cols: 2,
    },
];
