import { Accordion, Anchor, AppShell, Box, Burger, Text, Header, MediaQuery, Navbar, useMantineTheme } from "@mantine/core"
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

const NavFeature = ({ title, url, isActive }: { title: string, url: string, isActive: boolean }) => {
    return (
        <Anchor href={url} variant={'text'}>
            <Box className={`${styles['nav-feature']} ${isActive ? styles['active'] : ''}`} style={{ paddingBlock: 5, paddingInline: 20 }}>
                <Text component="span">
                    {title}
                </Text>
            </Box>
        </Anchor>
    )
}

const DocsLayout = ({ children }: any) => {
    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    let activeModule = 0;
    let activeFeature = 0;

    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            fixed
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
            navbar={
                <Navbar
                    padding="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 250, lg: 350 }}
                >
                    <Accordion initialItem={activeModule} iconPosition="right">
                        {
                            navItems.map((item: any, index: number) => {
                                return (
                                    <Accordion.Item label={item.title} key={index} className={`${styles['nav-module']} ${styles[(activeModule == index ? 'active': '')]}`}>
                                        {item.features.map((feature: any, i: number) => {
                                            return (
                                                <NavFeature title={feature.title} url={""} isActive={activeFeature == i} key={i}></NavFeature>
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