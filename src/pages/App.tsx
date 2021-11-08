import { Route, Routes } from 'react-router-dom'

import Footer from '../components/Footer'
import Header from '../components/Header'
import AlgoStable from './AlgoStable'
import Amo from './Amo'
import FPI from './FPI'
import FRAX from './FRAX'
import FXS from './FXS'
import Home from './Home'
import Resources from './Resources'
import { AppWrapper, FooterWrapper, HeaderWrapper } from './styles'

export default function App() {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Routes>
        <Route path="/algostable" element={<AlgoStable />} />
        <Route path="/amos" element={<Amo />} />
        <Route path="/fpi" element={<FPI />} />
        <Route path="/frax" element={<FRAX />} />
        <Route path="/fxs" element={<FXS />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </AppWrapper>
  )
}
