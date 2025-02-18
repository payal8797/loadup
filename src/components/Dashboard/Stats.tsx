import {
    SimpleGrid,
    Stat,
    StatLabel,
    Box,
    Flex,
    HStack,
    Text,
} from '@chakra-ui/react';
import { FaShoppingCart, FaWallet, FaGlobe } from 'react-icons/fa';
import { FaFileLines } from 'react-icons/fa6';

const Stats = () => {
    const data = [
        {
            title: "Today's Money",
            value: '$53,000',
            icon: <FaWallet size={22.5} />,
            className: 'profit',
            percentage: '+55%',
        },
        {
            title: "Today's Users",
            value: '2,300',
            icon: <FaGlobe size={22.5} />,
            className: 'profit',
            percentage: '+5%',
        },
        {
            title: 'New Clients',
            value: '+3,052',
            icon: <FaFileLines size={22.5} />,
            className: 'loss',
            percentage: '-14%',
        },
        {
            title: 'Total Sales',
            value: '$173,000',
            icon: <FaShoppingCart size={22.5} />,
            className: 'profit',
            percentage: '+8%',
        },
    ];

    return (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4} w="100%">
            {data.map((item, index) => (
                <Stat className="stat" key={index}>
                    <Flex
                        className="statContent"
                        justify="space-between"
                        align="center"
                        flexWrap="wrap"
                    >
                        <Box>
                            <StatLabel className="grey">{item.title}</StatLabel>
                            <HStack>
                                <Text className="statValue fontSize-16 bold">
                                    {item.value}
                                </Text>
                                <Text
                                    className={`statValue fontSize-16 ${item.className}`}
                                >
                                    {item.percentage}
                                </Text>
                            </HStack>
                        </Box>
                        <Box className="iconBox tealBackground">
                            {item.icon}
                        </Box>
                    </Flex>
                </Stat>
            ))}
        </SimpleGrid>
    );
};

export default Stats;
