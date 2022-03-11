import { Autocomplete, Box, Card, Center, Text, SimpleGrid, Space, Title, Anchor, Breadcrumbs, Container, Group } from "@mantine/core";
import { NextPage } from "next";


const Overview: NextPage = () => {
    let module = {
        title: "Patients",
        description: "Manage patients easily.",
        features: [
            {
                title: "Search patients",
                route: "search-patients",
                description: "Search patients by keywords.",
                steps: [
                    {
                        title: "Browser URL",
                        description: `Navigate to "https://my.therapyapp.ch/patients"`
                    }
                ]
            },
            {
                title: "Add patients",
                route: "add-patients",
                description: "Add a new patient",
                steps: [
                    {
                        title: "Browser URL",
                        description: `Navigate to "https://my.therapyapp.ch/patients/new"`
                    }
                ]
            },
        ]
    }

    return (
        <>
            <Title>{ module.title }</Title>
            <Text mb={'lg'}>{ module.description }</Text>
            <Group>
                {
                    module.features.map((feature, i) => {
                        return (
                            <Anchor key={i} href={`/docs/patients/${feature.route}`}>
                                <Card withBorder={true} style={{ height: 120, minWidth: 300}}>
                                    <Text size="sm">Learn how to</Text>
                                    <Title order={3}>{feature.title}</Title>
                                </Card>
                            </Anchor>
                        )
                    })
                }
            </Group>
        </>
    );
}

export default Overview;