import {
    Assessment as AssignmentIcon,
    FileCopy as FileCopyIcon,
    HorizontalSplit as HorizontalSplitIcon,
    Lock as LockIcon,
    MoveToInbox as MoveToInboxIcon,
    PieChart as PieChartIcon,
    PublicOutlined as PublicIcon,
    SettingsOutlined as SettingsIcon,
    ShoppingBag as ShoppingBagIcon,
    Support as SupportIcon,
    TuneOutlined as TuneIcon,
} from '@mui/icons-material';

import type { SidebarBottomLinkType, SidebarTileItemType } from '@components';

export const SIDEBAR_LIST: SidebarTileItemType[] = [
    {
        type: 'listItem',
        label: 'Overview',
        icon: PieChartIcon,
        route: '/',
    },
    {
        type: 'listItem',
        label: 'Pages',
        icon: FileCopyIcon,
        route: '/pages',
        children: [
            {
                type: 'listItem',
                label: 'Product List',
                route: '/pages/products',
            },
            {
                type: 'listItem',
                label: 'Billing',
                route: '/pages/billing',
            },
            {
                type: 'listItem',
                label: 'Invoice',
                route: '/pages/invoice',
            },
        ],
    },
    {
        type: 'listItem',
        label: 'Sales',
        icon: ShoppingBagIcon,
        route: '/sales',
        children: [
            {
                type: 'listItem',
                label: 'Product List',
                route: '/sales/products',
            },
            {
                type: 'listItem',
                label: 'Billing',
                route: '/sales/billing',
            },
            {
                type: 'listItem',
                label: 'Invoice',
                route: '/sales/invoice',
            },
        ],
    },
    {
        type: 'listItem',
        label: 'Messages',
        icon: MoveToInboxIcon,
        route: '/messages',
        notificationCount: 1,
    },
    {
        type: 'listItem',
        label: 'Authentication',
        icon: LockIcon,
        route: '/auth',
    },
    { type: 'divider' },
    {
        type: 'listItem',
        label: 'Docs',
        icon: AssignmentIcon,
        route: '/docs',
    },
    {
        type: 'listItem',
        label: 'Components',
        icon: HorizontalSplitIcon,
        route: '/components',
    },
    {
        type: 'listItem',
        label: 'Help',
        icon: SupportIcon,
        route: '/help',
    },
];

export const SIDEBAR_BOTTOM_LINKS: SidebarBottomLinkType[] = [
    {
        icon: TuneIcon,
        route: '/explore',
        label: 'Explore',
    },
    {
        icon: PublicIcon,
        route: '/customize',
        label: 'Customize',
    },
    {
        icon: SettingsIcon,
        route: '/settings',
        label: 'Settings',
    },
];
