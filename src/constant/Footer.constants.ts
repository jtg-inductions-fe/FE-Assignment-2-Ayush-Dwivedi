import {
    Facebook as FacebookIcon,
    GitHub as GitHubIcon,
    SportsBasketball as DribbleIcon,
    Twitter as TwitterIcon,
} from '@mui/icons-material';

import { type FooterLink } from '@components';

export const FOOTER_LINKS: FooterLink[] = [
    {
        icon: FacebookIcon,
        href: 'https://facebook.com',
    },
    {
        icon: TwitterIcon,
        href: 'https://twitter.com',
    },
    {
        icon: GitHubIcon,
        href: 'https://github.com',
    },
    {
        icon: DribbleIcon,
        href: 'https://dribbble.com',
    },
];
