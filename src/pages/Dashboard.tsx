import { Box, Flex, VStack } from '@chakra-ui/react';
import Stats from '../components/Dashboard/Stats';
import ActiveUsers from '../components/Dashboard/ActiveUsers';
import SalesOverview from '../components/Dashboard/SalesOverview';
import PurityUIDashboardCard from '../components/Dashboard/PurityUIDashboardCard';
import ImageWithTextOverlay from '../components/Dashboard/ImageWithTextOverlay';
import ProjectsTable from '../components/Tables/ProjectsTable';
import OrdersOverview from '../components/Dashboard/OrdersOverview';
import { ReactNode } from 'react';
import {
    FaAtlassian,
    FaSlack,
    FaSpotify,
    FaLinkedin,
    FaCreditCard,
    FaDropbox,
    FaShoppingCart,
    FaRocket,
    FaWallet,
} from 'react-icons/fa';
import { SiAdobexd } from 'react-icons/si';
import { BellIcon } from '@chakra-ui/icons';
import { FiSettings } from 'react-icons/fi';
import React from 'react';

interface DashboardSectionProps {
    children: ReactNode[];
    flexValues: number[];
}

const DashboardSection = ({ children, flexValues }: DashboardSectionProps) => {
    return (
        <Flex
            direction={{ base: 'column', lg: 'row' }}
            className="dashboardSection"
        >
            {React.Children.map(children, (child, index) => (
                <Box
                    key={index}
                    className={`dashboardBox ${index === 0 ? 'dashboardBoxActive' : ''}`}
                    style={{ flex: flexValues[index] }}
                >
                    {child}
                </Box>
            ))}
        </Flex>
    );
};

const projectsData = [
    {
        id: 1,
        company: 'Chakra Soft UI Version',
        logo: <SiAdobexd size={30} />,
        members: [
            'https://i.pravatar.cc/40?img=1',
            'https://i.pravatar.cc/40?img=2',
            'https://i.pravatar.cc/40?img=3',
        ],
        budget: '$14,000',
        completion: 60,
    },
    {
        id: 2,
        company: 'Add Progress Track',
        logo: <FaAtlassian size={30} />,
        members: ['https://i.pravatar.cc/40?img=4'],
        budget: '$3,000',
        completion: 10,
    },
    {
        id: 3,
        company: 'Fix Platform Errors',
        logo: <FaSlack size={30} />,
        members: ['https://i.pravatar.cc/40?img=5'],
        budget: 'Not set',
        completion: 100,
    },
    {
        id: 4,
        company: 'Launch our Mobile App',
        logo: <FaSpotify size={30} />,
        members: [
            'https://i.pravatar.cc/40?img=6',
            'https://i.pravatar.cc/40?img=7',
        ],
        budget: '$32,000',
        completion: 100,
    },
    {
        id: 5,
        company: 'Add the New Pricing Page',
        logo: <FaAtlassian size={30} />,
        members: [
            'https://i.pravatar.cc/40?img=8',
            'https://i.pravatar.cc/40?img=9',
        ],
        budget: '$400',
        completion: 25,
    },
    {
        id: 6,
        company: 'Redesign New Online Shop',
        logo: <FaLinkedin size={30} />,
        members: [
            'https://i.pravatar.cc/40?img=10',
            'https://i.pravatar.cc/40?img=11',
        ],
        budget: '$7,600',
        completion: 40,
    },
];

const activeUsersData = [
    {
        title: 'Users',
        value: '32,984',
        icon: <FaWallet size={12.5} />,
    },
    {
        title: 'Clicks',
        value: '2.42m',
        icon: <FaRocket size={12.5} />,
    },
    {
        title: 'Sales',
        value: '2,400$',
        icon: <FaShoppingCart size={12.5} />,
    },
    {
        title: 'Items',
        value: '320',
        icon: <FiSettings size={12.5} />,
    },
];

const orders = [
    {
        id: '1',
        icon: BellIcon,
        title: '$2400, Design changes',
        date: '22 DEC 7:20 PM',
        color: 'teal.400',
    },
    {
        id: '2',
        icon: FaShoppingCart,
        title: 'New order #4219423',
        date: '21 DEC 11:21 PM',
        color: 'red.400',
    },
    {
        id: '3',
        icon: FaShoppingCart,
        title: 'Server Payments for April',
        date: '21 DEC 9:28 PM',
        color: 'blue.400',
    },
    {
        id: '4',
        icon: FaCreditCard,
        title: 'New card added for order #3210145',
        date: '20 DEC 3:52 PM',
        color: 'orange.400',
    },
    {
        id: '5',
        icon: FaDropbox,
        title: 'Unlock packages for Development',
        date: '19 DEC 11:35 PM',
        color: 'purple.400',
    },
    {
        id: '6',
        icon: SiAdobexd,
        title: 'New order #9851258',
        date: '18 DEC 4:41 PM',
        color: 'pink.400',
    },
];
const Dashboard = () => {
    return (
        <VStack width="100%">
            <Stats />

            {/* Purity Card & Image */}
            <DashboardSection flexValues={[6, 4]}>
                <PurityUIDashboardCard key="purityCard" />
                <ImageWithTextOverlay key="imageOverlay" />
            </DashboardSection>

            {/* Active Users & Sales Overview */}
            <DashboardSection flexValues={[4, 6]}>
                <ActiveUsers
                    key="activeUsers"
                    activeUsersData={activeUsersData}
                />
                <SalesOverview key="salesOverview" />
            </DashboardSection>

            {/* Projects Table & Orders Overview */}
            <DashboardSection flexValues={[7, 3]}>
                <ProjectsTable key="projectsTable" projects={projectsData} />
                <OrdersOverview key="ordersOverview" orders={orders} />
            </DashboardSection>
        </VStack>
    );
};
export default Dashboard;
