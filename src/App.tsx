import React from "react";
import { FeatureScroller } from "./components/FeatureScroller";

function App() {
  return (
    <div className="App">
      <h1 className="fsr-text-gray-600 fsr-text-5xl fsr-mt-32 fsr-mb-32 fsr-relative fsr-z-20 fsr-font-bold fsr-text-center">
        Feature listing preview
      </h1>
      <div className="fsr-mt-64 fsr-px-4 md:fsr-px-8 lg:fsr-px-8">
        <FeatureScroller
          features={[
            {
              id: "6",
              customDescription: ({ isIntersecting }) => (
                <div className="fsr-bg-blue-50 fsr-p-4 fsr-rounded fsr-mb-32 ">
                  <h3 className="fsr-text-2xl fsr-font-semibold">
                    Custom description {isIntersecting ? "active" : "inactive"}
                  </h3>
                  <p className="fsr-text-md fsr-text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, commodi velit reprehenderit ea eveniet voluptatibus
                    repellat ipsum possimus incidunt ratione natus sed sint
                    labore quasi nihil perspiciatis placeat dignissimos fugit.
                  </p>
                  <button className="fsr-mt-4 fsr-px-2 fsr-py-1 fsr-rounded fsr-bg-purple-700 fsr-text-white ">
                    Custom button
                  </button>
                </div>
              ),
              customPicture: ({ isIntersecting }) => (
                <div className="fsr-bg-pink-50 fsr-py-12">
                  Custom picture {isIntersecting ? "seen" : "invisible"}
                </div>
              ),
            },
            {
              id: "1",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?",
              imageUrl: "https://placehold.co/600x400",
              title: "This is a test",
            },
            {
              id: "2",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?",
              imageUrl: "https://placehold.co/600x400",
              title: "This is a test",
            },
            {
              id: "3",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?",
              imageUrl: "https://placehold.co/600x400",
              title: "This is a test",
            },
            {
              id: "4",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?",
              imageUrl: "https://placehold.co/600x400",
              title: "This is a test",
            },
            {
              id: "5",
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?",
              imageUrl: "https://placehold.co/600x400",
              title: "This is a test",
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
