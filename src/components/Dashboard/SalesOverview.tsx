import { Box, Text, Image, HStack } from '@chakra-ui/react';
import SalesOverviewIcon from '../../assets/SalesOverview.svg';

const SalesOverview = () => {
    return (
        <Box className="salesOverviewContainer">
            <Text className="salesOverviewTitle">Sales overview</Text>
            <HStack>
                <Text className="profit">(+5) more</Text>
                <Text className="salesOverviewYear">in 2021</Text>
            </HStack>
            <Image
                src={SalesOverviewIcon}
                alt="Active Users Bar Chart"
                className="salesOverviewImage"
            />
        </Box>
    );
};
export default SalesOverview;
