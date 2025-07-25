import type { Components } from '@mui/material/styles';

import InterTTF from '@assets/fonts/inter/inter.ttf';
// Bold Font files
import InterBoldWOFF from '@assets/fonts/inter/inter-bold.woff';
import InterBoldWOFF2 from '@assets/fonts/inter/inter-bold.woff2';
// Medium Font files
import InterMediumWOFF from '@assets/fonts/inter/inter-medium.woff';
import InterMediumWOFF2 from '@assets/fonts/inter/inter-medium.woff2';
// Regular Font files
import InterRegularWOFF from '@assets/fonts/inter/inter-regular.woff';
import InterRegularWOFF2 from '@assets/fonts/inter/inter-regular.woff2';
// Semi Bold Font files
import InterSemiBoldWOFF from '@assets/fonts/inter/inter-semibold.woff';
import InterSemiBoldWOFF2 from '@assets/fonts/inter/inter-semibold.woff2';

const fontFaceDeclarations = `
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        src: url(${InterRegularWOFF2}) format('woff2'), url(${InterRegularWOFF}) format('woff'), url(${InterTTF}) format('truetype');
      };
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        src: url(${InterMediumWOFF2}) format('woff2'), url(${InterMediumWOFF}) format('woff'), url(${InterTTF}) format('truetype');
      };
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        src: url(${InterSemiBoldWOFF2}) format('woff2'), url(${InterSemiBoldWOFF}) format('woff'), url(${InterTTF}) format('truetype');
      };
      @font-face {
        font-display: swap; 
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        src: url(${InterBoldWOFF2}) format('woff2'), url(${InterBoldWOFF}) format('woff'), url(${InterTTF}) format('truetype');
      };
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
