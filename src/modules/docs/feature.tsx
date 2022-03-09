import { Autocomplete, Box, Card, Center, Text, SimpleGrid, Space, Title, Anchor, Container, Breadcrumbs, Group } from "@mantine/core";
import { NextPage } from "next";

const items = [
    { title: 'Product Guide', href: 'http://localhost:3000/docs/asd' },
    { title: 'Patients', href: 'http://localhost:3000/docs/asd' },
    { title: 'Patients', href: 'http://localhost:3000/docs/asd' }
].map((item, index) => (
    <Anchor href={item.href} key={index}>
        {item.title}
    </Anchor>
));

const Feature: NextPage = () => {

    let feature = {
        title: "Search patients",
        description: "Search patients by keywords.",
        steps: [
            {
                title: "Browser URL",
                description: `Navigate to "https://my.therapyapp.ch/patients"`
            }
        ]
    }
    
    return (
        <Container size={'lg'}>
            <Breadcrumbs>{items}</Breadcrumbs>
            <Title>{ feature.title }</Title>
            <Text>{ feature.description }</Text>
            <Group>
                {
                    feature.steps.map((step, i) => {
                        return (
                            <Box key={i}>
                                <Title>{i + 1}. {step.title}</Title>
                                <Text>{step.description}</Text>
                            </Box>
                        )
                    })
                }
            </Group>
        </Container>
    );
}

export default Feature;