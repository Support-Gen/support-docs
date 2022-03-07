import { AppShell, Burger, Container, Header, MediaQuery, Navbar, useMantineTheme } from "@mantine/core"
import { useState } from "react";
import Footer from "../../shared/Footer"
import Navigation from "../../shared/Navigation"


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
                    </div>
                </Header>
            }
        >
            <main>{children}</main>
        </AppShell>
    )
}

export default DocsLayout;