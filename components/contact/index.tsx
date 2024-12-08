import { Button, Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Contact = () => {
   return (
      <Box css={{ px: '$6', py: '$20' }}>
         <Flex
            direction="column"
            align="center"
            justify="center"
            css={{ gap: '$10' }}
         >
            <Box css={{ maxWidth: '600px', textAlign: 'center' }}>
               <Text h2>Get in Touch</Text>
               <Text span css={{ color: '$accents8' }}>
                  Interested in CUAstro for your indoor space? Contact us to learn
                  more about our autonomous drone solutions.
               </Text>
            </Box>
            <Flex css={{ gap: '$10' }} wrap="wrap" justify="center">
               <form style={{ width: '100%', maxWidth: '500px' }}>
                  <Flex direction="column" css={{ gap: '$8' }}>
                     <input
                        type="text"
                        placeholder="Name"
                        aria-label="Name"
                        style={{
                           padding: '12px',
                           borderRadius: '8px',
                           border: '1px solid #ccc',
                           width: '100%'
                        }}
                     />
                     <input
                        type="email"
                        placeholder="Email"
                        aria-label="Email"
                        style={{
                           padding: '12px',
                           borderRadius: '8px',
                           border: '1px solid #ccc',
                           width: '100%'
                        }}
                     />
                     <textarea
                        placeholder="Message"
                        aria-label="Message"
                        rows={4}
                        style={{
                           padding: '12px',
                           borderRadius: '8px',
                           border: '1px solid #ccc',
                           width: '100%',
                           resize: 'vertical'
                        }}
                     />
                     <Button 
                        css={{ 
                           backgroundColor: '$blue600',
                           color: 'white',
                           '&:hover': {
                              backgroundColor: '$blue700'
                           }
                        }}
                     >
                        Send Message
                     </Button>
                  </Flex>
               </form>
            </Flex>
         </Flex>
      </Box>
   );
}; 