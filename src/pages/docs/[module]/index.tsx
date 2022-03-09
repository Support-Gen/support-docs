import { Box } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DocsLayout from '../../../layouts/Docs/Docs.Layout'
import Overview from '../../../modules/docs/overview'

const ModulePage: NextPage = () => {
  return (
    <DocsLayout>
      <Overview></Overview>
    </DocsLayout>
  )
}

export default ModulePage
