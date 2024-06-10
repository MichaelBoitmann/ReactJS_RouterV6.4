import { 
  createBrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" /> /**same as /help/faq */
        <Route path="contact" /> /**same as /help/contact */
      </Route>
    </Route>
  ))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
