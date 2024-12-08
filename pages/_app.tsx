import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { darkTheme, lightTheme } from '../theme/shared';

function MyApp({Component, pageProps}: AppProps) {
   // 添加全局样式
   const globalStyles = {
      html: {
         scrollBehavior: 'smooth',
         scrollPaddingTop: '80px', // 导航栏的高度，防止锚点内容被导航栏遮挡
      },
      '*': {
         scrollMarginTop: '80px', // 同上
      }
   };

   return (
      <NextThemesProvider
         defaultTheme="system"
         attribute="class"
         value={{
            light: lightTheme.className,
            dark: darkTheme.className,
         }}
      >
         <NextUIProvider>
            <style jsx global>{`
               html {
                  scroll-behavior: smooth;
                  scroll-padding-top: 80px;
               }
               * {
                  scroll-margin-top: 80px;
               }
            `}</style>
            <Component {...pageProps} />
         </NextUIProvider>
      </NextThemesProvider>
   );
}

export default MyApp;
