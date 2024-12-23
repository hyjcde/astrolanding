import { Button, Dropdown, Link, Navbar, Switch, Text, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { icons } from './icons';
import { AcmeLogo } from './logo';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark} = useTheme();
   const collapseItems = [
      'Solutions',
      'Technology',
      'Teams',
      'Price',
      'Contact',
   ];

   const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <Navbar
         isBordered
         css={{
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'right': 0,
            'overflow': 'hidden',
            'zIndex': 999,
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
               CUAstro
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        Products
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="Hardware and Software Products"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Section title="Hardware">
                        <Dropdown.Item
                           key="thunder"
                           showFullDescription
                           description="Thunder Series - Custom Modified Drone Platform"
                           icon={icons.scale}
                        >
                           Thunder Platform
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="cooling"
                           showFullDescription
                           description="Advanced Cooling System for Computing Units"
                           icon={icons.activity}
                        >
                           Cooling System
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="jetson"
                           showFullDescription
                           description="Jetson Orin - High Performance Computing Board"
                           icon={icons.flash}
                        >
                           Jetson Orin
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="px4"
                           showFullDescription
                           description="PX4-based Flight Control System"
                           icon={icons.server}
                        >
                           PX4 Controller
                        </Dropdown.Item>
                     </Dropdown.Section>

                     <Dropdown.Section title="Software">
                        <Dropdown.Item
                           key="slam"
                           showFullDescription
                           description="SLAM System for Indoor Navigation & Positioning"
                           icon={icons.scale}
                        >
                           SLAM System
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="mapping"
                           showFullDescription
                           description="3D Reconstruction & Mapping Technology"
                           icon={icons.activity}
                        >
                           3D Mapping
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="ground"
                           showFullDescription
                           description="Ground Station Control Interface"
                           icon={icons.flash}
                        >
                           Ground Station
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="control"
                           showFullDescription
                           description="Flight Control & Path Planning System"
                           icon={icons.server}
                        >
                           Flight Control
                        </Dropdown.Item>
                     </Dropdown.Section>
                  </Dropdown.Menu>
               </Dropdown>
               <Navbar.Link 
                  href="#technology" 
                  onClick={(e) => scrollToSection(e, 'technology')}
               >
                  Technology
               </Navbar.Link>
               <Navbar.Link 
                  href="#teams" 
                  onClick={(e) => scrollToSection(e, 'teams')}
               >
                  Teams
               </Navbar.Link>
               <Navbar.Link 
                  href="#price" 
                  onClick={(e) => scrollToSection(e, 'price')}
               >
                  Price
               </Navbar.Link>
               <Navbar.Link 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
               >
                  Contact
               </Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href={`#${item.toLowerCase()}`}
                     onClick={(e) => scrollToSection(e, item.toLowerCase())}
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>

         <Navbar.Content>
            <Navbar.Item>
               <Button auto flat>
                  Schedule Demo
               </Button>
            </Navbar.Item>
            <Navbar.Item>
               <Button auto>
                  Contact Sales
               </Button>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
