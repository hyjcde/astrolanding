import { Divider, Text } from '@nextui-org/react';
import { BoxIcon } from '../icons/BoxIcon';
import { FeatureIcon } from '../icons/FeatureIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Features2 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',

               '@sm': {
                  gap: '5rem',
                  flexDirection: 'row-reverse',
                  px: '$16',
               },
               '@md': {
                  justifyContent: 'space-evenly',
               },
            }}
         >
            <Flex direction="column" align={'center'}>
               <Text span css={{color: '$blue600'}}>
                  Awesome Feature
               </Text>
               <Text h3>Your title here</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                  nec tincidunt nisl lorem eu nunc. Sed euismod, nisl ut aliquam
                  lacinia,
               </Text>

               <Flex
                  justify={'center'}
                  wrap={'wrap'}
                  css={{
                     py: '$10',
                  }}
               >
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           Your title here
                        </Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                           nisl aliquet nisl,
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     <BoxIcon />
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           Your title here
                        </Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Sed condimentum, nisl ut aliquam lacinia, nisl
                           nisl aliquet nisl,
                        </Text>
                     </Flex>
                  </Flex>
               </Flex>
            </Flex>
            <Flex align={'center'}>
               <FeatureIcon />
            </Flex>
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};

export const Applications = () => {
   const applications = [
      {
         title: 'Warehouse Inspection',
         description: 'Automated inventory tracking and infrastructure inspection in large warehouses',
         icon: '🏭'
      },
      {
         title: 'Security Surveillance',
         description: 'Autonomous patrol and monitoring of indoor spaces for enhanced security',
         icon: '🔒'
      },
      {
         title: 'Construction Monitoring',
         description: 'Progress tracking and safety inspection in indoor construction sites',
         icon: '🏗️'
      },
      {
         title: 'Event Coverage',
         description: 'Dynamic aerial coverage for indoor events and exhibitions',
         icon: '📸'
      }
   ];

   return (
      <Box css={{ px: '$6', py: '$20' }}>
         <Flex direction="column" align="center" css={{ gap: '$10' }}>
            <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
               <Text span css={{ color: '$blue600' }}>Applications</Text>
               <Text h2>Where CUAstro Excels</Text>
               <Text span css={{ color: '$accents8' }}>
                  Discover how our autonomous drone system can transform your indoor operations
               </Text>
            </Box>
            <Flex css={{ gap: '$10' }} wrap="wrap" justify="center">
               {applications.map((app, index) => (
                  <Box 
                     key={index}
                     css={{
                        width: '300px',
                        padding: '$10',
                        borderRadius: '$lg',
                        backgroundColor: '$backgroundContrast',
                        transition: 'transform 0.2s',
                        '&:hover': {
                           transform: 'translateY(-5px)'
                        }
                     }}
                  >
                     <Flex direction="column" css={{ gap: '$5' }}>
                        <Text 
                           css={{ 
                              fontSize: '2.5rem',
                              textAlign: 'center' 
                           }}
                        >
                           {app.icon}
                        </Text>
                        <Text h3 css={{ textAlign: 'center' }}>
                           {app.title}
                        </Text>
                        <Text css={{ color: '$accents8', textAlign: 'center' }}>
                           {app.description}
                        </Text>
                     </Flex>
                  </Box>
               ))}
            </Flex>
            
            <Box 
               css={{ 
                  width: '100%',
                  maxWidth: '1400px',
                  mt: '$20',
                  position: 'relative',
                  paddingTop: '42.85%',
               }}
            >
               <iframe 
                  src="//player.bilibili.com/player.html?isOutside=true&aid=113088602834174&bvid=BV1G6HmeqEZR&cid=25757880077&p=1" 
                  scrolling="no" 
                  frameBorder="no" 
                  allowFullScreen={true}
                  style={{
                     position: 'absolute',
                     top: 0,
                     left: 0,
                     width: '100%',
                     height: '100%',
                     borderRadius: '12px',
                     boxShadow: '0 4px 14px 0 rgb(0 0 0 / 10%)',
                  }}
               />
            </Box>
            
            <Box css={{ maxWidth: '1200px', textAlign: 'center', mt: '$8' }}>
               <Text h3>See CUAstro in Action</Text>
               <Text span css={{ color: '$accents8' }}>
                  Watch our autonomous drone system navigate and map indoor environments in real-time.
               </Text>
            </Box>
         </Flex>
      </Box>
   );
};
