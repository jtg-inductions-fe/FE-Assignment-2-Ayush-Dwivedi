import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

import { type InfoListTileProps } from './InfoListTile.types';

/**
 * InfoListTile component
 * Provides list tile for section based list data
 * @component
 * @returns complete tile component with avatar, title, subtitle, rightNode
 *
 * @example usage
 * ```tsx
 * <InfoListTile
 *      avatar={avatar}
 *      title="title"
 *      subtitle="subtitle"
 *      rightNode={<p>Sample</p>}
 * />
 * ```
 */
export const InfoListTile = ({
    avatar,
    title,
    subtitle,
    rightNode,
}: InfoListTileProps) => (
    <ListItem disablePadding sx={{ py: 2 }}>
        {avatar && (
            <ListItemAvatar>
                <Avatar src={avatar} alt={`Image of ${title}`} />
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
        {rightNode}
    </ListItem>
);
