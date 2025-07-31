import { useState } from 'react';

import {
    IconButton,
    Menu as MuiMenu,
    MenuItem,
    Typography,
} from '@mui/material';

import { type MenuProps } from './Menu.types';

/**
 * Menu component
 * Provides menu functionality with controller and list
 * @component
 * @returns Complete DynamicMenu component
 *
 * @example usage
 * ```tsx
 * <Menu items={itemsList}>
 *  <Trigger>
 * <Menu>
 * ```
 */
export const Menu = ({ items, menuId, children, ...restProps }: MenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const isMenuOpen = Boolean(anchorEl);

    return (
        <>
            <MuiMenu
                anchorEl={anchorEl}
                id={menuId}
                keepMounted
                open={isMenuOpen}
                onClose={handleMenuClose}
                {...restProps}
            >
                {items.map(({ text, ...menuItemProp }, index) => (
                    <MenuItem
                        key={index}
                        onClick={handleMenuClose}
                        {...menuItemProp}
                    >
                        {text && (
                            <Typography variant="body1">{text}</Typography>
                        )}
                    </MenuItem>
                ))}
            </MuiMenu>
            <IconButton onClick={handleMenuOpen} aria-controls={menuId}>
                {children}
            </IconButton>
        </>
    );
};
