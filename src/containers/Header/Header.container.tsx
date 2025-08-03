import { useState } from 'react';

import { useNavigate } from 'react-router';

import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { Avatar, Box, IconButton, Stack, Toolbar } from '@mui/material';

import userAvatar from '@assets/images/avatar.webp';
import LogoImg from '@assets/images/logo.webp';
import { Link, Menu, SearchBar, StyledBadge } from '@components';
import { useGetTopProducts } from '@hooks';
import { type ProductType } from '@mocks/topProducts.mock';
import { toSlug } from '@utils';

import { StyledAppBar } from './Header.styles';
import { type HeaderProps } from './Header.types';

/**
 * Header container for the application.
 * Includes logo, search bar, notifications, and user menu.
 * @returns Complete header with hamburger, searchbar, logo, notifications and user menu
 *
 * @example usage
 * ```tsx
 * <Header onSidebarToggle = {sidebarToggleHandler} />
 * ```
 */
export const Header = ({ onSidebarToggle, isSidebarOpen }: HeaderProps) => {
    const [searchValue, setSearchValue] = useState<null | string | ProductType>(
        null,
    );
    const navigate = useNavigate();
    const { data: topProducts } = useGetTopProducts();
    /**
     * Handles user selection in the search bar.
     *
     * @param value - Selected search value.
     */
    const handleSearch = (value: string | ProductType | null) => {
        setSearchValue(value);
        if (!value) {
            return void navigate('/');
        }
        const productId = typeof value === 'string' ? toSlug(value) : value.id;
        void navigate(`/products/${productId}`);
    };

    return (
        <StyledAppBar
            position="fixed"
            aria-label="Admin dashboard AppBar"
            elevation={0}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <IconButton
                    size="large"
                    edge="start"
                    aria-label={isSidebarOpen ? 'Close drawer' : 'Open drawer'}
                    sx={{
                        color: 'text.primary',
                        display: { xs: 'flex', md: 'none' },
                        alignItems: 'center',
                    }}
                    onClick={onSidebarToggle}
                >
                    <MenuIcon />
                </IconButton>
                <Stack
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                    }}
                    direction="row"
                    gap={4}
                >
                    <Link to="/" display="flex" alignItems="center">
                        <Box
                            component="img"
                            src={LogoImg}
                            alt="Logo"
                            height={32}
                        />
                    </Link>
                    <SearchBar
                        searchOptions={topProducts}
                        value={searchValue}
                        handleOnChange={handleSearch}
                        getOptionLabel={(option) => {
                            if (typeof option === 'string') return option;

                            return option.title;
                        }}
                    />
                </Stack>
                <Stack direction="row" gap={2}>
                    <Link
                        to="/notifications"
                        display="flex"
                        alignItems="center"
                    >
                        <StyledBadge badgeVariant="error" badgeContent={1}>
                            <NotificationsIcon sx={{ color: 'text.primary' }} />
                        </StyledBadge>
                    </Link>
                    <Menu
                        items={[
                            {
                                text: 'Star Wars',
                            },
                            { text: 'abc@def.com' },
                        ]}
                        menuId="user-menu"
                    >
                        <Avatar src={userAvatar} alt="User Profile" />
                    </Menu>
                </Stack>
            </Toolbar>
        </StyledAppBar>
    );
};
