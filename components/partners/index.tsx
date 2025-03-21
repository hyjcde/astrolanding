import { Button, Link, Text } from '@nextui-org/react';
import { GithubIcon } from '../icons/GithubIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Partners = () => {
   const technologies = [
      {
         title: 'Compact Drone Design',
         description: 'Lightweight and compact design optimized for indoor operations',
         video: 'https://www.youtube.com/embed/9JWXcPuAcrY',
         repoLink: 'https://github.com'
      },
      {
         title: 'Localization & Exploration',
         description: 'Autonomous navigation and environment exploration capabilities',
         video: 'https://www.youtube.com/embed/9JWXcPuAcrY',
         repoLink: 'https://github.com'
      },
      {
         title: '3D Reconstruction & Segmentation',
         description: 'GS-based 3D reconstruction and semantic segmentation',
         video: 'https://www.youtube.com/embed/9JWXcPuAcrY',
         repoLink: 'https://github.com'
      },
      {
         title: 'Ground Control Station',
         description: 'Comprehensive ground control and monitoring system',
         video: 'https://www.youtube.com/embed/9JWXcPuAcrY',
         repoLink: 'https://github.com'
      }
   ];

   return (
      <Box css={{ px: '$6', py: '$20' }}>
         <Flex direction="column" align="center" css={{ gap: '$10' }}>
            <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
               <Text span css={{ color: '$blue600' }}>Core Technologies</Text>
               <Text h2>Advanced Indoor Autonomous System</Text>
               <Text span css={{ color: '$accents8' }}>
                  Discover our cutting-edge technologies powering the next generation of indoor autonomous drones
               </Text>
            </Box>
            <Flex 
               wrap="wrap" 
               justify="center" 
               css={{ 
                  gap: '$12',
                  maxWidth: '1400px'
               }}
            >
               {technologies.map((tech, index) => (
                  <Box 
                     key={index}
                     css={{ 
                        width: '600px',
                        padding: '$8',
                        borderRadius: '$lg',
                        backgroundColor: '$backgroundContrast',
                        '@sm': {
                           width: 'calc(50% - 1.5rem)',
                        }
                     }}
                  >
                     <Flex direction="column" css={{ gap: '$6' }}>
                        <Box 
                           css={{ 
                              position: 'relative',
                              width: '100%',
                              paddingTop: '56.25%', // 16:9 Aspect Ratio
                              borderRadius: '$lg',
                              overflow: 'hidden'
                           }}
                        >
                           <iframe 
                              src={tech.video}
                              title={tech.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              style={{
                                 position: 'absolute',
                                 top: 0,
                                 left: 0,
                                 width: '100%',
                                 height: '100%',
                                 border: 'none'
                              }}
                           />
                        </Box>
                        <Text h3>{tech.title}</Text>
                        <Text css={{ color: '$accents8' }}>
                           {tech.description}
                        </Text>
                        <Button 
                           icon={<GithubIcon />}
                           ghost
                           auto
                           as={Link}
                           href={tech.repoLink}
                           target="_blank"
                           rel="noopener noreferrer"
                           css={{
                              maxWidth: 'fit-content'
                           }}
                        >
                           View Repository
                        </Button>
                     </Flex>
                  </Box>
               ))}
            </Flex>
         </Flex>
      </Box>
   );
};