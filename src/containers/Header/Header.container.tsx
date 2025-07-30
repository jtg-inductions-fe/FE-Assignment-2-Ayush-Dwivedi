import { useState } from 'react';

import { useNavigate } from 'react-router';

import {
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
} from '@mui/icons-material';
import {
    AppBar,
    Badge,
    Box,
    IconButton,
    Stack,
    Toolbar,
    useMediaQuery,
    useTheme,
} from '@mui/material';

import Avatar from '@assets/images/avatar.webp';
import LogoImg from '@assets/images/logo.webp';
import { DynamicMenu, MuiLink, SearchBar } from '@components';
import { type HeaderProps } from '@containers';
import { useTopProducts } from '@hooks';
import { type ProductType } from '@mocks/topProducts.mock';
import { toSlug } from '@utils';

/**
 * Header container for the application.
 * Includes logo, search bar, notifications, and user menu.
 * @param {HeaderProps} props
 * @returns Complete header with hamburger, searchbar, logo, notifications and user menu
 * @example usage
 * ```tsx
 * <Header handleToggle = {sidebarToggleHandler} />
 * ```
 */
export const Header = ({ handleToggle }: HeaderProps) => {
    const [searchValue, setSearchValue] = useState<null | string | ProductType>(
        null,
    );
    const navigate = useNavigate();
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const { data: topProducts } = useTopProducts();
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
    const user = {
        name: 'Ayush Dwivedi',
        email: 'abc@gmail.com',
    };

    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: 'background.paper',
                borderBottom: '1px solid',
                borderBottomColor: 'divider',
            }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    aria-label="open drawer"
                    sx={{
                        color: 'text.primary',
                        display: { xs: 'block', md: 'none' },
                    }}
                    onClick={handleToggle}
                >
                    <MenuIcon />
                </IconButton>
                <Stack
                    display={isDesktop ? 'flex' : 'none'}
                    direction={'row'}
                    gap={4}
                >
                    <MuiLink to="/">
                        <Box
                            component="img"
                            src={LogoImg}
                            alt="Logo"
                            sx={{ height: 32 }}
                        />
                    </MuiLink>
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
                <Box flexGrow={1} />
                <MuiLink to="/notifications">
                    <IconButton
                        size="large"
                        aria-label="show 1 new notification"
                    >
                        <Badge badgeContent={1} color="error">
                            <NotificationsIcon sx={{ color: 'text.primary' }} />
                        </Badge>
                    </IconButton>
                </MuiLink>
                <DynamicMenu
                    items={[{ text: user.name }, { text: user.email }]}
                >
                    <Box component="img" src={Avatar} alt="User Profile" />
                </DynamicMenu>
            </Toolbar>
        </AppBar>
    );
};
