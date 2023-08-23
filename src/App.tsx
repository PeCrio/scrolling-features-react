import React from "react";
import { FeatureScroller } from "./components/FeatureScroller";

function App() {
  return (
    <div className="App">
      <h1 className="fsr-text-gray-600 fsr-text-5xl fsr-mt-32 fsr-mb-32 fsr-relative fsr-z-20 fsr-font-bold fsr-text-center">
        Feature listing preview
      </h1>
      <div className="fsr-mt-64 fsr-px-4 md:fsr-px-8 lg:fsr-px-8">
        <FeatureScroller />
      </div>
    </div>
  );
}

export default App;
