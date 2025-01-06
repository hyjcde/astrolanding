import { Button, Card, Container, Grid, Link, Text } from '@nextui-org/react';
import { DownloadIcon } from '../icons/DownloadIcon';
import { ShoppingCartIcon } from '../icons/ShoppingCartIcon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Features2 = () => {
   const products = [
      {
         title: 'Indoor Autonomous Drone',
         category: 'Hardware',
         description: 'Compact and lightweight drone designed for indoor operations',
         media: {
            type: 'model', // or 'video' or 'image'
            url: '/models/drone.glb',
            thumbnail: '/images/drone-thumb.jpg'
         },
         specs: [
            'Weight: 250g',
            'Flight Time: 15 minutes',
            'Size: 25cm x 25cm',
            'Sensors: LiDAR, Stereo Camera'
         ],
         resources: [
            {
               name: 'Technical Specifications',
               url: '/docs/drone-specs.pdf'
            },
            {
               name: 'Assembly Guide',
               url: '/docs/assembly-guide.pdf'
            },
            {
               name: 'CAD Files',
               url: '/files/drone-cad.zip'
            }
         ],
         purchaseLink: 'https://store.example.com/drone'
      },
      {
         title: 'Ground Control Station',
         category: 'Software',
         description: 'Professional control interface for drone fleet management',
         media: {
            type: 'video',
            url: '/videos/gcs-demo.mp4',
            thumbnail: '/images/gcs-thumb.jpg'
         },
         specs: [
            'Multi-drone Support',
            'Real-time Monitoring',
            'Mission Planning',
            'Data Analytics'
         ],
         resources: [
            {
               name: 'User Manual',
               url: '/docs/gcs-manual.pdf'
            },
            {
               name: 'API Documentation',
               url: '/docs/api-docs.pdf'
            }
         ],
         purchaseLink: 'https://store.example.com/gcs'
      }
   ];

   return (
      <Box css={{ px: '$6', py: '$20' }}>
         <Flex direction="column" align="center" css={{ gap: '$10' }}>
            <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
               <Text span css={{ color: '$blue600' }}>Products</Text>
               <Text h2>Hardware & Software Solutions</Text>
               <Text span css={{ color: '$accents8' }}>
                  Explore our comprehensive range of drone solutions
               </Text>
            </Box>
            
            <Container fluid>
               <Grid.Container gap={2} justify="center">
                  {products.map((product, index) => (
                     <Grid key={index} xs={12} sm={6}>
                        <Card css={{ w: '100%', h: '100%' }}>
                           <Card.Body>
                              <Flex direction="column" css={{ gap: '$6' }}>
                                 {/* Media Display */}
                                 <Box 
                                    css={{ 
                                       position: 'relative',
                                       width: '100%',
                                       paddingTop: '56.25%',
                                       borderRadius: '$lg',
                                       overflow: 'hidden'
                                    }}
                                 >
                                    {product.media.type === 'video' ? (
                                       <video 
                                          autoPlay 
                                          loop 
                                          muted 
                                          playsInline
                                          poster={product.media.thumbnail}
                                          style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                             width: '100%',
                                             height: '100%',
                                             objectFit: 'cover'
                                          }}
                                       >
                                          <source src={product.media.url} type="video/mp4" />
                                       </video>
                                    ) : (
                                       <img 
                                          src={product.media.thumbnail}
                                          alt={product.title}
                                          style={{
                                             position: 'absolute',
                                             top: 0,
                                             left: 0,
                                             width: '100%',
                                             height: '100%',
                                             objectFit: 'cover'
                                          }}
                                       />
                                    )}
                                 </Box>

                                 {/* Product Info */}
                                 <Box>
                                    <Text 
                                       span 
                                       css={{ 
                                          color: '$blue600',
                                          textTransform: 'uppercase',
                                          fontWeight: '$semibold',
                                          fontSize: '$sm'
                                       }}
                                    >
                                       {product.category}
                                    </Text>
                                    <Text h3 css={{ my: '$2' }}>{product.title}</Text>
                                    <Text css={{ color: '$accents8' }}>
                                       {product.description}
                                    </Text>
                                 </Box>

                                 {/* Specifications */}
                                 <Box>
                                    <Text h4>Specifications</Text>
                                    <ul style={{ 
                                       listStyle: 'none',
                                       padding: 0,
                                       margin: 0
                                    }}>
                                       {product.specs.map((spec, i) => (
                                          <li key={i} style={{ margin: '0.5rem 0' }}>
                                             <Text css={{ color: '$accents8' }}>• {spec}</Text>
                                          </li>
                                       ))}
                                    </ul>
                                 </Box>

                                 {/* Resources */}
                                 <Box>
                                    <Text h4>Resources</Text>
                                    <Flex wrap="wrap" css={{ gap: '$4' }}>
                                       {product.resources.map((resource, i) => (
                                          <Button 
                                             key={i}
                                             icon={<DownloadIcon />}
                                             ghost
                                             auto
                                             as={Link}
                                             href={resource.url}
                                             target="_blank"
                                             css={{ minWidth: 'fit-content' }}
                                          >
                                             {resource.name}
                                          </Button>
                                       ))}
                                    </Flex>
                                 </Box>

                                 {/* Purchase Button */}
                                 <Button
                                    icon={<ShoppingCartIcon />}
                                    color="primary"
                                    as={Link}
                                    href={product.purchaseLink}
                                    target="_blank"
                                    css={{ mt: '$6' }}
                                 >
                                    Purchase Now
                                 </Button>
                              </Flex>
                           </Card.Body>
                        </Card>
                     </Grid>
                  ))}
               </Grid.Container>
            </Container>
         </Flex>
      </Box>
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
         </Flex>
      </Box>
   );
};
