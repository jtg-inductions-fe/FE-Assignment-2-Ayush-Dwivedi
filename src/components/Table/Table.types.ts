import { type ReactNode } from 'react';

import { type ChipProps, type TypographyProps } from '@mui/material';

type BaseConfigType<RowData> = {
    /**
     * Title of the column.
     */
    title: string;

    /**
     * Function to extract the value from a row.
     */
    selector: (row: RowData) => string | number;
};

// Specific config types
export type CustomConfigType<RowData> = BaseConfigType<RowData> & {
    /**
     * Column type.
     */
    type: 'custom';

    /**
     * Custom render configuration or function.
     */
    renderConfig?: ReactNode | ((row: RowData) => ReactNode);
};

export type TextConfigType<RowData> = BaseConfigType<RowData> & {
    /**
     * Column type.
     */
    type: 'text';

    /**
     * Typography configuration or function.
     */
    renderConfig?: TypographyProps | ((row: RowData) => TypographyProps);
};

export type BadgeConfigType<RowData> = BaseConfigType<RowData> & {
    /**
     * Column type.
     */
    type: 'badge';

    /**
     * Chip configuration or function.
     */
    renderConfig?: ChipProps | ((row: RowData) => ChipProps);
};

// Union of all config types
export type ConfigType<RowData> =
    | CustomConfigType<RowData>
    | TextConfigType<RowData>
    | BadgeConfigType<RowData>;

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
    config: ConfigType<RowData>[];

    /**
     * Key to uniquely identify a row
     */
    getRowKey?: (rowData: RowData) => string | number;
};
