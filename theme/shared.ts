import { createTheme } from '@nextui-org/react';

export const lightTheme = createTheme({
   type: 'light',
   theme: {
      colors: {
         primary: '#0072F5',
         secondary: '#7828C8',
         background: '#FFFFFF',
      },
   }
});

export const darkTheme = createTheme({
   type: 'dark',
   theme: {
      colors: {
         primary: '#0072F5',
         secondary: '#7828C8',
         background: '#000000',
      },
   }
}); 