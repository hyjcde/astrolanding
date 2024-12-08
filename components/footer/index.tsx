import { Divider, Text } from '@nextui-org/react';
import { AcmeLogo } from '../navbar/logo';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Footer = () => {
   return (
      <Flex css={{ py: '$20', px: '$6' }}>
         <Box as={'footer'} css={{ width: '100%' }}>
            <Flex
               justify={'center'}
               wrap={'wrap'}
               align={'center'}
               css={{
                  'gap': '$10',
                  '&  ul': {
                     margin: 0,
                  },
                  '@sm': {},
               }}
            >
               <Flex
                  css={{ gap: '$5', w: '250px' }}
                  direction={'column'}
                  align={'center'}
               >
                  <AcmeLogo />
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           About Us
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Our Mission
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Technology
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Careers
                        </Text>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{ gap: '$5', w: '250px' }}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Solutions</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Warehouse Automation
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Security Surveillance
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Infrastructure Inspection
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Event Coverage
                        </Text>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{ gap: '$5', w: '250px' }}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Contact</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           info@cuastro.com
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           +1 (555) 123-4567
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Schedule Demo
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Support
                        </Text>
                     </Box>
                  </Box>
               </Flex>
               <Flex
                  css={{ gap: '$5', w: '250px' }}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Resources</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none' }}>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Documentation
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Case Studies
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           Blog
                        </Text>
                     </Box>
                     <Box as={'li'}>
                        <Text span css={{ color: '$accents8' }}>
                           FAQ
                        </Text>
                     </Box>
                  </Box>
               </Flex>
            </Flex>
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Divider
                  css={{
                     mt: '$14',
                     display: 'flex',
                     justifyContent: 'center',
                  }}
               />
               <Flex
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  <Flex
                     css={{
                        gap: '$10',
                     }}
                     wrap={'wrap'}
                  >
                     <Text span css={{ color: '$accents8' }}>
                        Follow us on:
                     </Text>
                     <Text span css={{ color: '$accents8' }}>
                        LinkedIn
                     </Text>
                     <Text span css={{ color: '$accents8' }}>
                        Twitter
                     </Text>
                     <Text span css={{ color: '$accents8' }}>
                        YouTube
                     </Text>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{ color: '$accents8' }}>
                        Terms of Service
                     </Text>
                     <Text span css={{ color: '$accents8' }}>
                        Privacy Policy
                     </Text>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{ color: '$accents8' }}>
                        © 2024 CUAstro. All rights reserved.
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
