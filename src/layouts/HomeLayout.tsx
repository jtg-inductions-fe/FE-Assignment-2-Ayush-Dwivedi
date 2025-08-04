import { Stack } from '@mui/material';

import { ImageList } from '@components';
import { imageListData } from '@constant';
export const HomeLayout = () => (
    <Stack padding={2}>
        <ImageList imageListData={imageListData} />
    </Stack>
);
