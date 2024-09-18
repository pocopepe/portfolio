import A from "./components/A";
import B from "./components/B";
import Bubby from "./components/bubbly";

function App() {
  return (
    <div className="grid grid-cols-4 gap-4 h-screen">
      {" "}
      <div className="row-span-2">
        <Bubby element={<A></A>} />
      </div>
      <Bubby
        element={<B></B>}
      />
      <Bubby

        element={<div className="text-amber-700">zzzz</div>}
      />
      <div className="row-span-2">
        <Bubby
 
          element={<div className="text-amber-700">zzkfmd</div>}
        />
      </div>
      <div className="row-span-2 col-span-2">
        <Bubby

          element={<div className="text-amber-700">zzkfmd</div>}
        />
      </div>
      <Bubby

        element={<div className="text-amber-700">zzkfmd</div>}
      />
      <div className="row-span-2">
        <Bubby
    
          element={<div className="text-amber-700">zzkfmd</div>}
        />
      </div>
      <div className="col-span-2">
        <Bubby
     
          element={<div className="text-amber-700">zzkfmd</div>}
        />
      </div>
      <Bubby
        element={
        <div className="flex items-center justify-center h-[20vh]">
        <div className="text-center text-amber-700 text-2xl">© Viju Sanjai, 2024</div></div>}
      />
    </div>
  );
}

export default App;
