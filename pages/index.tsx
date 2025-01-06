import type { NextPage } from 'next';
import { Contact } from '../components/contact';
import { Features1 } from '../components/features1';
import { Applications } from '../components/features2';
import { Technology } from '../components/features3';
import { Footer } from '../components/footer';
import { Hero } from '../components/hero';
import { Layout } from '../components/navbar/layout';
import { Nav } from '../components/navbar/navbar';
import { Partners } from '../components/partners';
import { Achievements } from '../components/statistics';
import { Box } from '../components/styles/box';
import { Team } from '../components/team';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            <Box id="solutions">
               <Partners />
               <Features1 />
               <Applications />
            </Box>
            <Box id="technology">
               <Technology />
               <Achievements />
            </Box>
            <Box id="teams">
               <Team />
            </Box>
            <Box id="contact">
               <Contact />
            </Box>
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
