import { MantineProvider } from '@mantine/core'
import { AppProps } from 'next/app'
import { createStore } from 'redux'
import '../styles/globals.css'
import { Provider } from 'react-redux';

const state = () => { return { tenantId: 1234 }}

const store = createStore(state);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}> 
      <MantineProvider>      
        <Component {...pageProps} />
      </MantineProvider>
    </Provider>
  )
}

export default MyApp