import { Accordion, Anchor, AppShell, Box, Burger, Group, Header, MediaQuery, Navbar, useMantineTheme } from "@mantine/core"
import { useState } from "react";
import Navigation from "../../shared/Navigation"
import styles from "./Docs.module.scss"

const navItems = [
    {
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
    },
    {
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
]

const NavFeature = ({ title, url }: { title: string, url: string}) => {
    return (
        <a href={url}>
            <Box className={styles['nav-feature']} style={{ padding: 10, paddingInline: 20 }}>
                {title}
            </Box>
        </a>
    )
}

const DocsLayout = ({ children }: any) => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();

    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            fixed
            navbar={
                <Navbar
                    padding="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 250, lg: 350 }}
                >
                    <Accordion initialItem={0} iconPosition="right">
                        {
                            navItems.map((item: any, index: number) => {
                                return (
                                    <Accordion.Item label={item.title} key={index} className={styles['nav-module']}>
                                        {item.features.map((feature: any, i: number) => {
                                            return (
                                                <NavFeature title={feature.title} url={""} key={i}></NavFeature>
                                            )
                                        })}

                                    </Accordion.Item>
                                );
                            })
                        }
                    </Accordion>
                </Navbar>
            }
            header={
                <Header height={70} padding="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={theme.colors.gray[6]}
                            mr="xl"
                            />
                        </MediaQuery>
                        <Navigation></Navigation>
                    </div>
                </Header>
            }
        >
            <main>{children}</main>
        </AppShell>
    )
}

export default DocsLayout;