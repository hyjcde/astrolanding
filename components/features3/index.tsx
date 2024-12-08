import { Card, Divider, Text } from '@nextui-org/react';
import { BoxIcon } from '../icons/BoxIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Features3 = () => {
   return (
      <>
         <Box
            css={{
               px: '$6',
               pb: '$14',
            }}
         >
            <Flex
               direction={'column'}
               justify={'center'}
               align={'center'}
               css={{
                  pt: '$20',
               }}
            >
               <Text span css={{color: '$blue600'}}>
                  Awesome Feature
               </Text>
               <Text h3>Your title here</Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  condimentum, nisl ut aliquam lacinia, nisl nisl aliquet nisl,
                  nec
               </Text>
            </Flex>
            <Flex
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Your Title</Text>
                           <Text span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Your Title</Text>
                           <Text span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
            <Flex
               align={'center'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  gap: '1rem',
                  pt: '$8',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Your Title</Text>
                           <Text span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        <BoxIcon />
                        <Flex direction={'column'}>
                           <Text h5>Your Title</Text>
                           <Text span>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Sed condimentum, nisl ut aliquam lacinia,
                              nisl nisl aliquet nisl, nec
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};

export const Technology = () => {
   const technologies = [
      {
         title: 'Computer Vision',
         description: 'Advanced visual processing algorithms for real-time environment mapping and object detection',
         details: [
            'Real-time object recognition',
            'Visual SLAM implementation',
            'Deep learning-based scene understanding'
         ]
      },
      {
         title: 'Navigation System',
         description: 'Sophisticated path planning and obstacle avoidance for safe indoor flight',
         details: [
            'Dynamic path optimization',
            'Multi-sensor fusion',
            'Real-time trajectory adjustment'
         ]
      },
      {
         title: 'Control System',
         description: 'Precise flight control and stability in confined spaces',
         details: [
            'Advanced PID control',
            'Attitude estimation',
            'Disturbance rejection'
         ]
      }
   ];

   return (
      <Box css={{ px: '$6', py: '$20', backgroundColor: '$backgroundContrast' }}>
         <Flex direction="column" align="center" css={{ gap: '$10' }}>
            <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
               <Text span css={{ color: '$blue600' }}>Technology</Text>
               <Text h2>Advanced Autonomous Systems</Text>
               <Text span css={{ color: '$accents8' }}>
                  Powered by cutting-edge technology and innovative algorithms
               </Text>
            </Box>
            <Flex css={{ gap: '$10' }} wrap="wrap" justify="center">
               {technologies.map((tech, index) => (
                  <Box 
                     key={index}
                     css={{
                        width: '350px',
                        padding: '$10',
                        borderRadius: '$lg',
                        backgroundColor: '$background',
                        boxShadow: '$md'
                     }}
                  >
                     <Flex direction="column" css={{ gap: '$5' }}>
                        <Text h3>{tech.title}</Text>
                        <Text css={{ color: '$accents8' }}>
                           {tech.description}
                        </Text>
                        <Box css={{ mt: '$5' }}>
                           {tech.details.map((detail, idx) => (
                              <Flex 
                                 key={idx} 
                                 css={{ gap: '$3', mb: '$3' }}
                                 align="center"
                              >
                                 <Box 
                                    css={{ 
                                       width: '6px',
                                       height: '6px',
                                       borderRadius: '50%',
                                       backgroundColor: '$blue600'
                                    }}
                                 />
                                 <Text size="sm">{detail}</Text>
                              </Flex>
                           ))}
                        </Box>
                     </Flex>
                  </Box>
               ))}
            </Flex>
         </Flex>
      </Box>
   );
};
