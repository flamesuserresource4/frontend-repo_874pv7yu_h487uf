import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PromoSections from '../components/PromoSections'
import Stats from '../components/Stats'
import { HomeSections } from '../components/Sections'

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <PromoSections />
      <HomeSections />
      <Stats />
    </Layout>
  )
}
