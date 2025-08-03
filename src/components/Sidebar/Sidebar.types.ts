import { type SvgIconComponent } from '@mui/icons-material';

export type SidebarProps = {
    /**
     * Whether the sidebar is currently open.
     */
    isSidebarOpen: boolean;

    /**
     * Function to toggle the sidebar open or closed.
     */
    handleSidebarToggle: () => void;
};

export type SidebarTileItemType =
    | {
          /**
           * Indicates the item is a list item.
           */
          type: 'listItem';

          /**
           * Label text to display for the sidebar item.
           */
          label: string;

          /**
           * Route path to navigate to when the item is clicked.
           */
          route: string;

          /**
           * MUI icon component to display alongside the label.
           */
          icon: SvgIconComponent;

          /**
           * Badge number to display beside label.
           */
          notificationCount?: number;

          /**
           * Optional child links under the current item.
           */
          children?: {
              /**
               * Label text for the child item.
               */
              label: string;

              /**
               * Route path for the child item.
               */
              route: string;
          }[];
      }
    | {
          /**
           * Indicates the item is a divider (a visual separator).
           */
          type: 'divider';
      };

export type SidebarTileProps = Extract<
    SidebarTileItemType,
    { type: 'listItem' }
> & {
    /**
     * Function to handle click events on the sidebar tile.
     */
    onClick: () => void;
};

export type SidebarBottomLinkType = {
    /**
     * MuiIcon component to display at bottom
     */
    icon: SvgIconComponent;

    /**
     * Route to navigate on click
     */
    route: string;
};
