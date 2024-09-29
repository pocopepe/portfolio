import A from "./components/A";
import B from "./components/B";
import C from "./components/C";
import SlideShow from "./components/SlideShow";
import ThemeChange from "./components/themeChange"
import Stats from "./components/stats";

import Bubby from "./components/bubbly";
import ProjectDisplay from "./components/projectDisplay";

function App() {
  return (
    <div className="grid grid-cols-4 gap-4 h-screen">
      {" "}
      <div className="row-span-3">
        <Bubby element={<A></A>} />
      </div>
      <Bubby element={<B></B>} />
      <Bubby element={<C></C>} />
      <div className="row-span-3">
        <Bubby element={<ProjectDisplay></ProjectDisplay>} />
      </div>
      <div className="row-span-2 col-span-2">
        <Bubby element={<SlideShow></SlideShow>} />
      </div>
  
      <div className="row-span-1">
        <Bubby element={<ThemeChange></ThemeChange>} />
      </div>
      <div className="col-span-2">
        <Bubby element={<Stats></Stats>} />
      </div>
      <Bubby
        element={
          <div className="flex items-center justify-center h-[20vh]">
            <div className="text-center text-amber-700 text-2xl">
              © Viju Sanjai, 2024
            </div>
          </div>
        }
      />
    </div>
  );
}

export default App;
