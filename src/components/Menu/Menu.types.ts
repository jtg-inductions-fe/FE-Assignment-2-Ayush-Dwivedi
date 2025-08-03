import { type ReactNode } from 'react';

import {
    type MenuItemProps,
    type MenuProps as MuiMenuProps,
} from '@mui/material';

export type MenuProps = {
    items: (
        | (Omit<MenuItemProps, 'children'> & {
              /**
               * No text when children are passed to be displayed in list item
               */
              text?: never;

              /**
               * Jsx block to be displayed in list item
               */
              children: ReactNode;
          })
        | (Omit<MenuItemProps, 'children'> & {
              /**
               * Text to be displayed in list item
               */
              text: string;

              /**
               * No children when text is passed to be displayed in list item
               */
              children?: never;
          })
    )[];
    /**
     * Id of menu component which will be controlled by controller
     */
    menuId: string;
} & Omit<MuiMenuProps, 'open'>;
