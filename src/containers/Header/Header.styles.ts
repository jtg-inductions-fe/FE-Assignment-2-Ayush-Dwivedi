import { AppBar, styled } from '@mui/material';

export const StyledAppBar = styled(AppBar)(
    ({ theme: { palette, zIndex } }) => ({
        background: palette.background.paper,
        borderBottom: `1px solid ${palette.divider}`,
        zIndex: zIndex.drawer + 1,
    }),
) as typeof AppBar;
