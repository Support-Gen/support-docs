import {
  Autocomplete,
  Box,
  Card,
  Center,
  Text,
  SimpleGrid,
  Space,
  Title,
  Anchor,
  Container,
  Breadcrumbs,
  Group,
  Grid,
  Image,
  Accordion,
  SegmentedControl,
} from "@mantine/core";
import { NextPage } from "next";

const AccordionLabel = ({ index, title }: { index: number; title: string }) => {
  return (
    <Group direction="row">
      <Text style={{ fontSize: "24px", fontWeight: 700 }}>{index}</Text>
      <Title order={2}>{title}</Title>
    </Group>
  );
};

const Feature: NextPage = () => {
  let feature = {
    title: "Search patients",
    description: "Search patients by keywords.",
    route: "search-patients",
    steps: [
      {
        title: "Navigate to patients",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
      },
    ],
  };

  return (
    <>
      <Title mb={"xs"}>{feature.title}</Title>
      <Text mb={"lg"}>{feature.description}</Text>
      <SegmentedControl
        mb={"lg"}
        data={[
          { value: "web", label: "Web" },
          { value: "mobile", label: "Mobile" },
        ]}
      />
      {feature.steps.map((step, i) => {
        return (
            <SimpleGrid cols={2} key={i}>
                <div>
                    <Title order={2}>{i + 1} {step.title}</Title>
                    <Text mb={"lg"}>{step.description}</Text>
                </div>
                <div>
                    <Image
                        src="/example-page-1.png"
                        alt="example img"
                        radius="lg"
                    ></Image>
                </div>
            </SimpleGrid>
        );
      })}
    </>
  );
};

export default Feature;
