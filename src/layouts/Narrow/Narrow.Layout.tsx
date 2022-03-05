import { Container } from "@mantine/core"
import Footer from "../../shared/Footer"
import Navigation from "../../shared/Navigation"
import styles from "./Narrow.module.scss"

const NarrowLayout = ({ children }: any) => {
    return (
        <Container size={'md'} className={styles['layout-wrapper']}>
            <Navigation></Navigation>
            <main>{children}</main>
            <Footer></Footer>
        </Container>
    )
}

export default NarrowLayout;