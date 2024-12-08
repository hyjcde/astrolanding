import { Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Testimonials = () => {
   const testimonials = [
      {
         quote: "CUAstro has revolutionized our warehouse operations. The autonomous drones provide real-time inventory tracking that's both accurate and efficient.",
         author: "Sarah Johnson",
         position: "Operations Director",
         company: "Global Logistics Inc."
      },
      {
         quote: "The precision and reliability of CUAstro's indoor navigation system is impressive. It's transformed how we handle facility security.",
         author: "Michael Chen",
         position: "Security Manager",
         company: "SecureSpace Solutions"
      },
      {
         quote: "Implementation was smooth and the results were immediate. Our indoor mapping efficiency improved by 300%.",
         author: "David Wilson",
         position: "Project Lead",
         company: "BuildTech Construction"
      }
   ];

   return (
      <Box css={{ px: '$6', py: '$20' }}>
         <Flex direction="column" align="center" css={{ gap: '$10' }}>
            <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
               <Text span css={{ color: '$blue600' }}>Testimonials</Text>
               <Text h2>What Our Clients Say</Text>
               <Text span css={{ color: '$accents8' }}>
                  Real experiences from industry professionals
               </Text>
            </Box>
            <Flex css={{ gap: '$10' }} wrap="wrap" justify="center">
               {testimonials.map((testimonial, index) => (
                  <Box 
                     key={index}
                     css={{
                        width: '350px',
                        padding: '$12',
                        borderRadius: '$lg',
                        backgroundColor: '$backgroundContrast',
                        position: 'relative'
                     }}
                  >
                     <Text 
                        css={{ 
                           fontSize: '24px',
                           position: 'absolute',
                           top: '20px',
                           left: '20px',
                           color: '$blue600'
                        }}
                     >
                        "
                     </Text>
                     <Flex direction="column" css={{ gap: '$6' }}>
                        <Text 
                           css={{ 
                              color: '$accents8',
                              fontStyle: 'italic',
                              marginTop: '$6'
                           }}
                        >
                           {testimonial.quote}
                        </Text>
                        <Box css={{ marginTop: '$4' }}>
                           <Text b>{testimonial.author}</Text>
                           <Text css={{ color: '$accents8' }}>
                              {testimonial.position}
                           </Text>
                           <Text size="sm" css={{ color: '$blue600' }}>
                              {testimonial.company}
                           </Text>
                        </Box>
                     </Flex>
                  </Box>
               ))}
            </Flex>
         </Flex>
      </Box>
   );
};