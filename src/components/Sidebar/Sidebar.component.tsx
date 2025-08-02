import {
    PublicOutlined as PublicIcon,
    SettingsOutlined as SettingsIcon,
    TuneOutlined as TuneIcon,
} from '@mui/icons-material';
import {
    Divider,
    Drawer,
    List,
    Stack,
    Toolbar,
    useMediaQuery,
} from '@mui/material';

import { Link } from '@components';
import { SIDEBAR_WIDTH } from '@constant';

import { sidebarList } from './Sidebar.config';
import { type SidebarProps } from './Sidebar.types';
import { SidebarTile } from './SidebarTile.component';

/**
 * Sidebar component
 * Provides sidebar component
 * @returns Complete sidebar component with list items, collapse and icons
 *
 * @example usage
 * tsx```
 * <Sidebar
 *       isSidebarOpen={isSidebarOpen}
 *       handleSidebarToggle={handleSidebarToggle}
 *   />
 * ```
 */
export const Sidebar = ({
    isSidebarOpen,
    handleSidebarToggle,
}: SidebarProps) => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up('md'));
    return (
        <Drawer
            open={isSidebarOpen}
            elevation={isDesktop ? 0 : 2}
            onClose={handleSidebarToggle}
            variant={isDesktop ? 'permanent' : 'temporary'}
            PaperProps={{
                style: { width: SIDEBAR_WIDTH },
            }}
        >
            <Toolbar />
            <Stack
                justifyContent="space-between"
                height="100%"
                paddingBottom={4}
            >
                <List>
                    {sidebarList.map((item, index) =>
                        item.purpose === 'listItem' ? (
                            <SidebarTile
                                {...item}
                                onClick={handleSidebarToggle}
                                key={item.label}
                            />
                        ) : (
                            <Divider key={index} />
                        ),
                    )}
                </List>
                <Stack direction="row" justifyContent="center" gap={8}>
                    <Link to="/customize">
                        <TuneIcon sx={{ color: 'text.primary' }} />
                    </Link>
                    <Link to="/explore">
                        <PublicIcon sx={{ color: 'text.primary' }} />
                    </Link>
                    <Link to="/settings">
                        <SettingsIcon sx={{ color: 'text.primary' }} />
                    </Link>
                </Stack>
            </Stack>
        </Drawer>
    );
};
