import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box as="footer" className="footer">
            <Flex className="footerContainer">
                <Text className="footerText fontSize-14">
                    © 2021, Made with ❤️ by &nbsp;
                    <Link
                        href="https://www.creative-tim.com"
                        className="footerLinkExternal"
                        isExternal
                    >
                        Creative Tim &&nbsp;
                    </Link>
                    <Link
                        href="https://www.simmmple.com"
                        className="footerLinkExternal"
                        isExternal
                    >
                        Simmmple&nbsp;
                    </Link>
                    for a better web
                </Text>

                <Flex className="footerRight">
                    <Link
                        href="https://www.creative-tim.com"
                        className="footerLink fontSize-14"
                        isExternal
                    >
                        Creative Tim
                    </Link>
                    <Link
                        href="https://www.simmmple.com"
                        className="footerLink fontSize-14"
                        isExternal
                    >
                        Simmmple
                    </Link>
                    <Link href="#" className="footerLink fontSize-14">
                        Blog
                    </Link>
                    <Link href="#" className="footerLink fontSize-14">
                        License
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
