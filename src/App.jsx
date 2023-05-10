
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-color bg-no-repeat bg-center">
          <Navbar />
          {/* <Hero /> */}
        </div>
        {/* <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks /> */}
      </div>
      <div className="relative z-0">
        {/* <Contact />
        <StarsCanvas /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
