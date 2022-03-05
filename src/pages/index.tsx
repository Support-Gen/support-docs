import { Box } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NarrowLayout from '../layouts/Narrow/Narrow.Layout'
import Home from '../modules/home/home'

const HomePage: NextPage = () => {
  return (
    <NarrowLayout>
        <Home></Home>
    </NarrowLayout>
  )
}

export default HomePage
