import { type SvgIconComponent } from '@mui/icons-material';

export type FooterLink = {
    /**
     * Icon for footer links
     */
    icon: SvgIconComponent;

    /**
     * URL for link navigation
     */
    href: string;
};

export type FooterProps = {
    socialLinks: FooterLink[];
};
