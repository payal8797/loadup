import { Box, Text, Button, Image, Flex } from '@chakra-ui/react';
import PeopleWorking from '../../assets/PeopleWorking.svg';
import { FaArrowRight } from 'react-icons/fa';

const ImageWithTextOverlay = () => {
    return (
        <Box className="imageContainer">
            {/* Background Image */}
            <Image
                src={PeopleWorking}
                alt="Work with the Rockets"
                className="backgroundImage"
            />

            {/* Text Content */}
            <Flex className="textOverlay">
                <Text className="font-125 bold marginTop ">
                    Work with the Rockets
                </Text>
                <Text className="textNormal fontSize-14">
                    Wealth creation is an evolutionarily recent positive-sum
                    game. It is all about who takes the opportunity first.
                </Text>

                {/* Read More Button */}
                <Button
                    rightIcon={<FaArrowRight />}
                    colorScheme="transparent"
                    size="sm"
                    className="readMoreButton"
                >
                    Read more
                </Button>
            </Flex>
        </Box>
    );
};

export default ImageWithTextOverlay;
