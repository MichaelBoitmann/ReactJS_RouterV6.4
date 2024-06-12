import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'


// pages
import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import NotFound from './pages/NotFound'
import CareerDetails, { careerDetailsLoader } from './pages/careers/CareerDetails'
import Careers, { careersLoader } from './pages/careers/Careers'

//layouts
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} /> /**same as /help/faq */
        <Route path="contact" element={<Contact />}/> /**same as /help/contact */
      </Route>

      <Route path="careers" element={<CareersLayout />}>
        <Route 
          index 
          element={<Careers />} 
          loader={careersLoader}
        />
        <Route 
          path=":id"
          elements={<CareerDetails />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  ))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
