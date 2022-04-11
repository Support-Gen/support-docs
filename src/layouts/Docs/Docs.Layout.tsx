import { Accordion, Anchor, AppShell, Box, Burger, Text, Header, MediaQuery, Navbar, useMantineTheme, Breadcrumbs, Container, ScrollArea } from "@mantine/core"
import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { LinksGroup } from "../../shared/NavbarLinksGoup";
import Navigation from "../../shared/Navigation"
import styles from "./Docs.module.scss"

const navItems = [
    {
        label: "Patients",
        description: "Manage patients easily.",
        link: "patients",
        icon: CgNotes,
        features: [
            {
                label: "Search patients",
                description: "Search patients by keywords.",
                link: "search-patients",
                steps: [
                    {
                        label: "Browser URL",
                        description: `Navigate to "https://my.therapyapp.ch/patients"`
                    }
                ]
            },
            {
                label: "Add patients",
                description: "Add a new patient",
                link: "add-patients",
                steps: [
                    {
                        label: "Browser URL",
                        description: `Navigate to "https://my.therapyapp.ch/patients/new"`
                    }
                ]
            },
        ]
    },
    {
        label: "Appointments",
        description: "Manage patients easily.",
        link: "appointments",
        icon: CgNotes,
        features: [
            {
                label: "Search patients",
                description: "Search patients by keywords.",
                link: "search-patients",
                steps: [
                    {
                        label: "Browser URL",
                        description: `Navigate to "https://my.therapyapp.ch/patients"`
                    }
                ]
            },
            {
                label: "Add patients",
                description: "Add a new patient",
                link: "add-patients",
                steps: [
                    {
                        label: "Browser URL",
                        description: `Navigate to "https://my.therapyapp.ch/patients/new"`
                    }
                ]
            },
        ]
    }
]


const NavFeature = ({ label, url, isActive }: { label: string, url: string, isActive: boolean }) => {
    return (
        <Anchor href={url} variant={'text'}>
            <Box className={`${styles['nav-feature']} ${isActive ? styles['active'] : ''}`} style={{ paddingBlock: 5, paddingInline: 20 }}>
                <Text component="span">
                    {label}
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
        { label: 'Product Guide', link: '/' },
        { label: 'Patients', link: '/docs/patients' },
        { label: 'Search patients', link: '/docs/patients/search-patients' },
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
                                    <Accordion.Item label={item.label} key={index} className={`${styles['nav-module']} ${styles[(activeModule == index ? 'active': '')]}`}>
                                        <NavFeature label={'Overview'} url={`/docs/${item.link}`} isActive={false}></NavFeature>
                                        {item.features.map((feature: any, i: number) => {
                                            const featurelink = `/docs/${item.link}/${feature.link}`;
                                            return (
                                                <NavFeature label={feature.label} url={featureRoute} isActive={activeFeature == i} key={i}></NavFeature>
                                            )
                                        })}

                                    </Accordion.Item>
                                );
                            })
                        }
                    </Accordion> */}
                    <Navbar.Section grow component={ScrollArea}>
                        {
                            navItems.map((item: any, index: number) => {
                                <LinksGroup {...item} key={item.label} />
                            })
                        }
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