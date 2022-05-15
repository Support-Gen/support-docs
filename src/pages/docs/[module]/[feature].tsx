import { Box } from '@mantine/core'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import DocsLayout from '../../../layouts/Docs/Docs.Layout'
import Feature from '../../../modules/docs/feature'
import FeatureInteractive from '../../../modules/docs/feature-interactive'

const FeaturePage: NextPage = () => {
  return (
    <DocsLayout>
      <Feature></Feature>
    </DocsLayout>
  )
}

export default FeaturePage
