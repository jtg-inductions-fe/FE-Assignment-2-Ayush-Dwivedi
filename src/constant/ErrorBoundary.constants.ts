import { type FallbackConfig } from 'components/Fallback/Fallback.types';

import errorImg from '@assets/images/errorImg.webp';

export const ERROR_PAGE_CONFIG: FallbackConfig = {
    title: 'Something has gone seriously wrong',
    description:
        "It's always time for a coffee break We should be back by the time you finish your coffee.",
    heroImg: {
        src: errorImg,
        label: 'An animated illustration of a woman daydreaming about coffee',
    },
};
