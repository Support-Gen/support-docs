import { Anchor, Card, Text, Title } from "@mantine/core";

const FeatureCard = ({ name, route } : { name: string, route: string}) => {
    return (
        <Anchor href={`docs/${route}`}>
            <Card withBorder={true} style={{ height: 120}}>
                <Text size="sm">Learn about</Text>
                <Title order={3}>{name}</Title>
            </Card>
        </Anchor>
    )
}

export default FeatureCard;