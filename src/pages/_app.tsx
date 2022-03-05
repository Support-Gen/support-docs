import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>      
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp