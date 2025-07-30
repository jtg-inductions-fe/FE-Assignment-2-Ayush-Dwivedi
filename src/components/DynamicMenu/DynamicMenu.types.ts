import { type ReactNode } from 'react';

import { type MenuItemProps, type MenuProps } from '@mui/material';

export type DynamicMenuProps = {
    items: Omit<MenuItemProps, 'children'> &
        (
            | {
                  /** No text when children are passed to be displayed in list item */
                  text?: never;
                  /** Jsx block to be displayed in list item */
                  children: ReactNode;
              }
            | {
                  /** Text to be displayed in list item */
                  text: string;
                  /** No children when text is passed to be displayed in list item */
                  children?: never;
              }
        )[];
} & Omit<MenuProps, 'open'>;
