import { Button, Text } from '@nextui-org/react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Hero = () => {
   return (
      <Box
         css={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            backgroundImage: 'url(/images/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
               content: '',
               position: 'absolute',
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               background: 'rgba(0, 0, 0, 0.7)',
               zIndex: 1
            }
         }}
      >
         <Flex
            css={{
               position: 'relative',
               zIndex: 2,
               minHeight: '100vh',
               px: '$6',
               flexDirection: 'column',
               alignItems: 'center',
               justifyContent: 'center',
               textAlign: 'center',
               '@sm': {
                  textAlign: 'left',
                  alignItems: 'flex-start',
                  px: '$10',
               },
            }}
         >
            <Box
               css={{
                  maxWidth: '800px',
               }}
            >
               <Text
                  h1
                  css={{
                     display: 'inline',
                     color: '$white',
                     fontSize: '3.5rem',
                     '@sm': {
                        fontSize: '4.5rem',
                     },
                  }}
               >
                  Autonomous Indoor{' '}
               </Text>
               <Text
                  h1
                  css={{
                     display: 'inline',
                     color: '$primary',
                     fontSize: '3.5rem',
                     '@sm': {
                        fontSize: '4.5rem',
                     },
                  }}
               >
                  Drone
               </Text>
               <Text
                  h1
                  css={{
                     display: 'inline',
                     color: '$white',
                     fontSize: '3.5rem',
                     '@sm': {
                        fontSize: '4.5rem',
                     },
                  }}
               >
                  {' '}Solutions
               </Text>

               <Text
                  css={{
                     color: 'rgba(255, 255, 255, 0.85)',
                     maxWidth: '800px',
                     my: '$12',
                     fontSize: '$xl',
                     lineHeight: '1.8',
                     letterSpacing: '0.02em',
                     textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                     '@sm': {
                        fontSize: '$2xl',
                     },
                  }}
                  span
               >
                  <br />
                  Advanced autonomous drones designed specifically for indoor environments.
               </Text>

               <Text
                  css={{
                     color: 'rgba(255, 255, 255, 0.85)',
                     maxWidth: '800px',
                     mb: '$12',
                     fontSize: '$xl',
                     lineHeight: '1.8',
                     letterSpacing: '0.02em',
                     textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
                     '@sm': {
                        fontSize: '$2xl',
                     },
                  }}
                  span
               >
                   Navigate, map, and monitor indoor spaces with unprecedented precision.
               </Text>

               <Flex
                  css={{
                     gap: '$10',
                     my: '$12',
                  }}
                  wrap={'wrap'}
               >
                  <Button 
                     size="lg" 
                     color="primary"
                     css={{
                        fontSize: '$lg',
                        padding: '$10 $16',
                     }}
                  >
                     Schedule Demo
                  </Button>
                  <Button 
                     size="lg" 
                     bordered 
                     color="primary"
                     css={{
                        fontSize: '$lg',
                        padding: '$10 $16',
                     }}
                  >
                     Learn More
                  </Button>
               </Flex>

               <Flex
                  wrap={'wrap'}
                  css={{
                     gap: '$12',
                     mt: '$12',
                     color: 'rgba(255, 255, 255, 0.9)',
                     fontSize: '$lg',
                     '& svg': {
                        color: '$primary',
                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))'
                     }
                  }}
               >
                  <Flex css={{ alignItems: 'center', gap: '$3' }}>
                     <CheckIcon /> Advanced SLAM Technology
                  </Flex>
                  <Flex css={{ alignItems: 'center', gap: '$3' }}>
                     <CheckIcon /> Real-time Mapping
                  </Flex>
                  <Flex css={{ alignItems: 'center', gap: '$3' }}>
                     <CheckIcon /> Autonomous Navigation
                  </Flex>
               </Flex>
            </Box>
         </Flex>
      </Box>
   );
};
