import { Noto_Sans_JP, Gemunu_Libre } from 'next/font/google';

export const NOTO_SANS_JP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: false,
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});


export const GEMUNU_LIBRE = Gemunu_Libre({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
});