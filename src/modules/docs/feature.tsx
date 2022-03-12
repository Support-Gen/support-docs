import { Autocomplete, Box, Card, Center, Text, SimpleGrid, Space, Title, Anchor, Container, Breadcrumbs, Group, Grid, Image, Accordion, SegmentedControl } from "@mantine/core";
import { NextPage } from "next";

const AccordionLabel = ({ index, title } : {index: number, title: string}) => {
    return (
        <Group direction="row">
            <Text style={{ fontSize: '24px', fontWeight: 700 }}>{index}</Text>
            <Title order={2}>{title}</Title>
        </Group>
    );
}

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
            <Title mb={'xs'}>{ feature.title }</Title>
            <Text mb={'lg'}>{ feature.description }</Text>
            <SegmentedControl data={[
                { value: 'web', label: 'Web' },
                { value: 'mobile', label: 'Mobile' }
            ]} />

            <Accordion offsetIcon={false} iconPosition="right" initialItem={0} multiple={true}>
                {
                    feature.steps.map((step, i) => {
                        return (
                            <Accordion.Item key={i} label={<AccordionLabel index={i + 1} title={step.title}></AccordionLabel>}>
                                <Title order={2}></Title>
                                <Text>{step.description}</Text>
                                <Image src="/example-page-1.png" alt="example img" radius="lg"></Image>
                            </Accordion.Item>
                        )
                    })
                }
            </Accordion>
        </>
    );
}

export default Feature;