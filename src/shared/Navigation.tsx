import { Anchor, Box, Group } from "@mantine/core";

const Navigation = () => {
    return (
        <Box component="nav" style={{ paddingBlock: 15 }}>
            <Group direction="row" position="apart">
                <Anchor>Product Guide</Anchor>
                <Group direction="row">
                    <Anchor>Home</Anchor>
                </Group>
            </Group>
        </Box>
    );
};

export default Navigation;