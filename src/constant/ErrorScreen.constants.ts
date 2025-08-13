import notFoundImg from '@assets/images/404.webp';
import errorImg from '@assets/images/errorImg.webp';
import { type ErrorScreenConfig } from '@components';

export const ERROR_PAGE_CONFIG = {
    error: {
        title: 'Something has gone seriously wrong',
        description:
            "It's always time for a coffee break. We should be back by the time you finish your coffee.",
        heroImg: {
            src: errorImg,
            alt: 'An animated illustration of a woman daydreaming about coffee',
        },
    },
    404: {
        title: 'Page not found',
        description:
            'Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.',
        heroImg: {
            src: notFoundImg,
            alt: '404 — Page not found illustration',
        },
    },
} satisfies Record<string | number, ErrorScreenConfig>;
