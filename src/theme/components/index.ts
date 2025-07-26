import type { Components } from '@mui/material/styles';

import InterTTF from '@assets/fonts/inter/inter.ttf';
import InterWOFF from '@assets/fonts/inter/inter.woff';
import InterWOFF2 from '@assets/fonts/inter/inter.woff2';

export const components: Components = {
    MuiCssBaseline: {
        styleOverrides: {
            '@font-face': [
                {
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontDisplay: 'swap',
                    fontWeight: '100 900', // if it's a variable font
                    src: `
            url(${InterWOFF2}) format('woff2'),
            url(${InterWOFF}) format('woff'),
            url(${InterTTF}) format('truetype')
          `,
                },
            ],
            html: {
                fontSize: '62.5%',
            },
        },
    },
};
