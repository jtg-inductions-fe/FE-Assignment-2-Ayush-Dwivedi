import { type ReactNode } from 'react';

export type SectionTileProps = {
    /**
     * Avatar image for tile
     */
    avatar?: string;

    /**
     * Main title content of tile
     */
    title: string;

    /**
     * Adds lighter description below title
     */
    subtitle: string;

    /**
     * Rightmost designed jsx for customized value
     */
    value: ReactNode;

    /**
     * Checks whether the tile is last list item(false by default)
     */
    lastItem?: boolean;
};
