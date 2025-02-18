import {
    Box,
    Flex,
    Input,
    IconButton,
    Spacer,
    Text,
    VStack,
    Button,
    InputGroup,
    InputLeftElement,
    Icon,
} from '@chakra-ui/react';
import { BellIcon, SettingsIcon } from '@chakra-ui/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiSearch, FiUser } from 'react-icons/fi';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const pageTitles: Record<string, string> = {
        '/': 'Dashboard',
        '/tables': 'Tables',
        '/billing': 'Billing',
        '/rtl': 'RTL',
        '/profile': 'Profile',
        '/signin': 'Sign In',
        '/signup': 'Sign Up',
    };

    const currentPage = pageTitles[location.pathname] || 'Dashboard';

    return (
        <Flex className="navbar">
            <VStack className="navbarTitle" align="start">
                <Text className="fontSize-14">Pages / {currentPage}</Text>
                <Text className="navbarCurrentPage bold">{currentPage}</Text>
            </VStack>
            <Spacer />

            <Box className="navbarSearchBar">
                <InputGroup size="sm">
                    <InputLeftElement pointerEvents="none">
                        <Icon as={FiSearch} color="gray.400" />
                    </InputLeftElement>
                    <Input
                        placeholder="Type here..."
                        backgroundColor={'white'}
                    />
                </InputGroup>
            </Box>

            <Button
                leftIcon={<FiUser />}
                variant="ghost"
                className="grey"
                onClick={() => navigate('/signin')}
            >
                Sign In
            </Button>

            <IconButton
                aria-label="Settings"
                icon={<SettingsIcon />}
                variant="ghost"
                className="grey"
            />

            <IconButton
                aria-label="Notifications"
                icon={<BellIcon />}
                variant="ghost"
                className="grey"
            />
        </Flex>
    );
};

export default Navbar;
