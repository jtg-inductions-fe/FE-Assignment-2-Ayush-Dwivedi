import { type ReactNode } from 'react';

export type InfoListTileProps = {
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
     * Right‑aligned custom element (e.g., amount, action, status)
     */
    rightNode: ReactNode;
};
