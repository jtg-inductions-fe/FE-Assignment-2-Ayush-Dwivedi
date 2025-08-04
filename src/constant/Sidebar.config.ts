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

export const sidebarList: SidebarTileItemType[] = [
    {
        type: 'listItem',
        label: 'Overview',
        icon: PieChartIcon,
        route: '/',
        isChild: false,
    },
    {
        type: 'listItem',
        label: 'Pages',
        icon: FileCopyIcon,
        route: '/pages',
        isChild: false,
        children: [
            {
                type: 'listItem',
                label: 'Product List',
                route: '/pages/products',
                isChild: true,
            },
            {
                type: 'listItem',
                label: 'Billing',
                route: '/pages/billing',
                isChild: true,
            },
            {
                type: 'listItem',
                label: 'Invoice',
                route: '/pages/invoice',
                isChild: true,
            },
        ],
    },
    {
        type: 'listItem',
        label: 'Sales',
        icon: ShoppingBagIcon,
        route: '/sales',
        isChild: false,
        children: [
            {
                type: 'listItem',
                label: 'Product List',
                route: '/sales/products',
                isChild: true,
            },
            {
                type: 'listItem',
                label: 'Billing',
                route: '/sales/billing',
                isChild: true,
            },
            {
                type: 'listItem',
                label: 'Invoice',
                route: '/sales/invoice',
                isChild: true,
            },
        ],
    },
    {
        type: 'listItem',
        label: 'Messages',
        icon: MoveToInboxIcon,
        route: '/messages',
        isChild: false,
        notificationCount: 1,
    },
    {
        type: 'listItem',
        label: 'Authentication',
        icon: LockIcon,
        route: '/auth',
        isChild: false,
    },
    { type: 'divider' },
    {
        type: 'listItem',
        label: 'Docs',
        icon: AssignmentIcon,
        route: '/docs',
        isChild: false,
    },
    {
        type: 'listItem',
        label: 'Components',
        icon: HorizontalSplitIcon,
        route: '/components',
        isChild: false,
    },
    {
        type: 'listItem',
        label: 'Help',
        icon: SupportIcon,
        route: '/help',
        isChild: false,
    },
];

export const sidebarBottomLinks: SidebarBottomLinkType[] = [
    {
        icon: TuneIcon,
        route: '/explore',
    },
    {
        icon: PublicIcon,
        route: '/customize',
    },
    {
        icon: SettingsIcon,
        route: '/settings',
    },
];
