import {
    Facebook as FacebookIcon,
    GitHub as GitHubIcon,
    SportsBasketball as DribbbleIcon,
    Twitter as TwitterIcon,
} from '@mui/icons-material';

import { type FooterLink } from '@components';

export const FOOTER_LINKS: FooterLink[] = [
    {
        icon: FacebookIcon,
        href: 'https://facebook.com',
        label: 'Facebook',
    },
    {
        icon: TwitterIcon,
        href: 'https://twitter.com',
        label: 'Twitter',
    },
    {
        icon: GitHubIcon,
        href: 'https://github.com',
        label: 'github',
    },
    {
        icon: DribbbleIcon,
        href: 'https://dribbble.com',
        label: 'Dribbble',
    },
];
