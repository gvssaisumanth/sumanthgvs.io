import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>
        <div
          style={{
            bagroundColor: "#000000",
            backgroundImage:
              "linear-gradient(135deg, #000000 40%, #400c55 74%)",
          }}
        >
          <div className="">
            <About />
          </div>

          <div className="pb-10">
            <Tech />
          </div>

          <Projects />

          <div
            className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
          >
            <div
              className="bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
              style={{
                backgroundColor: "#000000",
                backgroundImage:
                  "linear-gradient(45deg, #000000 163%, #400c55 374%)",
              }}
            >
              <Experience />
            </div>
          </div>
          <div
            className="relative z-0"
            style={{
              backgroundColor: "#000000",
              backgroundImage:
                "linear-gradient(45deg, #000000 30%, #400c55 174%)",
            }}
          >
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
