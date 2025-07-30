import { type ReactNode } from 'react';

import { type LinkBaseProps } from '@mui/material';

export type MuiLinkProps = (
    | {
          /** The URL to link to for external navigation.  */
          href: string;
          /** No route for navigation when href is defined */
          to?: never;
          /** Click event catching block */
          children: ReactNode;
      }
    | {
          /** The route to navigate using react-router  */
          to: string;
          /** No external URL for navigation when to is defined */
          href?: never;
          /** Click event catching block */
          children: ReactNode;
      }
) &
    LinkBaseProps;
