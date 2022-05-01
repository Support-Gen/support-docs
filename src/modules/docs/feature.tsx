import { ClassNames, ThemeContext } from "@emotion/react";
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
  createStyles,
} from "@mantine/core";
import { NextPage } from "next";
import { TableOfContentsFloating } from "../../shared/TableOfContents";

const Feature: NextPage = () => {
  let feature = {
    label: "Search patients",
    description: "Search patients by keywords.",
    route: "search-patients",
    steps: [
      {
        label: "Navigate to patients",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#navigate"
      },
      {
        label: "Focus the input",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#focus"
      },
      {
        label: "Type in your search keywords",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#keywords"
      },
      {
        label: "Hit enter",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#enter"
      },
      {
        label: "Navigate to patients",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#navigate"
      },
      {
        label: "Navigate to patients",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#navigate"
      },
    ],
  };

  const useStyles = createStyles((theme) => ({
    step: {
      fontSize: 28, 
      color: theme.colorScheme === "dark" ? theme.colors.gray[6] : theme.colors.gray[8],
      fontWeight: 800,
      alignItems: 'center', 
      justifyContent:'center', 
      display: 'flex'
    },
    text: {
      fontSize: 18, 
      fontWeight: 500,
      color: theme.colorScheme === "dark" ? theme.colors.gray[6] : theme.colors.gray[8],
    },
    description: {
      fontSize: 24, 
      fontWeight: 600,
      color: theme.colorScheme === "dark" ? theme.colors.gray[6] : theme.colors.gray[8],
    },
    label: {
      fontSize: 46, 
      fontWeight: 800,
    }
  }));

  const { classes } = useStyles();

  return (
    <>
      <Grid mt={20}>
        <Grid.Col span={9}>
          <Container size={'md'}>
            <Title mb={"xs"} order={1} className={classes.label}>{feature.label}</Title>
            <Text mb={"xl"} className={classes.description} >{feature.description}</Text>
            <div>
              {feature.steps.map((step, i) => {
                  return (
                  <div key={i} style={{ marginBottom: 32}}>
                      <Group mb={'sm'}>
                        <div className={classes.step}>{i + 1}</div>
                        <Title order={2} style={{ fontSize: 32, fontWeight: 800 }}>{step.label}</Title>
                      </Group>
                      <Text mb={"lg"} className={classes.text}>{step.description}</Text>
                      <Stack align={'flex-start'}>
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
                  </div>
                  );
              })}
            </div>
          </Container>
        </Grid.Col>
        <Grid.Col span={3}>
          <TableOfContentsFloating activeIndex={0} links={feature.steps}></TableOfContentsFloating>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Feature;
