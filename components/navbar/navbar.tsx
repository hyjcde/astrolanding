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
                           key="radar"
                           showFullDescription
                           description="Custom Modified LiDAR System for Indoor Navigation"
                           icon={icons.scale}
                        >
                           LiDAR System
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="cooling"
                           showFullDescription
                           description="Advanced Computer Cooling System"
                           icon={icons.activity}
                        >
                           Cooling System
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="jetson"
                           showFullDescription
                           description="Jetson Orin - Edge Computing Platform"
                           icon={icons.flash}
                        >
                           Jetson Orin
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="rk3588"
                           showFullDescription
                           description="RK3588 - High Performance Computing Board"
                           icon={icons.server}
                        >
                           RK3588
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="frame"
                           showFullDescription
                           description="Custom Designed Drone Frame"
                           icon={icons.scale}
                        >
                           Drone Frame
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="controller"
                           showFullDescription
                           description="Flight Control System"
                           icon={icons.activity}
                        >
                           Flight Controller
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="battery"
                           showFullDescription
                           description="High-Performance Battery System"
                           icon={icons.flash}
                        >
                           Battery System
                        </Dropdown.Item>
                     </Dropdown.Section>

                     <Dropdown.Section title="Software">
                        <Dropdown.Item
                           key="slam"
                           showFullDescription
                           description="SLAM System for Indoor Navigation"
                           icon={icons.server}
                        >
                           SLAM System
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="positioning"
                           showFullDescription
                           description="Precise Indoor Positioning System"
                           icon={icons.scale}
                        >
                           Positioning
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="mapping"
                           showFullDescription
                           description="Real-time Mapping Technology"
                           icon={icons.activity}
                        >
                           Mapping
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="ground"
                           showFullDescription
                           description="Ground Control Station Interface"
                           icon={icons.flash}
                        >
                           Ground Station
                        </Dropdown.Item>
                        <Dropdown.Item
                           key="reconstruction"
                           showFullDescription
                           description="3D Environment Reconstruction"
                           icon={icons.server}
                        >
                           3D Reconstruction
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
