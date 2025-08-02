import {
    Assessment as AssignmentIcon,
    FileCopy as FileCopyIcon,
    HorizontalSplit as HorizontalSplitIcon,
    Lock as LockIcon,
    MoveToInbox as MoveToInboxIcon,
    PieChart as PieChartIcon,
    ShoppingBag as ShoppingBagIcon,
    Support as SupportIcon,
} from '@mui/icons-material';

import { type SidebarTileItemType } from './Sidebar.types';

export const sidebarList: SidebarTileItemType[] = [
    {
        purpose: 'listItem',
        label: 'Overview',
        icon: PieChartIcon,
        route: '/',
    },
    {
        purpose: 'listItem',
        label: 'Pages',
        icon: FileCopyIcon,
        route: '/pages',
        children: [
            { label: 'Product List', route: '/pages/products' },
            { label: 'Billing', route: '/pages/billing' },
            { label: 'Invoice', route: '/pages/invoice' },
        ],
    },
    {
        purpose: 'listItem',
        label: 'Sales',
        icon: ShoppingBagIcon,
        route: '/sales',
        children: [
            { label: 'Product List', route: '/sales/products' },
            { label: 'Billing', route: '/sales/billing' },
            { label: 'Invoice', route: '/sales/invoice' },
        ],
    },
    {
        purpose: 'listItem',
        label: 'Messages',
        icon: MoveToInboxIcon,
        route: '/messages',
        badge: 1,
    },
    {
        purpose: 'listItem',
        label: 'Authentication',
        icon: LockIcon,
        route: '/auth',
    },
    { purpose: 'divider' },
    {
        purpose: 'listItem',
        label: 'Docs',
        icon: AssignmentIcon,
        route: '/docs',
    },
    {
        purpose: 'listItem',
        label: 'Components',
        icon: HorizontalSplitIcon,
        route: '/components',
    },
    {
        purpose: 'listItem',
        label: 'Help',
        icon: SupportIcon,
        route: '/help',
    },
];
