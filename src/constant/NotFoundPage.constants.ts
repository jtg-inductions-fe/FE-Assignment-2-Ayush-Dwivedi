import { type FallbackConfig } from 'components/Fallback/Fallback.types';

import notFoundImg from '@assets/images/404.webp';

export const NOT_FOUND_CONFIG: FallbackConfig = {
    title: 'Page not found',
    description:
        'Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.',
    heroImg: {
        src: notFoundImg,
        label: 'An illustration with text 404',
    },
};
