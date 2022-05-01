import {
  Accordion,
  Anchor,
  AppShell,
  Box,
  Burger,
  Text,
  Header,
  MediaQuery,
  Navbar,
  useMantineTheme,
  Breadcrumbs,
  Container,
  ScrollArea,
  createStyles,
} from "@mantine/core";
import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { LinksGroup } from "../../shared/NavbarLinksGoup";
import Navigation from "../../shared/Navigation";
import styles from "./Docs.module.scss";

const navItems = [
  {
    label: "Patients",
    description: "Manage patients easily.",
    link: "patients",
    icon: CgNotes,
    initiallyOpened: true,
    links: [
      {
        label: "Overview",
        link: "overview",
      },
      {
        label: "Search patients",
        description: "Search patients by keywords.",
        link: "search-patients",
        steps: [
          {
            label: "Browser URL 1",
            link: "#",
            order: 1,
          },
          {
            label: "Browser URL 2",
            link: "#",
            order: 1,
          },
        ],
      },
      {
        label: "Add patients",
        description: "Add a new patient",
        link: "add-patients",
        steps: [
          {
            label: "Browser URL 2",
            link: "#",
            order: 1,
          },
        ],
      },
    ],
  },
  {
    label: "Appointments",
    description: "Manage patients easily.",
    link: "appointments",
    icon: CgNotes,
    links: [
      {
        label: "Overview",
        link: "overview",
      },
      {
        label: "Search patients",
        description: "Search patients by keywords.",
        link: "search-patients",
        steps: [
          {
            label: "Browser URL",
            link: "#",
            order: 1,
          },
        ],
      },
      {
        label: "Add patients",
        description: "Add a new patient",
        link: "add-patients",
        steps: [
          {
            label: "Browser URL",
            link: "#",
            order: 1,
          },
        ],
      },
    ],
  },
];

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingInline: theme.spacing.md,
    
    '&:before': {
        position: 'absolute',
        boxShadow: 'inset 0px 80px 30px -50px white',
        top: 0,
        left: 0,
        content: '""',
        width: '100%',
        height: 40,
        zIndex: 1
    },
    '&:after': {
        position: 'absolute',
        boxShadow: 'inset 0px -80px 30px -50px white',
        bottom: 0,
        left: 0,
        content: '""',
        width: '100%',
        height: 40,
        zIndex: 1
    }
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const NavFeature = ({
  label,
  url,
  isActive,
}: {
  label: string;
  url: string;
  isActive: boolean;
}) => {
  return (
    <Anchor href={url} variant={"text"}>
      <Box
        className={`${styles["nav-feature"]} ${
          isActive ? styles["active"] : ""
        }`}
        style={{ paddingBlock: 5, paddingInline: 20 }}
      >
        <Text component="span">{label}</Text>
      </Box>
    </Anchor>
  );
};

const DocsLayout = ({ children }: any) => {
  const { classes } = useStyles();
  const links = navItems.map((item) => (
    <LinksGroup {...item} key={item.label} prefix={item.link} />
  ));
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  const items = [
    { label: "Product Guide", link: "/" },
    { label: "Patients", link: "/docs/patients" },
    { label: "Search patients", link: "/docs/patients/search-patients" },
  ].map((item, index) => (
    <Anchor href={item.link} key={index}>
      {item.label}
    </Anchor>
  ));

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.white,
        },
      })}
      navbar={
        <Navbar
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 250, lg: 300 }}
          className={classes.navbar}
        >
          <Navbar.Section grow className={classes.links} component={ScrollArea} type={'always'}>
            <div className={classes.linksInner}>{links}</div>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} px="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <Navigation hasSearch={true}></Navigation>
          </div>
        </Header>
      }
    >
        <Breadcrumbs mb={"lg"} ml={130}>{items}</Breadcrumbs>
        {children}
    </AppShell>
  );
};

export default DocsLayout;
