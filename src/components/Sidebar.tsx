import {
    Box,
    Icon,
    Link,
    Text,
    Button,
    Divider,
    Flex,
    Image,
} from '@chakra-ui/react';
import { FaChartBar, FaFile, FaRocket, FaWrench } from 'react-icons/fa';
import { FiHome, FiCreditCard, FiUser, FiHelpCircle } from 'react-icons/fi';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PurityLogo from '../assets/PurityLogo.svg';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        {
            links: [
                { name: 'Dashboard', icon: FiHome, path: '/' },
                { name: 'Tables', icon: FaChartBar, path: '/tables' },
                { name: 'Billing', icon: FiCreditCard, path: '/billing' },
                { name: 'RTL', icon: FaWrench, path: '/rtl' },
            ],
        },
        {
            section: 'ACCOUNT PAGES',
            links: [
                { name: 'Profile', icon: FiUser, path: '/profile' },
                { name: 'Sign In', icon: FaFile, path: '/signin' },
                { name: 'Sign Up', icon: FaRocket, path: '/signup' },
            ],
        },
    ];

    return (
        <Box className="sidebar">
            <Flex className="sidebarHeader">
                <Image
                    src={PurityLogo}
                    alt="Purity UI Logo"
                    className="sidebarLogo"
                />
                <Text className="sidebarTitle bold">PURITY UI DASHBOARD</Text>
            </Flex>
            <Divider className="sidebarDivider" />

            {menuItems.map((menu, index) => (
                <Box className="sidebarDivider" key={index}>
                    {menu.section && (
                        <Text className="sidebarSectionTitle bold fontSize-14">
                            {menu.section}
                        </Text>
                    )}
                    {menu.links.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                as={RouterLink}
                                to={item.path}
                                key={item.name}
                                className={`sidebarLink bold fontSize-14 ${isActive ? 'sidebarLinkActive' : ''}`}
                            >
                                <Box
                                    className={`sidebarIconWrapper ${
                                        isActive ? 'tealBackground' : ''
                                    }`}
                                >
                                    <Icon
                                        as={item.icon}
                                        className="fontSize-16"
                                        color={isActive ? 'white' : '#4FD1C5'}
                                    />
                                </Box>
                                {item.name}
                            </Link>
                        );
                    })}
                </Box>
            ))}

            <Box className="sidebarHelpCard tealBackground">
                <Icon as={FiHelpCircle} fontSize="2xl" mb="2" />
                <Text fontSize="sm">Need help?</Text>
                <Text fontSize="xs" mb="3">
                    Please check our docs
                </Text>
                <Button size="sm" color={'black'} bg={'white'}>
                    DOCUMENTATION
                </Button>
            </Box>
        </Box>
    );
};

export default Sidebar;
