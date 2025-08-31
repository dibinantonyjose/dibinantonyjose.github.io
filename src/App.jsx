import { Route, Routes } from "react-router-dom";
import Blogs from "./Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Home";
import Projects from "./Projects/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
