import React from "react";
import { ScrollingFeatures } from "./components/ScrollingFeatures";
import { FeatureItemOptions } from "./components/FeatureItem";

const CustomImageComponent: React.FC<FeatureItemOptions> = (options) => (
  <div className={`sfr-flex sfr-justify-center sfr-align-center sfr-mb-28 `}>
    <img
      src="https://placehold.co/600x400"
      alt="test"
      className={`sfr-h-80 ${
        options.isIntersecting && "sfr-shadow-lg sfr-shadow-blue-500"
      }`}
    />
  </div>
);

const CustomTextComponent: React.FC = () => (
  <div className="sfr-bg-blue-50 sfr-p-4 sfr-rounded">
    <h3 className="sfr-text-2xl sfr-font-semibold">First custom description</h3>
    <p className="sfr-text-md sfr-text-gray-500">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, commodi
      velit reprehenderit ea eveniet voluptatibus repellat ipsum possimus
      incidunt ratione natus sed sint labore quasi nihil perspiciatis placeat
      dignissimos fugit.
    </p>
    <button className="sfr-mt-4 sfr-px-2 sfr-py-1 sfr-rounded sfr-bg-blue-700 sfr-text-white ">
      Custom button
    </button>
  </div>
);

const SimpleExampleTextComponent: React.FC<{
  title: string;
  description: string;
  isIntersecting: boolean;
}> = ({ isIntersecting, title, description }) => (
  <>
    {/* Title */}
    <h4
      className={`${
        isIntersecting ? "sfr-text-blue-600" : "sfr-text-gray-300"
      } sfr-transition sfr-duration-300 sfr-text-2xl lg:sfr-text-3xl -sfr-mt-3`}
    >
      {title}
    </h4>
    {/* Description */}
    <p
      className={`${
        isIntersecting ? "sfr-text-gray-600" : "sfr-text-gray-300"
      } sfr-transition sfr-duration-300 sfr-mt-4`}
    >
      {description}
    </p>
    {/* Link */}
    <button
      className={`${
        isIntersecting ? "sfr-text-blue-600" : "sfr-text-gray-300"
      } sfr-text-md sfr-font-medium sfr-mt-4 sfr-mb-8 lg:sfr-mb-32 lg:group-last:sfr-mb-0 sfr-transition sfr-duration-300`}
    >
      Learn more
      <span className="sfr-ml-1">&gt;</span>
    </button>
  </>
);

const SimpleExampleImageComponent: React.FC<{
  imageUrl: string;
  isIntersecting: boolean;
}> = ({ imageUrl }) => (
  <div className="sfr-bg-gray-50 sfr-border sfr-border-gray-200 sfr-p-8 sfr-rounded-md sfr-flex sfr-justify-center sfr-items-start">
    <img className="sfr-w-48 sfr-object-contain lg:sfr-w-64" src={imageUrl} />
  </div>
);

const SimpleCustomIndicator: React.FC<{ isIntersecting: boolean }> = ({
  isIntersecting,
}) => (
  <div
    className={`-sfr-translate-x-[50%] lg:sfr-translate-x-0 sfr-p-1 sfr-rounded-full sfr-bg-[#1B1F24] ${
      isIntersecting && "sfr-border-2 sfr-border-[#4c3791]"
    }`}
  >
    <svg
      viewBox="0 0 24 24"
      version="1.1"
      className="sfr-text-white sfr-fill-current sfr-w-5 sfr-h-5"
    >
      <path d="M16.944 11h4.306a.75.75 0 0 1 0 1.5h-4.306a5.001 5.001 0 0 1-9.888 0H2.75a.75.75 0 0 1 0-1.5h4.306a5.001 5.001 0 0 1 9.888 0Zm-1.444.75a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"></path>
    </svg>
  </div>
);

function App() {
  return (
    <div className="App">
      <div className="sfr-bg-gradient-to-b sfr-from-[#2C2447] sfr-to-[#1B1F24]">
        <div className="sfr-pt-64 sfr-pb-20">
          <h1 className="sfr-text-7xl sfr-text-center sfr-font-bold sfr-text-white sfr-drop-shadow-md">
            Scrolling features react
          </h1>
          <div className="sfr-flex sfr-space-x-8 sfr-justify-center sfr-mt-8 sfr-text-[rgba(255,255,255,0.6)] sfr-text-lg">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/PeCrio/scrolling-features-react"
              className="sfr-drop-shadow-md hover:sfr-underline"
            >
              Github
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://npmjs.com/package/scrolling-features-react"
              className="sfr-drop-shadow-md hover:sfr-underline"
            >
              NPM
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/PeCrio/scrolling-features-react/blob/main/README.md"
              className="sfr-drop-shadow-md hover:sfr-underline"
            >
              Documentation
            </a>
          </div>
        </div>
        <div className="sfr-max-w-4xl sfr-container sfr-px-4 sfr-mx-auto sfr-rounded-lg sfr-overflow-none sfr-bg-[rgba(0,0,0,0.5)] sfr-py-4 sfr-border-4 sfr-border-gray-700">
          <img src="/preview.gif" alt="" className="sfr-w-full sfr-rounded" />
        </div>
      </div>
      <div className="sfr-bg-[#1B1F24] sfr-pt-48">
        <div className="sfr-container sfr-flex sfr-justify-center sfr-mx-auto">
          <div className="sfr-text-center sfr-mb-14 sfr-max-w-md">
            <h1 className="sfr-text-gray-200 sfr-text-5xl sfr-font-bold">
              Customization
            </h1>
            <p className="sfr-text-[rgba(255,255,255,0.6)] sfr-text-xl sfr-mt-4">
              This package comes with customizable options and props to extend
              for different use-cases
            </p>
          </div>
        </div>
        <div className="sfr-px-4 md:sfr-px-8 lg:sfr-px-8">
          <ScrollingFeatures
            trackingBall={
              <div className="sfr-w-7 sfr-h-7 sfr-rounded-full sfr-border-2 sfr-border-white sfr-ring-[#4c3791] sfr-ring">
                <div className="sfr-bg-[#4c3791] sfr-w-full sfr-h-full sfr-rounded-full"></div>
              </div>
            }
            lineTrail={
              <div
                className="sfr-w-[2px] -sfr-translate-x-[50%] lg:sfr-translate-x-0 sfr-h-full sfr-from-[rgba(255,255,255,0.4)] sfr-bg-repeat-y"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent, transparent 50%, var(--tw-gradient-from) 50%, var(--tw-gradient-from) 100%)",
                  backgroundSize: "2px 10px",
                }}
              ></div>
            }
            trackingLineColor="#4c3791"
            trackingLineFadeColor="#1B1F24"
            features={[
              {
                scrollingItem: () => (
                  <div className="sfr-flex lg:sfr-justify-end">
                    <div className="sfr-bg-[rgba(255,255,255,0.05)] sfr-grid sfr-place-items-center sfr-h-64 sfr-max-w-lg sfr-w-full sfr-border-[rgba(255,255,255,0.2)] sfr-border sfr-rounded">
                      <div>
                        <h3 className="sfr-text-2xl sfr-text-[rgba(255,255,255,0.5)]">
                          Custom Indicators
                        </h3>
                        <div className="sfr-flex sfr-justify-center sfr-items-center sfr-border sfr-border-[rgba(255,255,255,0.3)] sfr-p-4 sfr-rounded-md sfr-space-x-8 sfr-mt-4">
                          <div
                            className={`sfr-bg-purple-500 sfr-w-6 sfr-h-6 sfr-border-4 sfr-rounded-full sfr-ring sfr-ring-purple-300 sfr-border-gray-900`}
                          ></div>
                          <svg
                            height="24"
                            viewBox="0 0 24 24"
                            version="1.1"
                            width="24"
                            className="sfr-text-white sfr-fill-current"
                          >
                            <path d="M16.944 11h4.306a.75.75 0 0 1 0 1.5h-4.306a5.001 5.001 0 0 1-9.888 0H2.75a.75.75 0 0 1 0-1.5h4.306a5.001 5.001 0 0 1 9.888 0Zm-1.444.75a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"></path>
                          </svg>
                          <div className="sfr-w-6 sfr-h-6 sfr-rounded-full sfr-overflow-hidden">
                            <img src="https://placehold.co/200x200" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
                fixedItem: ({ isIntersecting }) => (
                  <div>
                    <div className="sfr-max-w-md sfr-container sfr-mb-16 lg:sfr-mb-32">
                      <h2 className="sfr-text-2xl sfr-font-bold sfr-text-white sfr-drop-shadow-md">
                        Indicators
                      </h2>
                      <p className="sfr-text-[rgba(255,255,255,0.5)] sfr-text-md sfr-mt-6">
                        Each list item can have it's own unique indicator, the
                        <code className="sfr-text-[rgba(255,255,255,0.8)] sfr-px-1">
                          `isIntersecting`
                        </code>{" "}
                        value is provided for more flexibility.
                      </p>
                      <button
                        className={`sfr-text-white sfr-px-3 sfr-py-1 sfr-rounded-md sfr-mt-4 sfr-text-sm ${
                          isIntersecting
                            ? "sfr-bg-[#4c3791]"
                            : "sfr-bg-[rgba(255,255,255,0.2)]"
                        }`}
                      >
                        Show code snippet
                      </button>
                    </div>
                  </div>
                ),
                indicator: SimpleCustomIndicator,
              },
              {
                indicator: SimpleCustomIndicator,
                scrollingItem: () => (
                  <div className="sfr-flex lg:sfr-justify-end">
                    <div className="sfr-bg-[rgba(255,255,255,0.05)] sfr-grid sfr-place-items-center sfr-h-64 sfr-max-w-lg sfr-w-full sfr-border-[rgba(255,255,255,0.2)] sfr-border sfr-rounded">
                      <div>
                        <h3 className="sfr-text-2xl sfr-text-[rgba(255,255,255,0.5)]">
                          Custom Indicators
                        </h3>
                        <div className="sfr-flex sfr-justify-center sfr-items-center sfr-border sfr-border-[rgba(255,255,255,0.3)] sfr-p-4 sfr-rounded-md sfr-space-x-8 sfr-mt-4">
                          <div
                            className={`sfr-bg-[#4c3791] sfr-w-6 sfr-h-6 sfr-border-4 sfr-rounded-full sfr-ring sfr-ring-[#4c3791] sfr-border-gray-900`}
                          ></div>
                          <svg
                            height="24"
                            viewBox="0 0 24 24"
                            version="1.1"
                            width="24"
                            className="sfr-text-white sfr-fill-current"
                          >
                            <path d="M16.944 11h4.306a.75.75 0 0 1 0 1.5h-4.306a5.001 5.001 0 0 1-9.888 0H2.75a.75.75 0 0 1 0-1.5h4.306a5.001 5.001 0 0 1 9.888 0Zm-1.444.75a3.5 3.5 0 1 0-7 0 3.5 3.5 0 0 0 7 0Z"></path>
                          </svg>
                          <div className="sfr-w-6 sfr-h-6 sfr-rounded-full sfr-overflow-hidden">
                            <img src="https://placehold.co/200x200" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
                fixedItem: ({ isIntersecting }) => (
                  <div>
                    <div className="sfr-max-w-md sfr-container sfr-mb-16 lg:sfr-mb-32">
                      <h2 className="sfr-text-2xl sfr-font-bold sfr-text-white sfr-drop-shadow-md">
                        Scrolling features react
                      </h2>
                      <p className="sfr-text-[rgba(255,255,255,0.5)] sfr-text-md sfr-mt-6">
                        Granular customization options/props based on your use
                        case
                      </p>
                      <button
                        className={`sfr-text-white sfr-px-3 sfr-py-1 sfr-rounded-md sfr-mt-4 sfr-text-sm ${
                          isIntersecting
                            ? "sfr-bg-[#4c3791]"
                            : "sfr-bg-[rgba(255,255,255,0.2)]"
                        }`}
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
      <h1 className="sfr-text-gray-600 sfr-text-5xl sfr-mt-32 sfr-mb-14 sfr-relative sfr-z-20 sfr-font-bold sfr-text-center">
        Basic example
      </h1>
      <div className="sfr-px-4 md:sfr-px-8 lg:sfr-px-8">
        <ScrollingFeatures
          key="basic-example"
          features={[
            {
              scrollingItem: ({ isIntersecting }) => (
                <SimpleExampleImageComponent
                  isIntersecting={isIntersecting}
                  imageUrl="https://placehold.co/800x500"
                />
              ),
              fixedItem: ({ isIntersecting }) => (
                <SimpleExampleTextComponent
                  isIntersecting={isIntersecting}
                  title="Example awesome feature 1"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?"
                />
              ),
            },
            {
              scrollingItem: ({ isIntersecting }) => (
                <SimpleExampleImageComponent
                  isIntersecting={isIntersecting}
                  imageUrl="https://placehold.co/800x500"
                />
              ),
              fixedItem: ({ isIntersecting }) => (
                <SimpleExampleTextComponent
                  isIntersecting={isIntersecting}
                  title="Example awesome feature 2"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?"
                />
              ),
            },
          ]}
          trackingBall={
            <div className="sfr-w-7 sfr-h-7 sfr-rounded-full sfr-border-2 sfr-border-white sfr-ring-blue-500 sfr-ring">
              <div className="sfr-bg-blue-500 sfr-w-full sfr-h-full sfr-rounded-full"></div>
            </div>
          }
          trackingLineColor="blue"
        />
      </div>
    </div>
  );
}

export default App;
