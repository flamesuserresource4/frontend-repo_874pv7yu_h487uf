import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import PhoneDealsPage from './pages/PhoneDeals'
import FiberPage from './pages/Fiber'
import WirelessHomeInternetPage from './pages/WirelessHomeInternet'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import WirelessPage from './pages/Wireless'
import CoveragePage from './pages/Coverage'
import SupportPage from './pages/Support'
import TradeInPage from './pages/TradeIn'
import SpecialOffersPage from './pages/SpecialOffers'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/phone-deals" element={<PhoneDealsPage />} />
      <Route path="/att-fiber" element={<FiberPage />} />
      <Route path="/wireless-home-internet" element={<WirelessHomeInternetPage />} />
      <Route path="/wireless" element={<WirelessPage />} />
      <Route path="/coverage" element={<CoveragePage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/trade-in" element={<TradeInPage />} />
      <Route path="/special-offers" element={<SpecialOffersPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
