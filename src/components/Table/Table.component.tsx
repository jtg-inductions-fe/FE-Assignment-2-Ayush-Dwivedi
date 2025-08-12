import {
    Table as MuiTable,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

import { CellRenderer } from './CellRenderer.component';
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
export const Table = <RowData,>({
    title,
    data,
    config,
    getRowKey,
    ...restProps
}: TableProps<RowData>) => (
    <TableContainer sx={{ borderRadius: 3 }}>
        <MuiTable aria-label={`Table for ${title}`} {...restProps}>
            <TableHead>
                <TableRow
                    sx={{
                        backgroundColor: 'background.default',
                    }}
                >
                    {config.map((column) => (
                        <TableCell
                            sx={{
                                borderBottom: '1px solid',
                                borderBottomColor: 'divider',
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
                {
                    /* Empty State */
                    !data.length && (
                        <TableRow>
                            <TableCell colSpan={config.length}>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    No data available
                                </Typography>
                            </TableCell>
                        </TableRow>
                    )
                }
                {
                    /* Rendering Rows */
                    !!data.length &&
                        data.map((rowData, index) => (
                            <TableRow
                                key={getRowKey?.(rowData) ?? index}
                                sx={{
                                    '&:nth-of-type(even)': {
                                        backgroundColor: 'background.default',
                                    },
                                }}
                            >
                                {config.map((cellConfig, idx) => (
                                    <TableCell
                                        sx={{ borderRadius: 3 }}
                                        key={idx}
                                    >
                                        <CellRenderer
                                            config={cellConfig}
                                            rowData={rowData}
                                        />
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                }
            </TableBody>
        </MuiTable>
    </TableContainer>
);
