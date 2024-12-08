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
                        Solutions
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="CUAstro solutions"
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
                     <Dropdown.Item
                        key="warehouse"
                        showFullDescription
                        description="Automated inventory tracking and infrastructure inspection in warehouses."
                        icon={icons.scale}
                     >
                        Warehouse Automation
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="security"
                        showFullDescription
                        description="Autonomous patrol and monitoring for enhanced security coverage."
                        icon={icons.activity}
                     >
                        Security Surveillance
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="inspection"
                        showFullDescription
                        description="Detailed infrastructure inspection and monitoring solutions."
                        icon={icons.flash}
                     >
                        Infrastructure Inspection
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="events"
                        showFullDescription
                        description="Dynamic aerial coverage for indoor events and exhibitions."
                        icon={icons.server}
                     >
                        Event Coverage
                     </Dropdown.Item>
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
