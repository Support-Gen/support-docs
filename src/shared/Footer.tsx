import { Box, Center, Text } from "@mantine/core";

const Footer = () => {
    return (
        <Box component="footer" style={{ padding: 15 }}>
            <Center>
                <Text>
                    powered by product-docs-gen
                </Text>
            </Center>
        </Box>
    );
};

export default Footer;