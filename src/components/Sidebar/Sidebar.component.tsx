import {
    Divider,
    Drawer,
    List,
    ListItem,
    Stack,
    Toolbar,
    useMediaQuery,
} from '@mui/material';

import { Link } from '@components';
import { SIDEBAR_WIDTH } from '@constant';

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
 *       navItems={sidebarConfig}
 *       bottomControls={bottomControlsConfig}
 *   />
 * ```
 */
export const Sidebar = ({
    isSidebarOpen,
    handleSidebarToggle,
    navItems,
    bottomControls,
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
                component="nav"
                justifyContent="space-between"
                height="100%"
                paddingBottom={4}
            >
                <List aria-label="sidebar navigation">
                    {navItems.map((item, index) =>
                        item.type === 'listItem' ? (
                            <SidebarTile
                                {...item}
                                onClick={handleSidebarToggle}
                                key={item.label}
                            />
                        ) : (
                            <Divider aria-hidden={true} key={index} />
                        ),
                    )}
                </List>
                <Stack
                    component="ul"
                    aria-label="sidebar bottom controls"
                    direction="row"
                    flexWrap="wrap"
                >
                    {bottomControls.map((item, index) => (
                        <ListItem key={index} sx={{ width: 'fit-content' }}>
                            <Link to={item.route} onClick={handleSidebarToggle}>
                                <item.icon sx={{ color: 'text.primary' }} />
                            </Link>
                        </ListItem>
                    ))}
                </Stack>
            </Stack>
        </Drawer>
    );
};
