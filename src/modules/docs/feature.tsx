import { Autocomplete, Box, Card, Center, Text, SimpleGrid, Space, Title, Anchor, Container, Breadcrumbs, Group } from "@mantine/core";
import { NextPage } from "next";

const Feature: NextPage = () => {

    let feature = {
        title: "Search patients",
        description: "Search patients by keywords.",
        route: "search-patients",
        steps: [
            {
                title: "Browser URL",
                description: `Navigate to "https://my.therapyapp.ch/patients"`
            }
        ]
    }
    
    return (
        <>
            <Title>{ feature.title }</Title>
            <Text mb={'lg'}>{ feature.description }</Text>
            <Group>
                {
                    feature.steps.map((step, i) => {
                        return (
                            <Group key={i} direction={'row'}>
                                <Box>
                                    <Title>{i + 1}. {step.title}</Title>
                                    <Text>{step.description}</Text>
                                </Box>
                                <Box>
                                    a
                                </Box>
                            </Group>
                        )
                    })
                }
            </Group>
        </>
    );
}

export default Feature;