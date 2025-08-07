import {
    Avatar,
    Divider,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';

import { type SectionTileProps } from './SectionTile.types';

/**
 * SectionTile component
 * Provides list tile for section based list data
 * @component
 * @returns complete tile component with avatar, title, subtitle, value
 *
 * @example usage
 * <SectionTile
 *      avatar={avatar}
 *      title="title"
 *      subtitle="subtitle"
 *      value={<p>Sample</p>}
 * />
 */
export const SectionTile = ({
    avatar,
    title,
    subtitle,
    value,
    lastItem = false,
}: SectionTileProps) => (
    <>
        <ListItem disablePadding sx={{ pt: 2, pb: 2 }}>
            {avatar && (
                <ListItemAvatar>
                    <Avatar src={avatar} alt={title} />
                </ListItemAvatar>
            )}
            <ListItemText
                primary={title}
                secondary={subtitle}
                slotProps={{
                    primary: { noWrap: true, title: title },
                    secondary: { noWrap: true, title: subtitle },
                }}
            />
            {value}
        </ListItem>
        {!lastItem && <Divider aria-hidden />}
    </>
);
