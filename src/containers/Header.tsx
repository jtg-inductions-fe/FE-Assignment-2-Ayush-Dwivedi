import * as React from 'react';

import { Link as RouterLink, useNavigate } from 'react-router';

import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { AppBar, Badge, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';

import Avatar from '@assets/images/avatar.webp';
import LogoImg from '@assets/images/logo.webp';
import { SearchBar } from '@components';
import { useTopProducts } from '@hooks';
import { type ProductType } from '@types';
import { toSlug } from '@utils';

/**
 * Props for Header component.
 * @param handleToggle - Function to toggle sidebar/menu from parent (typically on mobile).
 */
interface HeaderProps {
    handleToggle: () => void;
}

/**
 * Header container for the application.
 * Includes logo, search bar, notifications, and user menu.
 *
 * @param {HeaderProps} props
 */
export const Header = ({ handleToggle }: HeaderProps) => {
    const navigate = useNavigate();

    /**
     * Current value in the search bar.
     * Can be a string (custom input), a ProductType (selected item), or null.
     */
    const [searchValue, setSearchValue] = React.useState<
        null | string | ProductType
    >(null);
    const topProducts = useTopProducts();
    /**
     * Handles user selection in the search bar.
     *
     * @param {string | ProductType | null} value - Selected search value.
     */
    const handleSearch = (value: string | ProductType | null) => {
        setSearchValue(value);
        if (!value) return;
        if (typeof value === 'string') {
            void navigate(`/products/${toSlug(value)}`);
        } else {
            void navigate(`/products/${value.slug}`);
        }
    };
    /**
     * Opens the user profile menu.
     *
     * @param {React.MouseEvent<HTMLElement>} event - Click event on avatar.
     */
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    /**
     * Anchor element for profile menu.
     * `null` if the menu is closed.
     */
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isMenuOpen = Boolean(anchorEl);
    /**
     * Closes the user profile menu.
     */
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuId = 'primary-search-account-menu';
    /**
     * JSX for rendering the profile menu.
     */
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem>
                <Typography variant="body1">Ayush Dwivedi</Typography>
            </MenuItem>
            <MenuItem>
                <Typography variant="body2">abc@gmail.com</Typography>
            </MenuItem>
        </Menu>
    );

    return (
        <Box component={'header'} sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'background.paper',
                    color: 'text.primary',
                    borderBottom: '1px solid',
                    borderBottomColor: 'divider',
                    boxShadow: 'none',
                }}
            >
                <Toolbar>
                    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                            onClick={() => handleToggle}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex', p: 0 },
                            gap: '3.2rem',
                            alignItems: 'center',
                        }}
                    >
                        <RouterLink to="/">
                            <Box
                                component="img"
                                src={LogoImg}
                                alt="Logo"
                                sx={{ height: 32 }}
                            />
                        </RouterLink>
                        <SearchBar
                            searchOptions={topProducts}
                            value={searchValue}
                            handleOnChange={handleSearch}
                            getOptionLabel={(option) => {
                                if (typeof option === 'string') return option;
                                return option.title;
                            }}
                        />
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        size="large"
                        component={RouterLink}
                        to="/notifications"
                        aria-label="show 1 new notification"
                    >
                        <Badge badgeContent={1} color="error">
                            <NotificationsIcon sx={{ color: 'text.primary' }} />
                        </Badge>
                    </IconButton>
                    <IconButton
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        color="inherit"
                    >
                        <Box
                            component="img"
                            src={Avatar}
                            alt="User Profile"
                            sx={{ height: 32 }}
                        />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
};
