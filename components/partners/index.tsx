import { Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Partners = () => {
   const partners = [
      {
         name: 'Tech Corp',
         logo: '🏢'
      },
      {
         name: 'Warehouse Solutions',
         logo: '🏭'
      },
      {
         name: 'Security Systems',
         logo: '🔒'
      },
      {
         name: 'Construction Co',
         logo: '🏗️'
      }
   ];

   return (
      <Box css={{ px: '$6', py: '$10' }}>
         <Flex direction="column" align="center" css={{ gap: '$8' }}>
            <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
               <Text h2>Trusted By Industry Leaders</Text>
               <Text span css={{ color: '$accents8' }}>
                  Leading companies rely on CUAstro for their indoor autonomous needs
               </Text>
            </Box>
            <Flex 
               wrap="wrap" 
               justify="center" 
               css={{ gap: '$12' }}
            >
               {partners.map((partner, index) => (
                  <Box 
                     key={index}
                     css={{ 
                        padding: '$8',
                        borderRadius: '$lg',
                        backgroundColor: '$backgroundContrast',
                        minWidth: '200px',
                        textAlign: 'center'
                     }}
                  >
                     <Text 
                        css={{ 
                           fontSize: '2.5rem',
                           marginBottom: '$4'
                        }}
                     >
                        {partner.logo}
                     </Text>
                     <Text b size="$lg">{partner.name}</Text>
                  </Box>
               ))}
            </Flex>
         </Flex>
      </Box>
   );
};