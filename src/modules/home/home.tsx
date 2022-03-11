import { Autocomplete, Box, Card, Center, Text, SimpleGrid, Space, Title, Anchor } from "@mantine/core";
import { NextPage } from "next";
import FeatureCard from "./featureAnchor";

const features = [
    {
        name: "Feature 1",
        route: "feature-1"
    },
    {
        name: "Feature 2",
        route: "feature-2"
    },
    {
        name: "Feature 3",
        route: "feature-3"
    },
    {
        name: "Feature 4",
        route: "feature-4"
    },
]

const Home: NextPage = () => {
    return (
        <Box>
            <Space h={100}></Space>
            <Center style={{ marginBottom: 24}}>
                <Title>Need help?</Title>
            </Center>
            <Autocomplete
                style={{ marginBottom: 64}}
                size='xl'
                placeholder="Type your issue here..."
                data={['How to setup an account?', 'How to create a new object?']}
            />
            <SimpleGrid cols={2}>
                {features.map(function(feature, i){
                    return <FeatureCard key={i} {...feature}></FeatureCard>
                })}
            </SimpleGrid>
        </Box>
    );
}

export default Home;