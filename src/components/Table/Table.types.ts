import { type ReactNode } from 'react';

import type {
    ChipProps,
    TableProps as MuiTableProps,
    TypographyProps,
} from '@mui/material';

export type TableConfigType<RowData> = {
    /**
     * Title of the column.
     */
    title: string;

    /**
     * Function to extract the value from a row.
     */
    selector: (row: RowData) => string | number;

    /**
     * Config to render customized output based on type
     */
    renderConfig:
        | ((rowData: RowData) => CellConfigType<RowData>)
        | CellConfigType<RowData>;
};

// Specific config types
export type CustomConfigType<RowData> = {
    /**
     * Column type.
     */
    type: 'custom';

    /**
     * Custom render configuration or function.
     */
    render: ReactNode | ((row: RowData) => ReactNode);
};

export type TextConfigType = {
    /**
     * Column type.
     */
    type: 'text';
} & TypographyProps;

export type BadgeConfigType = {
    /**
     * Column type.
     */
    type: 'badge';
} & ChipProps;

// Union of all config types
export type CellConfigType<RowData> =
    | CustomConfigType<RowData>
    | TextConfigType
    | BadgeConfigType;

export type TableProps<RowData> = {
    /**
     * Title of the table.
     */
    title: string;

    /**
     * Array of table data items.
     */
    data: RowData[];

    /**
     * Configuration for rendering table columns.
     */
    config: TableConfigType<RowData>[];

    /**
     * Key to uniquely identify a row
     */
    getRowKey?: (rowData: RowData) => string | number;
} & MuiTableProps;

export type CellRendererProps<RowData> = {
    /**
     * Config to render cell data
     */
    config: TableConfigType<RowData>;

    /**
     * RowData to get value for cell
     */
    rowData: RowData;
};
