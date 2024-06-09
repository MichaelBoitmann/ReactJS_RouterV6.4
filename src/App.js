import { BrowserRouter, Routes, Route, Link, navLink } from React;


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
