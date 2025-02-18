import { Box } from '@chakra-ui/react';
import { FaAtlassian, FaSlack, FaSpotify, FaLinkedin } from 'react-icons/fa';
import { SiAdobexd } from 'react-icons/si';
import ProjectsTable from '../components/Tables/ProjectsTable';
import AuthorsTable from '../components/Tables/AuthorsTable';

const Tables = () => {
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

    const authorsData = [
        {
            name: 'Esthera Jackson',
            email: 'esthera@simmple.com',
            role: 'Manager',
            department: 'Organization',
            status: 'Online',
            date: '14/06/21',
            avatar: 'https://i.pravatar.cc/40?img=1',
        },
        {
            name: 'Alexa Liras',
            email: 'alexa@simmple.com',
            role: 'Programmer',
            department: 'Developer',
            status: 'Offline',
            date: '14/06/21',
            avatar: 'https://i.pravatar.cc/40?img=2',
        },
        {
            name: 'Laurent Michael',
            email: 'laurent@simmple.com',
            role: 'Executive',
            department: 'Projects',
            status: 'Online',
            date: '14/06/21',
            avatar: 'https://i.pravatar.cc/40?img=3',
        },
        {
            name: 'Freduardo Hill',
            email: 'freduardo@simmple.com',
            role: 'Manager',
            department: 'Organization',
            status: 'Online',
            date: '14/06/21',
            avatar: 'https://i.pravatar.cc/40?img=4',
        },
        {
            name: 'Daniel Thomas',
            email: 'daniel@simmple.com',
            role: 'Programmer',
            department: 'Developer',
            status: 'Offline',
            date: '14/06/21',
            avatar: 'https://i.pravatar.cc/40?img=5',
        },
        {
            name: 'Mark Wilson',
            email: 'mark@simmple.com',
            role: 'Designer',
            department: 'UI/UX Design',
            status: 'Offline',
            date: '14/06/21',
            avatar: 'https://i.pravatar.cc/40?img=6',
        },
    ];

    return (
        <>
            <Box className="dashboardBox container">
                <AuthorsTable authors={authorsData} />
            </Box>
            <Box className="dashboardBox">
                <ProjectsTable projects={projectsData} />
            </Box>
        </>
    );
};

export default Tables;
