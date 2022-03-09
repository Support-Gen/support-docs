import { Autocomplete, Box, Card, Center, Text, SimpleGrid, Space, Title, Anchor, Breadcrumbs, Container, Group } from "@mantine/core";
import { NextPage } from "next";

const items = [
    { title: 'Product Guide', href: 'http://localhost:3000/docs/asd' },
    { title: 'Patients', href: 'http://localhost:3000/docs/asd' }
].map((item, index) => (
    <Anchor href={item.href} key={index}>
        {item.title}
    </Anchor>
));


const Overview: NextPage = () => {
    let module = {
        title: "Patients",
        description: "Manage patients easily.",
        features: [
            {
                title: "Search patients",
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
        <Container size={'lg'}>
            <Breadcrumbs>{items}</Breadcrumbs>
            <Title>{ module.title }</Title>
            <Text>{ module.description }</Text>
            <Group>
                {
                    module.features.map((feature, i) => {
                        return (
                            <Anchor key={i}>
                                <Card withBorder={true} style={{ height: 120, minWidth: 300}}>
                                    <Text size="sm">Learn how to</Text>
                                    <Title order={3}>{feature.title}</Title>
                                </Card>
                            </Anchor>
                        )
                    })
                }
            </Group>
        </Container>
    );
}

export default Overview;