import { Button, Divider, Text } from '@nextui-org/react';
import Image from 'next/image';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Hero = () => {
   return (
      <>
         <Flex
            css={{
               'gap': '$3',
               'px': '$6',
               'flexDirection': 'column',
               'alignContent': 'center',
               'justifyContent': 'center',
               'alignItems': 'center',
               'width': '100%',
               '@sm': {
                  flexDirection: 'row',
                  mt: '$10',
               },
            }}
            justify={'center'}
         >
            <Box
               css={{
                  pt: '$13',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '$5',
               }}
            >
               <Box
                  css={{
                     maxWidth: '600px',
                  }}
               >
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                  >
                     Autonomous Indoor{' '}
                  </Text>
                  <Text
                     h1
                     css={{
                        display: 'inline',
                     }}
                     color="primary"
                  >
                     Drone Solutions
                  </Text>
               </Box>

               <Text
                  css={{
                     color: '$accents8',
                     maxWidth: '400px',
                  }}
                  size={'$lg'}
                  span
               >
                  Advanced autonomous drones designed specifically for indoor environments. 
                  Navigate, map, and monitor indoor spaces with unprecedented precision.
               </Text>

               <Flex
                  css={{
                     gap: '$8',
                     pt: '$4',
                  }}
                  wrap={'wrap'}
               >
                  <Button size="lg">
                     Schedule Demo
                  </Button>
                  <Button size="lg" bordered>
                     Learn More
                  </Button>
               </Flex>
               <Flex
                  wrap={'wrap'}
                  css={{
                     'gap': '$8',
                     'py': '$7',
                     '@sm': {
                        py: '$4',
                     },
                  }}
               >
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Advanced SLAM Technology
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Real-time Mapping
                  </Flex>
                  <Flex
                     css={{
                        color: '$accents7',
                        alignItems: 'center',
                     }}
                  >
                     <CheckIcon /> Autonomous Navigation
                  </Flex>
               </Flex>
            </Box>
            <Box
               css={{
                  position: 'relative',
                  width: '350px',
                  height: '200px',
                  '@lg': {
                     width: '600px',
                     height: '350px',
                  },
                  '@md': {
                     width: '450px',
                     height: '300px',
                  },
                  '@sm': {
                     width: '350px',
                     height: '250px',
                  },
                  '@xs': {
                     width: '280px',
                     height: '200px',
                  },
               }}
            >
               <Image
                  src="/drone-hero.png"
                  alt="CUAstro Drone in Action"
                  fill
                  style={{
                     objectFit: 'contain',
                     borderRadius: '24px',
                     boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
                  }}
                  priority
               />
            </Box>
         </Flex>
         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$10'}}
         />
      </>
   );
};
