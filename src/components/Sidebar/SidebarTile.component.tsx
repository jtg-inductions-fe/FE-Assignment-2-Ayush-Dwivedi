import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router';

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

import { StyledErrorBadge } from '@components';

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
export const SidebarTile = (props: SidebarTileProps) => {
    const [isCollapseOpen, setCollapseOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const { pathname } = useLocation();
    if (props.purpose === 'divider') {
        return;
    }
    const { icon: PropsIcon, label, route, badge, children, onClick } = props;
    const isActive =
        route === pathname ||
        children?.some((child) => child.route === pathname);
    const handleCollapseClick = () => {
        setCollapseOpen((prev) => !prev);
    };
    const handleButtonClick = (targetRoute: string) => {
        void navigate(targetRoute);
        onClick();
    };
    return (
        <>
            <ListItemButton
                onClick={
                    children
                        ? handleCollapseClick
                        : () => handleButtonClick(route)
                }
                selected={isCollapseOpen}
            >
                <ListItemIcon sx={{ color: 'text.primary' }}>
                    <PropsIcon color={isActive ? 'primary' : 'inherit'} />
                </ListItemIcon>
                <ListItemText
                    primary={label}
                    slotProps={{
                        primary: {
                            color: isActive ? 'primary' : 'text.primary',
                            fontWeight: 'fontWeightMedium',
                        },
                    }}
                />
                {!children && badge && (
                    <StyledErrorBadge
                        badgeContent={badge}
                        sx={{
                            '& .MuiBadge-badge': {
                                transform: 'translateY(-50%)',
                            },
                        }}
                    />
                )}
                {children &&
                    (isCollapseOpen ? (
                        <ExpandLessIcon
                            color={isActive ? 'primary' : 'inherit'}
                        />
                    ) : (
                        <ExpandMoreIcon
                            color={isActive ? 'primary' : 'inherit'}
                        />
                    ))}
            </ListItemButton>
            {children && (
                <Collapse in={isCollapseOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {children.map((childItem, index) => (
                            <ListItemButton
                                onClick={() =>
                                    handleButtonClick(childItem.route)
                                }
                                key={index}
                                sx={{ pl: 18 }}
                            >
                                <ListItemText
                                    primary={childItem.label}
                                    slotProps={{
                                        primary: {
                                            fontWeight: 'fontWeightMedium',
                                            color:
                                                pathname === childItem.route
                                                    ? 'primary'
                                                    : 'text.primary',
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
