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
 *       navList={sidebarConfig}
 *       bottomLinksList={bottomLinksConfig}
 *   />
 * ```
 */
export const Sidebar = ({
    isSidebarOpen,
    handleSidebarToggle,
    navList,
    bottomLinksList,
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
                    {navList.map((item, index) =>
                        item.type === 'listItem' ? (
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
                <List
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {bottomLinksList.map((item, index) => (
                        <ListItem key={index} sx={{ width: 'fit-content' }}>
                            <Link to={item.route} onClick={handleSidebarToggle}>
                                <item.icon sx={{ color: 'text.primary' }} />
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Stack>
        </Drawer>
    );
};
