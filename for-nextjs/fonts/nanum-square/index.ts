import localFont from 'next/font/local';

export const nanumSquare = localFont({
  src: [
    { path: './NanumSquareAcEB.woff2', weight: '800' },
    { path: './NanumSquareAcB.woff2', weight: '700' },
    { path: './NanumSquareAcR.woff2', weight: '400' },
    { path: './NanumSquareAcL.woff2', weight: '300' },
  ],
  display: 'swap',
});
