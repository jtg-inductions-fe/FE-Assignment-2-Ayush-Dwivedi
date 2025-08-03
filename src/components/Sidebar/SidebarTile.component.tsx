import { useMemo, useState } from 'react';

import { useLocation } from 'react-router';

import {
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import {
    Collapse,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { Link, StyledBadge } from '@components';

import { type SidebarTileProps } from './Sidebar.types';

/**
 * Sidebar Tile component
 * Provides List Item tile with icon, label, onClick, and collapse
 * @returns Complete Sidebar List item customized as per props
 *
 * @example usage
 * tsx```
 * <SidebarTile {...sidebarTileItem} onclick={handleClick}/>
 * ```
 */
export const SidebarTile = ({
    icon: PropsIcon,
    label,
    route,
    notificationCount,
    children,
    onClick,
}: SidebarTileProps) => {
    const [isCollapsed, setCollapsed] = useState<boolean>(true);
    const { pathname } = useLocation();
    const isActive = useMemo(
        () =>
            route === pathname ||
            children?.some((child) => child.route === pathname),
        [route, pathname, children],
    );
    const NESTED_ITEM_PADDING = 18;

    const handleCollapseClick = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <>
            <ListItemButton
                component={children ? 'button' : Link}
                to={!children ? route : undefined}
                onClick={children ? handleCollapseClick : onClick}
                selected={!isCollapsed}
                sx={{
                    color: isActive ? 'primary.main' : 'text.primary',
                    width: '100%',
                }}
            >
                <ListItemIcon>
                    <PropsIcon />
                </ListItemIcon>
                <ListItemText
                    primary={label}
                    slotProps={{
                        primary: {
                            fontWeight: 'fontWeightMedium',
                        },
                    }}
                />
                {!children && notificationCount && (
                    <StyledBadge
                        badgeContent={notificationCount}
                        badgeVariant="error"
                        sx={{
                            '& .MuiBadge-badge': {
                                transform: 'translateY(-50%)',
                            },
                        }}
                    />
                )}
                {children &&
                    (isCollapsed ? (
                        <ExpandMoreIcon
                            color={isActive ? 'primary' : 'inherit'}
                        />
                    ) : (
                        <ExpandLessIcon
                            color={isActive ? 'primary' : 'inherit'}
                        />
                    ))}
            </ListItemButton>
            {children && (
                <Collapse in={!isCollapsed} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {children.map((childItem, index) => (
                            <ListItemButton
                                component={Link}
                                to={childItem.route}
                                onClick={onClick}
                                key={index}
                                sx={{
                                    pl: NESTED_ITEM_PADDING,
                                    color:
                                        pathname === childItem.route
                                            ? 'primary.main'
                                            : 'text.primary',
                                }}
                            >
                                <ListItemText
                                    primary={childItem.label}
                                    slotProps={{
                                        primary: {
                                            fontWeight: 'fontWeightMedium',
                                        },
                                    }}
                                />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};
