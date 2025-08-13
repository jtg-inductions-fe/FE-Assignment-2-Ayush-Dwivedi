import { type ERROR_PAGE_CONFIG } from '@constant';

export type ErrorScreenConfig = {
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
        alt: string;
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

export type ErrorScreenProps = {
    /**
     * Status code of error
     */
    status?: keyof typeof ERROR_PAGE_CONFIG;
};
