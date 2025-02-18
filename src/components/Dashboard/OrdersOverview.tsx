import {
    Box,
    Text,
    Icon,
    Flex,
    ComponentWithAs,
    IconProps,
} from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import Timeline from './timeline';
import { IconType } from 'react-icons/lib';

type OrdersProps = {
    id: string;
    icon: ComponentWithAs<'svg', IconProps> | IconType;
    title: string;
    date: string;
    color: string;
};

type OrdersOverviewProps = {
    orders: OrdersProps[];
};

const OrdersOverview = ({ orders }: OrdersOverviewProps) => {
    return (
        <Box>
            {/* Header */}
            <Flex justify="space-between" align="center" mb={4}>
                <Text fontSize="lg" fontWeight="bold">
                    Orders Overview
                </Text>
                <Flex align="center" color="green.400">
                    <Icon as={FaArrowUp} mr={1} />
                    <Text fontSize="sm">+30% this month</Text>
                </Flex>
            </Flex>

            {/* Custom Timeline Component */}
            <Timeline items={orders} />
        </Box>
    );
};

export default OrdersOverview;
