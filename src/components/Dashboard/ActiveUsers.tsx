import {
    Box,
    Flex,
    Text,
    Stat,
    StatLabel,
    StatNumber,
    Image,
    HStack,
    Divider,
} from '@chakra-ui/react';
import ActiveUsersIcon from '../../assets/ActiveUsers.svg';
import { JSX } from 'react';

type ActiveUsersDataProps = {
    title: string;
    value: string;
    icon: JSX.Element;
};

type ActiveUsersProps = {
    activeUsersData: ActiveUsersDataProps[];
};

const ActiveUsers = ({ activeUsersData }: ActiveUsersProps) => {
    return (
        <Box className="container">
            <Image src={ActiveUsersIcon} alt="Active Users Bar Chart" mb={4} />
            <Text className="title">Active Users</Text>
            <HStack>
                <Text className={`subtext fontSize-16 profit`}>(+23)</Text>
                <Text className={`subtext fontSize-16 grey`}>
                    than last week
                </Text>
            </HStack>
            <Flex mt={4} justifyContent="space-between">
                {activeUsersData.map((item, index) => (
                    <Stat color={'black'} key={index}>
                        <HStack>
                            <Box className="statBox tealBackground">
                                {item.icon}
                            </Box>
                            <StatLabel>{item.title}</StatLabel>
                        </HStack>
                        <StatNumber>{item.value}</StatNumber>
                        <Divider className="divider" />
                    </Stat>
                ))}
            </Flex>
        </Box>
    );
};

export default ActiveUsers;
