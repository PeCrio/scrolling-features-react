import React from "react";
import { FeatureScroller } from "./components/FeatureScroller";

function App() {
  return (
    <div className="App">
      <h1 className="sfr-text-gray-600 sfr-text-5xl sfr-mt-32 sfr-mb-32 sfr-relative sfr-z-20 sfr-font-bold sfr-text-center">
        Feature listing preview
      </h1>
      <div className="sfr-mt-64 sfr-px-4 md:sfr-px-8 lg:sfr-px-8">
        <FeatureScroller
          features={[
            {
              id: "6",
              customDescription: ({ isIntersecting }) => (
                <div className="sfr-bg-blue-50 sfr-p-4 sfr-rounded sfr-mb-32 ">
                  <h3 className="sfr-text-2xl sfr-font-semibold">
                    Custom description {isIntersecting ? "active" : "inactive"}
                  </h3>
                  <p className="sfr-text-md sfr-text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, commodi velit reprehenderit ea eveniet voluptatibus
                    repellat ipsum possimus incidunt ratione natus sed sint
                    labore quasi nihil perspiciatis placeat dignissimos fugit.
                  </p>
                  <button className="sfr-mt-4 sfr-px-2 sfr-py-1 sfr-rounded sfr-bg-purple-700 sfr-text-white ">
                    Custom button
                  </button>
                </div>
              ),
              customPicture: ({ isIntersecting }) => (
                <div className="sfr-bg-pink-50 sfr-py-12">
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
