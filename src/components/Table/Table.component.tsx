import {
    Chip,
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import type { TableProps } from './Table.types';

/**
 * Table Component
 * Provides a table with customizable inner content
 * @component
 * @returns A table with inner content of type custom, badge and text
 *
 * @example usage
 * ```tsx
 * <Table title="XYZ" data={tableData} config={tableConfig}>
 * ```
 */
export const Table = <RowDataType,>({
    title,
    data,
    config,
}: TableProps<RowDataType>) => (
    <TableContainer>
        <MuiTable aria-label={`Table for ${title}`}>
            <TableHead>
                <TableRow
                    sx={{
                        backgroundColor: 'background.default',
                    }}
                >
                    {config.map((column, index) => (
                        <TableCell
                            sx={{
                                borderBottom: '1px solid',
                                borderBottomColor: 'divider',
                                ...(index === 0 && { borderTopLeftRadius: 12 }),
                                ...(index === config.length - 1 && {
                                    borderTopRightRadius: 12,
                                }),
                            }}
                            key={column.title}
                        >
                            <Typography
                                variant="body2"
                                fontWeight={600}
                                color="text.secondary"
                                textTransform="uppercase"
                            >
                                {column.title}
                            </Typography>
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((rowData, index) => (
                    <TableRow
                        key={index}
                        sx={{
                            '&:nth-of-type(even)': {
                                backgroundColor: 'background.default',
                            },
                        }}
                    >
                        {config.map(({ type, renderConfig, selector }, idx) => {
                            const value = selector(rowData);

                            return (
                                <TableCell sx={{ borderRadius: 3 }} key={idx}>
                                    {type === 'text' ? (
                                        <Typography
                                            {...(typeof renderConfig ===
                                            'function'
                                                ? renderConfig(rowData)
                                                : renderConfig || {})}
                                        >
                                            {value}
                                        </Typography>
                                    ) : type === 'badge' ? (
                                        <Chip
                                            {...(typeof renderConfig ===
                                            'function'
                                                ? renderConfig(rowData)
                                                : renderConfig || {})}
                                            label={value}
                                        />
                                    ) : typeof renderConfig === 'function' ? (
                                        renderConfig(rowData)
                                    ) : (
                                        renderConfig
                                    )}
                                </TableCell>
                            );
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </MuiTable>
    </TableContainer>
);
