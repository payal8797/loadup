import { Box, VStack, HStack, Icon, Text, Flex } from '@chakra-ui/react';

interface TimelineItemProps {
    icon: React.ElementType;
    title: string;
    date: string;
    color: string;
    isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    icon,
    title,
    date,
    color,
    isLast,
}) => {
    return (
        <HStack align="start" spacing={4} position="relative">
            {/* Icon inside a circle */}
            <Flex color={color} className="timelineIcons">
                <Icon as={icon} boxSize={4} />
            </Flex>

            {/* Vertical Line */}
            {!isLast && <Box className="timelineVerticalLines" />}

            {/* Content */}
            <Box>
                <Text fontWeight="bold">{title}</Text>
                <Text fontSize="sm" className="grey">
                    {date}
                </Text>
            </Box>
        </HStack>
    );
};

interface TimelineProps {
    items: {
        id: string;
        icon: React.ElementType;
        title: string;
        date: string;
        color: string;
    }[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
    return (
        <VStack className="timelineStack">
            {items.map((item, index) => (
                <TimelineItem
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    date={item.date}
                    color={item.color}
                    isLast={index === items.length - 1}
                />
            ))}
        </VStack>
    );
};

export default Timeline;
