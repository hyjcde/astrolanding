import { Button, Text } from '@nextui-org/react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Solutions = () => {
   const plans = [
      {
         name: 'Basic',
         price: '999',
         features: [
            'Single drone operation',
            'Basic autonomous navigation',
            'Real-time monitoring',
            'Standard support',
            '8 hours battery life',
            'Basic analytics dashboard'
         ]
      },
      {
         name: 'Professional',
         price: '2499',
         popular: true,
         features: [
            'Multi-drone fleet management',
            'Advanced path planning',
            'Real-time 3D mapping',
            'Priority 24/7 support',
            '12 hours battery life',
            'Advanced analytics & reporting'
         ]
      },
      {
         name: 'Enterprise',
         price: 'Custom',
         features: [
            'Custom fleet size',
            'Custom AI models',
            'Full system integration',
            'Dedicated support team',
            'Extended battery options',
            'Custom analytics solutions'
         ]
      }
   ];

   return (
      <Box css={{ px: '$6', py: '$20' }}>
         <Flex direction="column" align="center" css={{ gap: '$10' }}>
            <Box css={{ maxWidth: '800px', textAlign: 'center' }}>
               <Text span css={{ color: '$blue600' }}>Pricing</Text>
               <Text h2>Solutions for Every Scale</Text>
               <Text span css={{ color: '$accents8' }}>
                  Choose the perfect plan for your indoor autonomous needs
               </Text>
            </Box>
            <Flex 
               css={{ gap: '$10' }} 
               wrap="wrap" 
               justify="center"
               align="stretch"
            >
               {plans.map((plan, index) => (
                  <Box 
                     key={index}
                     css={{
                        width: '300px',
                        padding: '$10',
                        borderRadius: '$lg',
                        backgroundColor: plan.popular ? '$blue50' : '$backgroundContrast',
                        border: plan.popular ? '2px solid $blue600' : 'none',
                        position: 'relative'
                     }}
                  >
                     {plan.popular && (
                        <Box 
                           css={{
                              position: 'absolute',
                              top: '-12px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              backgroundColor: '$blue600',
                              color: 'white',
                              padding: '$2 $6',
                              borderRadius: '$pill',
                              fontSize: '14px'
                           }}
                        >
                           Most Popular
                        </Box>
                     )}
                     <Flex direction="column" css={{ gap: '$6' }}>
                        <Text h3 css={{ textAlign: 'center' }}>{plan.name}</Text>
                        <Flex align="center" justify="center" css={{ gap: '$2' }}>
                           <Text span css={{ fontSize: '24px' }}>$</Text>
                           <Text h2 css={{ margin: 0 }}>{plan.price}</Text>
                           {plan.price !== 'Custom' && <Text span>/month</Text>}
                        </Flex>
                        <Box css={{ my: '$8' }}>
                           {plan.features.map((feature, idx) => (
                              <Flex 
                                 key={idx} 
                                 css={{ gap: '$3', mb: '$4' }}
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
                                 <Text size="sm">{feature}</Text>
                              </Flex>
                           ))}
                        </Box>
                        <Button 
                           css={{ 
                              backgroundColor: plan.popular ? '$blue600' : '$gray200',
                              color: plan.popular ? 'white' : '$text',
                              '&:hover': {
                                 backgroundColor: plan.popular ? '$blue700' : '$gray300'
                              }
                           }}
                        >
                           Get Started
                        </Button>
                     </Flex>
                  </Box>
               ))}
            </Flex>
         </Flex>
      </Box>
   );
};
