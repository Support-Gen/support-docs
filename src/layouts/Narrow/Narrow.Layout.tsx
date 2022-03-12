import { Box, Container } from "@mantine/core"
import Footer from "../../shared/Footer"
import Navigation from "../../shared/Navigation"
import styles from "./Narrow.module.scss"

const NarrowLayout = ({ children }: any) => {
    return (
        <Box className={styles['layout-wrapper']}>
            <Box style={{ height: 60}} px="md">
                <Navigation></Navigation>
            </Box>
            <Container size={'md'} style={{ width: '100%'}}>
                <main>{children}</main>
            </Container>
            <Footer></Footer>
        </Box>
    )
}

export default NarrowLayout;