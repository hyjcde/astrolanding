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
               background: 'rgba(0, 0, 0, 0.6)',
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
                     color: '$accents8',
                     maxWidth: '600px',
                     my: '$10',
                  }}
                  size={'$xl'}
                  span
               >
                  Advanced autonomous drones designed specifically for indoor environments. 
                  Navigate, map, and monitor indoor spaces with unprecedented precision.
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     my: '$8',
                  }}
                  wrap={'wrap'}
               >
                  <Button size="lg" color="primary">
                     Schedule Demo
                  </Button>
                  <Button size="lg" bordered color="primary">
                     Learn More
                  </Button>
               </Flex>

               <Flex
                  wrap={'wrap'}
                  css={{
                     gap: '$8',
                     mt: '$8',
                     color: '$accents8',
                  }}
               >
                  <Flex css={{ alignItems: 'center', gap: '$2' }}>
                     <CheckIcon /> Advanced SLAM Technology
                  </Flex>
                  <Flex css={{ alignItems: 'center', gap: '$2' }}>
                     <CheckIcon /> Real-time Mapping
                  </Flex>
                  <Flex css={{ alignItems: 'center', gap: '$2' }}>
                     <CheckIcon /> Autonomous Navigation
                  </Flex>
               </Flex>
            </Box>
         </Flex>
      </Box>
   );
};
