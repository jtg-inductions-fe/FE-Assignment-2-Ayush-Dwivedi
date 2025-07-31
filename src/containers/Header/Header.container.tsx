import { useState } from 'react';

import { useNavigate } from 'react-router';

import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { AppBar, Badge, Box, IconButton, Stack, Toolbar } from '@mui/material';

import Avatar from '@assets/images/avatar.webp';
import LogoImg from '@assets/images/logo.webp';
import { Link, Menu, SearchBar } from '@components';
import { useGetTopProducts } from '@hooks';
import { type ProductType } from '@mocks/topProducts.mock';
import { toSlug } from '@utils';

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
export const Header = ({ onSidebarToggle }: HeaderProps) => {
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
        if (!value) return;
        const productId = typeof value === 'string' ? toSlug(value) : value.id;
        void navigate(`/products/${productId}`);
    };

    return (
        <AppBar
            aria-label="Search and user controls"
            position="static"
            elevation={0}
            sx={{
                backgroundColor: 'background.paper',
                borderBottom: '1px solid',
                borderBottomColor: 'divider',
            }}
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
                    aria-label="open drawer"
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
                    overflow={'visible'}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                    }}
                    direction={'row'}
                    gap={4}
                >
                    <Link to="/" display={'flex'} alignItems={'center'}>
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
                <Stack direction={'row'} gap={2}>
                    <Link
                        to="/notifications"
                        display={'flex'}
                        alignItems={'center'}
                    >
                        <Badge badgeContent={1} color="error">
                            <NotificationsIcon sx={{ color: 'text.primary' }} />
                        </Badge>
                    </Link>
                    <Menu
                        items={[{ text: 'Star Wars' }, { text: 'abc@def.com' }]}
                        menuId="user-menu"
                    >
                        <Box component="img" src={Avatar} alt="User Profile" />
                    </Menu>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};
