import React from 'react';

import {
    Chip,
    type ChipProps,
    Typography,
    type TypographyProps,
} from '@mui/material';

import type { CellRendererProps } from './Table.types';

/**
 * CellRenderer component
 * Provides formatted value to place inside table cell
 * @component
 * @returns Rendered cell content for table
 *
 * @example usage
 * ```tsx
 * <CellRenderer config={config} rowData={rowData}/>
 * ```
 */
export const CellRenderer = <RowData,>({
    config,
    rowData,
}: CellRendererProps<RowData>) => {
    const { renderConfig, selector, type } = config;
    const cellValue = selector(rowData);
    const cellConfig =
        typeof renderConfig === 'function'
            ? renderConfig(rowData)
            : renderConfig || {};

    switch (type) {
        case 'text':
            return (
                <Typography {...(cellConfig as TypographyProps)}>
                    {cellValue}
                </Typography>
            );
        case 'badge':
            return <Chip {...(cellConfig as ChipProps)} label={cellValue} />;
        default:
            if (React.isValidElement(cellConfig)) {
                return cellConfig;
            }

            return null;
    }
};
