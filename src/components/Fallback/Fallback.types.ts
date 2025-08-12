export type FallbackConfig = {
    /**
     * Image data for fallback page main image
     */
    heroImg: {
        /**
         * Source of main image
         */
        src: string;

        /**
         * Alt text for main image
         */
        label: string;
    };

    /**
     * Main title for fallback page
     */
    title: string;

    /**
     * Description message for fallback page
     */
    description: string;
};
