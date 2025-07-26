import type { Components } from '@mui/material/styles';

import InterTTF from '@assets/fonts/inter/inter.ttf';
import InterWOFF from '@assets/fonts/inter/inter.woff';
import InterWOFF2 from '@assets/fonts/inter/inter.woff2';

/**
 * Font declarations for Inter font family.
 * Used via MUI's CssBaseline to inject global @font-face rules.
 */
const fontFaceDeclarations = `
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        src: url(${InterWOFF2}) format('woff2'), url(${InterWOFF}) format('woff'), url(${InterTTF}) format('truetype');
      }
    `;

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            html: {
                fontSize: '62.5%',
            },
            fontFaceDeclarations,
        },
    },
};
