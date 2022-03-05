import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>      
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp