import { useState } from 'react';

import { IconButton, Menu, MenuItem, Typography } from '@mui/material';

import { type DynamicMenuProps } from '@components';

/**
 * DynamicMenu component
 * Provides menu functionality with controller and list
 * @component
 * @param props - Props for DynamicMenu
 * @param props.items - Menu items to display
 * @param props.children - Children which will be used as controller
 * @returns Complete DynamicMenu component
 * @example usage
 * ```tsx
 * <DynamicMenu items={itemsList}>
 *  <ControllerComponent>
 * </DynamicMenu>
 * ```tsx
 */
export const DynamicMenu = ({
    items,
    children,
    ...restProps
}: DynamicMenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'dynamic-menu';

    return (
        <>
            <Menu
                anchorEl={anchorEl}
                id={menuId}
                keepMounted
                open={isMenuOpen}
                onClose={handleMenuClose}
                {...restProps}
            >
                {items.map(({ text, ...menuItemProp }, index) => (
                    <MenuItem key={index} {...menuItemProp}>
                        {text && (
                            <Typography variant="body1">{text}</Typography>
                        )}
                    </MenuItem>
                ))}
            </Menu>
            <IconButton onClick={handleMenuOpen} aria-controls="menuId">
                {children}
            </IconButton>
        </>
    );
};
