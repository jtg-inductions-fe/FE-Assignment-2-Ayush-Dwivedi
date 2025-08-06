export type ImageGalleryDataType = {
    /**
     * Unique Id of image
     */
    id: string;

    /**
     * Image to be shown in the list
     */
    img: string;

    /**
     * Alt text for the image
     */
    title: string;
};

export type ImageGalleryLayoutType = {
    /**
     * Layout details for mobile view
     */
    xs: {
        /**
         * Number of rows occupied by the image (must be positive)
         */
        rows: number;

        /**
         * Number of columns occupied by image (must be positive)
         */
        cols: number;
    }[];

    /**
     * Layout details for desktop view
     */
    md: {
        /**
         * Number of rows occupied by the image
         */
        rows: number;

        /**
         * Number of columns occupied by image
         */
        cols: number;
    }[];
};

export type ImageGalleryProps = {
    /**
     * Config to be used to display images
     */
    imageGalleryData: {
        /**
         * Image data related to src, id etc.
         */
        imageData: ImageGalleryDataType[];

        /**
         * Image data related to layout
         */
        imageLayout: ImageGalleryLayoutType;
    };

    /**
     * Number of columns in image gallery
     */
    noOfColumns: {
        /**
         * Number of columns in Mobile view (must be positive)
         */
        xs: number;

        /**
         * Number of columns in Desktop view (must be positive)
         */
        md: number;
    };

    /**
     * Maximum number of images to display in the gallery
     */
    maxNoOfImages: {
        /**
         * Number of images in Mobile view (must be positive)
         */
        xs: number;

        /**
         * Number of images in Desktop view (must be positive)
         */
        md: number;
    };

    /**
     * Row height for desktop/mobile (default: { xs: 122, md: 244 })
     */
    rowHeight?: { xs: number; md: number };

    /**
     * Gap between images (default: 11)
     */
    gap?: number;
};
