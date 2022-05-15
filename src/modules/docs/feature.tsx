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
      fontSize: 24, 
      color: theme.colorScheme === "dark" ? theme.colors.gray[6] : theme.colors.gray[8],
      fontWeight: 800
    },
    stepLabel: {
      fontSize: 32, 
      fontWeight: 800,
    },
    text: {
      fontSize: 20, 
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
      color: theme.colors.blue[6]
    },
    tableOfContents: {
      position: 'sticky',
      height: 'max-content',
      maxHeight: 'calc(100vh - 60px)',
      top: 96
    }
  }));

  const { classes } = useStyles();

  return (
    <>
      <Grid mt={20}>
        <Grid.Col span={9}>
          <Container size={'sm'}>
            <Title mb={"xs"} order={1} className={classes.label}>{feature.label}</Title>
            <Text mb={32} className={classes.description} >{feature.description}</Text>
            {feature.steps.map((step, i) => {
                return (
                <div key={i} style={{ marginBottom: 56}}>
                    <Group mb={'sm'}>
                      <div className={classes.step}>{i + 1}.</div>
                      <Title order={2} className={classes.stepLabel}>{step.label}</Title>
                    </Group>
                    <Text mb={"lg"} className={classes.text}>{step.description}</Text>
                    <Stack align={'flex-start'}>
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
          </Container>
        </Grid.Col>
        <Grid.Col span={3} className={classes.tableOfContents}>
            <TableOfContentsFloating activeIndex={0} links={feature.steps}></TableOfContentsFloating>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Feature;
