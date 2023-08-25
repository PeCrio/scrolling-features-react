import React from "react";
import { ScrollingFeatures } from "./components/ScrollingFeatures";

function App() {
  return (
    <div className="App">
      <div className="sfr-py-64 sfr-bg-gradient-to-r sfr-from-purple-600 sfr-to-blue-400">
        <h1 className="sfr-text-5xl sfr-text-center sfr-font-bold ">
          Scrolling features react
        </h1>
        <div className="sfr-flex sfr-space-x-8 sfr-justify-center sfr-mt-8">
          <button>Github</button>
          <button>NPM</button>
          <button>Documentation</button>
        </div>
      </div>
      <br />
      <h1 className="sfr-text-gray-600 sfr-text-5xl sfr-mt-32 sfr-font-bold sfr-text-center">
        Custom example
      </h1>
      <div className="sfr-px-4 md:sfr-px-8 lg:sfr-px-8">
        <ScrollingFeatures
          key="test"
          features={[
            {
              scrollingItem: () => (
                <div className="sfr-bg-blue-50 sfr-p-4 sfr-rounded">
                  <h3 className="sfr-text-2xl sfr-font-semibold">
                    First custom description
                  </h3>
                  <p className="sfr-text-md sfr-text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, commodi velit reprehenderit ea eveniet voluptatibus
                    repellat ipsum possimus incidunt ratione natus sed sint
                    labore quasi nihil perspiciatis placeat dignissimos fugit.
                  </p>
                  <button className="sfr-mt-4 sfr-px-2 sfr-py-1 sfr-rounded sfr-bg-blue-700 sfr-text-white ">
                    Custom button
                  </button>
                </div>
              ),
              fixedItem: ({ isIntersecting }) => (
                <div
                  className={`sfr-flex sfr-justify-center sfr-align-center sfr-mb-28 `}
                >
                  <img
                    src="https://placehold.co/600x400"
                    alt="test"
                    className={`sfr-h-80 ${
                      isIntersecting && "sfr-shadow-lg sfr-shadow-blue-500"
                    }`}
                  />
                </div>
              ),
            },
            {
              scrollingItem: () => (
                <div className="sfr-bg-blue-50 sfr-p-4 sfr-rounded">
                  <h3 className="sfr-text-2xl sfr-font-semibold">
                    Second custom description
                  </h3>
                  <p className="sfr-text-md sfr-text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Itaque, commodi velit reprehenderit ea eveniet voluptatibus
                    repellat ipsum possimus incidunt ratione natus sed sint
                    labore quasi nihil perspiciatis placeat dignissimos fugit.
                  </p>
                  <button className="sfr-mt-4 sfr-px-2 sfr-py-1 sfr-rounded sfr-bg-blue-700 sfr-text-white ">
                    Custom button
                  </button>
                </div>
              ),
              fixedItem: ({ isIntersecting }) => (
                <div
                  className={`sfr-flex sfr-justify-center sfr-align-center sfr-mb-28 last:sfr-mb-0`}
                >
                  <img
                    src="https://placehold.co/600x400"
                    alt="test"
                    className={`sfr-h-80 ${
                      isIntersecting && "sfr-shadow-lg sfr-shadow-blue-500"
                    }`}
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
      <h1 className="sfr-text-gray-600 sfr-text-5xl sfr-mt-32 sfr-relative sfr-z-20 sfr-font-bold sfr-text-center">
        Basic example
      </h1>
      <div className="sfr-px-4 md:sfr-px-8 lg:sfr-px-8">
        <ScrollingFeatures
          key="test3"
          features={[
            {
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?",
              imageUrl: "https://placehold.co/600x400",
              title: "This is a test",
            },
            {
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?",
              imageUrl: "https://placehold.co/800x500",
              title: "This is a test",
            },
            {
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?",
              imageUrl: "https://placehold.co/600x600",
              title: "This is a test",
            },
          ]}
        />
      </div>
      <h1 className="sfr-text-gray-600 sfr-text-5xl sfr-mt-32 sfr-font-bold sfr-text-center">
        Another Basic example
      </h1>
      <div className="sfr-px-4 md:sfr-px-8 lg:sfr-px-8">
        <ScrollingFeatures
          key="test2"
          features={[
            {
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?",
              imageUrl: "https://placehold.co/600x400",
              title: "This is a test",
            },
            {
              description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?",
              imageUrl: "https://placehold.co/600x400",
              title: "This is a test",
            },
            {
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
