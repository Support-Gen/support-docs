import { Accordion, Anchor, AppShell, Box, Burger, Text, Header, MediaQuery, Navbar, useMantineTheme, Breadcrumbs, Container, ScrollArea } from "@mantine/core"
import { useState } from "react";
import Navigation from "../../shared/Navigation"
import styles from "./Docs.module.scss"

const navItems = [
    {
        title: "Patients",
        description: "Manage patients easily.",
        route: "patients",
        features: [
            {
                title: "Search patients",
                description: "Search patients by keywords.",
                route: "search-patients",
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
                route: "add-patients",
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
        title: "Appointments",
        description: "Manage patients easily.",
        route: "appointments",
        features: [
            {
                title: "Search patients",
                description: "Search patients by keywords.",
                route: "search-patients",
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
                route: "add-patients",
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

    const items = [
        { title: 'Product Guide', route: '/' },
        { title: 'Patients', route: '/docs/patients' },
        { title: 'Search patients', route: '/docs/patients/search-patients' },
    ].map((item, index) => (
        <Anchor href={item.route} key={index}>
            {item.title}
        </Anchor>
    ));

    return (
        <AppShell
            navbarOffsetBreakpoint="sm"
            fixed
            styles={(theme) => ({
                main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.white },
            })}
            navbar={
                <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    hidden={!opened}
                    width={{ sm: 250, lg: 350 }}
                >
                    {/* <Accordion initialItem={activeModule} iconPosition="right">
                        {
                            navItems.map((item: any, index: number) => {
                                return (
                                    <Accordion.Item label={item.title} key={index} className={`${styles['nav-module']} ${styles[(activeModule == index ? 'active': '')]}`}>
                                        <NavFeature title={'Overview'} url={`/docs/${item.route}`} isActive={false}></NavFeature>
                                        {item.features.map((feature: any, i: number) => {
                                            const featureRoute = `/docs/${item.route}/${feature.route}`;
                                            return (
                                                <NavFeature title={feature.title} url={featureRoute} isActive={activeFeature == i} key={i}></NavFeature>
                                            )
                                        })}

                                    </Accordion.Item>
                                );
                            })
                        }
                    </Accordion> */}
                    <Navbar.Section grow component={ScrollArea}>
                        
                    </Navbar.Section>
                </Navbar>
            }
            header={
                <Header height={60} px="md">
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
                        <Navigation hasSearch={true}></Navigation>
                    </div>
                </Header>
            }
        >
            <Box mx={50}>
                <Breadcrumbs mb={'lg'}>{items}</Breadcrumbs>
                {children}
            </Box>
        </AppShell>
    )
}

export default DocsLayout;