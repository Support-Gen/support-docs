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
  Stack,
  Accordion,
  SegmentedControl,
} from "@mantine/core";
import { NextPage } from "next";

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
      {/* <Grid>
        <Grid.Col span={5}> */}
          <div>
            {feature.steps.map((step, i) => {
                return (
                <div key={i}>
                    <Title order={2}>
                    {i + 1} {step.title}
                    </Title>
                    <Text mb={"lg"}>{step.description}</Text>
                </div>
                );
            })}
          </div>
        {/* </Grid.Col> */}
        {/* <Grid.Col span={7}>
          <Stack align={'center'}>
            <div>
              <SegmentedControl
                mb={"md"}
                data={[
                  { value: "web", label: "Web" },
                  { value: "mobile", label: "Mobile" },
                ]}
              />
            </div>
            <Box
              sx={() => ({
                borderRadius: '20px',
                boxShadow: '0px 8px 18px #00000020'
              })}
            >
              <Image
                src="/example-page-1.png"
                alt="example img"
                radius={'lg'}
              ></Image>
            </Box>
          </Stack>
        </Grid.Col> */}
      {/* </Grid> */}
    </>
  );
};

export default Feature;
