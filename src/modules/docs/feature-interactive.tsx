import { ClassNames, ThemeContext } from "@emotion/react";
import {
  Box,
  Center,
  Text,
  Title,
  Container,
  Group,
  Grid,
  Image,
  Stack,
  SegmentedControl,
  createStyles,
} from "@mantine/core";
import { NextPage } from "next";

const FeatureInteractive: NextPage = () => {
  let feature = {
    label: "Search patients",
    description: "Search patients by keywords.",
    route: "search-patients",
    steps: [
      {
        label: "Navigate to patients",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#navigate",
      },
      {
        label: "Focus the input",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#focus",
      },
      {
        label: "Type in your search keywords",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#keywords",
      },
      {
        label: "Hit enter",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#enter",
      },
      {
        label: "Navigate to patients",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#navigate",
      },
      {
        label: "Navigate to patients",
        description: `Open https://my.therapyapp.ch/patients in a new browser tab.`,
        order: 1,
        link: "#navigate",
      },
    ],
  };

  const useStyles = createStyles((theme) => ({
    step: {
      fontSize: 24,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[6]
          : theme.colors.gray[8],
      fontWeight: 800,
    },
    preview: {
      backgroundColor: theme.colors.dark[7],
      position: "fixed",
      height: "calc(100vh - 60px)",
      right: 0,
      top: 60,
    },
    stepLabel: {
      fontSize: 28,
      fontWeight: 800,
    },
    text: {
      fontSize: 18,
      fontWeight: 500,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[6]
          : theme.colors.gray[8],
    },
    description: {
      fontSize: 24,
      fontWeight: 500,
      color:
        theme.colorScheme === "dark"
          ? theme.colors.gray[6]
          : theme.colors.gray[8],
    },
    label: {
      fontSize: 46,
      fontWeight: 800,
      color: theme.colors.blue[6],
    },
    tableOfContents: {
      position: "sticky",
      height: "max-content",
      maxHeight: "calc(100vh - 60px)",
      top: 96,
    },
  }));

  const { classes } = useStyles();

  return (
    <>
      <div style={{ width: "45%" }}>
        <Container>
          <Title mb={"xs"} order={1} className={classes.label}>
            {feature.label}
          </Title>
          <Text mb={32} className={classes.description}>
            {feature.description}
          </Text>
          {feature.steps.map((step, i) => {
            return (
              <div key={i} style={{ marginBottom: 125 }}>
                <Group mb={"sm"}>
                  <div className={classes.step}>{i + 1}.</div>
                  <Title order={2} className={classes.stepLabel}>
                    {step.label}
                  </Title>
                </Group>
                <Text mb={"lg"} className={classes.text}>
                  {step.description}
                </Text>
              </div>
            );
          })}
        </Container>
      </div>
      <div className={classes.preview} style={{ width: "45%" }}>
        <Box px={40} style={{ height: "calc(100% - 120px)" }}>
          <Center style={{ height: "100%" }}>
            
            <Stack align={"center"}>
              {/* <SegmentedControl
                data={[
                  { value: "web", label: "Web" },
                  { value: "mobile", label: "Mobile" },
                ]}
              /> */}
              <Box
                sx={() => ({
                  borderRadius: "20px",
                  boxShadow: "0px 8px 18px #00000020",
                })}
              >
                <Image
                  src="/example-page-1.png"
                  alt="example img"
                  radius={"md"}
                ></Image>
              </Box>
            </Stack>
          </Center>
        </Box>
      </div>
    </>
  );
};

export default FeatureInteractive;
