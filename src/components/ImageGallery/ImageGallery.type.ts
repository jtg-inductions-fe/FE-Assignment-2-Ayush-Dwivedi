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
     * Id referencing to id of image in image data
     */
    id: string;

    /**
     * Layout details for mobile view
     */
    xs: {
        /**
         * Number of rows occupied by the image
         */
        rows?: number;

        /**
         * Number of columns occupied by image
         */
        cols?: number;
    };

    /**
     * Layout details for desktop view
     */
    md: {
        /**
         * Number of rows occupied by the image
         */
        rows?: number;

        /**
         * Number of columns occupied by image
         */
        cols?: number;
    };
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
        imageLayout: ImageGalleryLayoutType[];
    };

    /**
     * Number of columns in image gallery
     */
    noOfColumns: {
        /**
         * Number of columns in Mobile view
         */
        xs: number;

        /**
         * Number of columns in Desktop view
         */
        md: number;
    };

    maxNoOfImages: {
        /**
         * Number of images in Mobile view
         */
        xs: number;

        /**
         * Number of images in Desktop view
         */
        md: number;
    };
};
