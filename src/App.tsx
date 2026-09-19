import { Route, Routes } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { ScrollManager } from './components/ScrollManager'
import { DocumentTitle } from './components/DocumentTitle'
import { Home } from './pages/Home'
import { Careers } from './pages/Careers'

/** Layout and routes. The router itself is supplied by the entry point, so the
 *  browser gets a BrowserRouter and the prerenderer a StaticRouter. */
export default function App() {
  return (
    <>
      <ScrollManager />
      <DocumentTitle />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
