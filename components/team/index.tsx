import { Text } from '@nextui-org/react';
import { TeamMembers } from '../navbar/logo';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Team = () => {
   const teamMembers = Object.values(TeamMembers);

   return (
      <Box css={{ px: '$6', py: '$20', backgroundColor: '$backgroundContrast' }}>
         <Flex direction="column" align="center" css={{ gap: '$10' }}>
            <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
               <Text span css={{ color: '$blue600' }}>Our Team</Text>
               <Text h2>Meet the Experts</Text>
               <Text span css={{ color: '$accents8' }}>
                  The brilliant minds behind CUAstro's innovative technology
               </Text>
            </Box>
            <Flex css={{ gap: '$10' }} wrap="wrap" justify="center">
               {teamMembers.map((member, index) => (
                  <Box 
                     key={index}
                     css={{
                        width: '280px',
                        padding: '$10',
                        borderRadius: '$lg',
                        backgroundColor: '$background',
                        textAlign: 'center'
                     }}
                  >
                     <Box 
                        css={{
                           width: '120px',
                           height: '120px',
                           borderRadius: '50%',
                           overflow: 'hidden',
                           margin: '0 auto $6 auto',
                           backgroundColor: '$accents2'
                        }}
                     >
                        <img 
                           src={`/team/${member.pinyin.replace(/\s+/g, '-')}.jpg`}
                           alt={member.name}
                           style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover'
                           }}
                        />
                     </Box>
                     <Text h4 css={{ marginBottom: '$2' }}>{member.name}</Text>
                     <Text 
                        css={{ 
                           color: '$blue600',
                           marginBottom: '$4',
                           fontWeight: '$medium'
                        }}
                     >
                        {member.role}
                     </Text>
                     <Text css={{ color: '$accents8' }}>
                        {member.bio}
                     </Text>
                  </Box>
               ))}
            </Flex>
         </Flex>
      </Box>
   );
}; 