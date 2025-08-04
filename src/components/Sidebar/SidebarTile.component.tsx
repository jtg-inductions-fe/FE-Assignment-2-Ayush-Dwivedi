import { useMemo, useState } from 'react';

import { useLocation } from 'react-router';

import {
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import {
    Badge,
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

import { Link } from '@components';

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
    isChild,
}: SidebarTileProps) => {
    const [isCollapsed, setCollapsed] = useState<boolean>(true);
    const { pathname } = useLocation();
    const isActive = useMemo(
        () =>
            route === pathname ||
            children?.some((child) => child.route === pathname),
        [route, pathname, children],
    );

    const handleCollapseClick = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <ListItem disablePadding sx={{ paddingInline: 2, display: 'block' }}>
            <ListItemButton
                {...(children
                    ? {
                          onClick: handleCollapseClick,
                      }
                    : {
                          component: Link,
                          to: route,
                          onClick: onClick,
                      })}
                selected={!isCollapsed}
                sx={{
                    color: isActive ? 'primary.main' : 'text.primary',
                    width: '100%',
                    borderRadius: 3,
                }}
            >
                {PropsIcon && (
                    <ListItemIcon>
                        <PropsIcon />
                    </ListItemIcon>
                )}
                <ListItemText
                    inset={isChild}
                    primary={label}
                    slotProps={{
                        primary: {
                            fontWeight: 'fontWeightMedium',
                        },
                    }}
                />
                {!children && notificationCount && (
                    <Badge
                        badgeContent={notificationCount}
                        color="error"
                        sx={{
                            '& .MuiBadge-badge': {
                                transform: 'translateY(-50%)',
                            },
                        }}
                    />
                )}
                {children &&
                    (isCollapsed ? <ExpandMoreIcon /> : <ExpandLessIcon />)}
            </ListItemButton>
            {children && (
                <Collapse in={!isCollapsed} timeout="auto" unmountOnExit>
                    <List
                        aria-label={`Sub nav items for ${label}`}
                        disablePadding
                    >
                        {children.map((childItem) => (
                            <SidebarTile
                                {...childItem}
                                onClick={onClick}
                                key={childItem.label}
                                isChild={true}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </ListItem>
    );
};
