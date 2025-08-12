import { Chip, Typography } from '@mui/material';

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
    const { renderConfig, selector } = config;
    const cellValue = selector(rowData);
    const cellConfig =
        typeof renderConfig === 'function'
            ? renderConfig(rowData)
            : renderConfig;

    switch (cellConfig.type) {
        case 'text':
            return <Typography {...cellConfig}>{cellValue}</Typography>;
        case 'badge':
            return <Chip {...cellConfig} label={cellValue} />;
        case 'custom':
            return typeof cellConfig.render === 'function'
                ? cellConfig.render(rowData)
                : cellConfig.render;
        default:
            return cellValue;
    }
};
