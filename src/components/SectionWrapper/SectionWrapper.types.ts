import { type PaperProps } from '@mui/material';

export type SectionWrapperProps = {
    /**
     * Title text to be displayed in the section header.
     */
    title: string;

    /**
     * Optional subtitle text displayed below the title.
     */
    subtitle?: string;

    /**
     * Optional info tooltip content shown via an icon next to the title.
     */
    infoTooltip?: string;

    /**
     * Optional gap between elements inside the section.
     */
    gap?: number;

    /**
     * Optional padding of the section.
     */
    boxPadding?: number;

    /**
     * Id of section heading.
     */
    headerId: string;
} & PaperProps;
