import Bubby from "./components/bubbly";

function App() {
  return (
    <div className="grid grid-cols-4 gap-4 h-screen"> {/* Ensure the grid container takes up the full height of the viewport */}
      <div className="row-span-2">
        <Bubby note="meh" title="good job" element={<div className="text-amber-700">meh</div>} />
      </div>
      <Bubby note="meh" title="good job" element={<div className="text-amber-700">meh</div>} />
      <Bubby note="askm" title="goodooa" element={<div className="text-amber-700">zzzz</div>} />
      <div className="row-span-2">
      <Bubby note="sadkjn" title="asfjknskjfna" element={<div className="text-amber-700">zzkfmd</div>} />
      </div>
      <div className="row-span-2 col-span-2">
      <Bubby note="sadkjn" title="asfjknskjfna" element={<div className="text-amber-700">zzkfmd</div>} />
      </div>
      <Bubby note="sadkjn" title="asfjknskjfna" element={<div className="text-amber-700">zzkfmd</div>} />
      <div className="row-span-2">
      <Bubby note="sadkjn" title="asfjknskjfna" element={<div className="text-amber-700">zzkfmd</div>} />
      </div>
      <div className="col-span-2">
      <Bubby note="sadkjn" title="asfjknskjfna" element={<div className="text-amber-700">zzkfmd</div>} />
      </div>
      <Bubby note="sadkjn" title="asfjknskjfna" element={<div className="text-amber-700">zzkfmd</div>} />
    </div>
  );
}

export default App;
