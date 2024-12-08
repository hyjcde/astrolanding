import { Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Achievements = () => {
   const stats = [
      {
         number: '100+',
         label: 'Successful Deployments',
         description: 'Across various industries'
      },
      {
         number: '1M+',
         label: 'Flight Hours',
         description: 'Of autonomous operation'
      },
      {
         number: '99.9%',
         label: 'Reliability',
         description: 'System uptime'
      },
      {
         number: '50+',
         label: 'Enterprise Clients',
         description: 'Worldwide'
      }
   ];

   return (
      <Box 
         css={{ 
            px: '$6', 
            py: '$20',
            backgroundColor: '$blue50'
         }}
      >
         <Flex direction="column" align="center" css={{ gap: '$10' }}>
            <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
               <Text span css={{ color: '$blue600' }}>Our Impact</Text>
               <Text h2>CUAstro by the Numbers</Text>
               <Text span css={{ color: '$accents8' }}>
                  Delivering measurable results through innovative technology
               </Text>
            </Box>
            <Flex 
               css={{ gap: '$10' }} 
               wrap="wrap" 
               justify="center"
            >
               {stats.map((stat, index) => (
                  <Box 
                     key={index}
                     css={{
                        width: '250px',
                        padding: '$10',
                        borderRadius: '$lg',
                        backgroundColor: '$background',
                        textAlign: 'center'
                     }}
                  >
                     <Text 
                        h2 
                        css={{ 
                           color: '$blue600',
                           marginBottom: '$4'
                        }}
                     >
                        {stat.number}
                     </Text>
                     <Text h4 css={{ marginBottom: '$2' }}>
                        {stat.label}
                     </Text>
                     <Text css={{ color: '$accents8' }}>
                        {stat.description}
                     </Text>
                  </Box>
               ))}
            </Flex>
         </Flex>
      </Box>
   );
};
