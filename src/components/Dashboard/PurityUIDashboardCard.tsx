import {
    Box,
    Text,
    Heading,
    Button,
    Flex,
    Image,
    Spacer,
} from '@chakra-ui/react';
import ChakraIcon from '../../assets/Chakra.svg';
import { FaArrowRight } from 'react-icons/fa';

const PurityUIDashboardCard = () => {
    return (
        <Flex className="cardContainer">
            <Box className="textSection">
                <Text className="grey fontSize-14">Built by developers</Text>
                <Heading className="title">Purity UI Dashboard</Heading>
                <Text className="description fontSize-14">
                    From colors, cards, typography to complex elements,
                    <br /> you will find the full documentation.
                </Text>
                <Spacer />
                <Button
                    rightIcon={<FaArrowRight />}
                    variant="link"
                    className="readMoreButton"
                >
                    Read more
                </Button>
            </Box>

            <Box className="imageSection">
                <Image
                    src={ChakraIcon}
                    alt="Chakra UI Logo"
                    className="chakraLogo"
                />
            </Box>
        </Flex>
    );
};

export default PurityUIDashboardCard;
