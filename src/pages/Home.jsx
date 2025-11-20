import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PromoSections from '../components/PromoSections'
import Stats from '../components/Stats'
import { HomeSections } from '../components/Sections'
import TrustBadges from '../components/TrustBadges'
import BackgroundFX from '../components/BackgroundFX'
import Testimonials from '../components/Testimonials'

export default function HomePage() {
  return (
    <Layout>
      <div className="relative">
        <BackgroundFX />
        <Hero />
      </div>
      <TrustBadges />
      <PromoSections />
      <HomeSections />
      <Stats />
      <Testimonials />
    </Layout>
  )
}
