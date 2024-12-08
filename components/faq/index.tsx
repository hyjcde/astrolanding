import { Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Faq = () => {
   const faqs = [
      {
         question: 'How does CUAstro navigate indoors without GPS?',
         answer: 'CUAstro uses advanced SLAM (Simultaneous Localization and Mapping) technology combined with multiple sensors including LiDAR, cameras, and IMUs to create real-time maps and navigate indoor spaces accurately.'
      },
      {
         question: 'What safety measures are in place?',
         answer: 'Our drones are equipped with multiple redundant safety systems, including obstacle avoidance sensors, fail-safe protocols, and emergency landing capabilities.'
      },
      {
         question: 'How long can the drones operate?',
         answer: 'Flight time varies by model, ranging from 8 hours for our basic model to 12+ hours for professional models, with quick-swap battery options available.'
      },
      {
         question: 'Can CUAstro integrate with existing systems?',
         answer: 'Yes, CUAstro is designed with open APIs and standard protocols, allowing seamless integration with existing security, inventory, and management systems.'
      }
   ];

   return (
      <Box css={{ px: '$6', py: '$20' }}>
         <Flex direction="column" align="center" css={{ gap: '$10' }}>
            <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
               <Text span css={{ color: '$blue600' }}>FAQ</Text>
               <Text h2>Common Questions</Text>
               <Text span css={{ color: '$accents8' }}>
                  Find answers to frequently asked questions about CUAstro
               </Text>
            </Box>
            <Flex 
               direction="column" 
               css={{ 
                  gap: '$10',
                  maxWidth: '800px',
                  width: '100%'
               }}
            >
               {faqs.map((faq, index) => (
                  <Box 
                     key={index}
                     css={{
                        padding: '$10',
                        borderRadius: '$lg',
                        backgroundColor: '$backgroundContrast'
                     }}
                  >
                     <Text h4 css={{ marginBottom: '$4' }}>
                        {faq.question}
                     </Text>
                     <Text css={{ color: '$accents8' }}>
                        {faq.answer}
                     </Text>
                  </Box>
               ))}
            </Flex>
         </Flex>
      </Box>
   );
};
