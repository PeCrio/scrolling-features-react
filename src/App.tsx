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

function App() {
  return (
    <div className="App">
      <div className="sfr-py-64 sfr-bg-gradient-to-r sfr-from-purple-600 sfr-to-blue-400">
        <h1 className="sfr-text-5xl sfr-text-center sfr-font-bold sfr-text-white sfr-drop-shadow-md">
          Scrolling features react
        </h1>
        <div className="sfr-flex sfr-space-x-8 sfr-justify-center sfr-mt-8 sfr-text-white">
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
      <br />
      <h1 className="sfr-text-gray-600 sfr-text-5xl sfr-mt-32 sfr-mb-14 sfr-font-bold sfr-text-center">
        Custom example
      </h1>
      <div className="sfr-px-4 md:sfr-px-8 lg:sfr-px-8">
        <ScrollingFeatures
          key="custom-example"
          trackingBall={
            <div className="sfr-w-7 sfr-h-7 sfr-rounded-full sfr-border-2 sfr-border-white sfr-ring-red-500 sfr-ring">
              <div className="sfr-bg-red-500 sfr-w-full sfr-h-full sfr-rounded-full"></div>
            </div>
          }
          trackingLineColor="red"
          features={[
            {
              scrollingItem: () => <CustomTextComponent />,
              fixedItem: ({ isIntersecting }) => (
                <CustomImageComponent isIntersecting={isIntersecting} />
              ),
              indicator: ({ isIntersecting }) => (
                <div
                  className={`${
                    isIntersecting ? "sfr-bg-red-500" : "sfr-bg-gray-300"
                  } sfr-w-6 sfr-h-6 sfr-border-8 sfr-rounded-full sfr-border-white`}
                ></div>
              ),
            },
            {
              scrollingItem: () => <CustomTextComponent />,
              fixedItem: ({ isIntersecting }) => (
                <CustomImageComponent isIntersecting={isIntersecting} />
              ),
              indicator: ({ isIntersecting }) => (
                <div
                  className={`${
                    isIntersecting ? "sfr-bg-red-500" : "sfr-bg-gray-300"
                  } sfr-w-6 sfr-h-6 sfr-border-8 sfr-rounded-full sfr-border-white`}
                ></div>
              ),
            },
          ]}
        />
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
      <h1 className="sfr-text-gray-600 sfr-text-5xl sfr-mt-32 sfr-mb-14 sfr-font-bold sfr-text-center">
        Another Basic example
      </h1>
      <div className="sfr-px-4 md:sfr-px-8 lg:sfr-px-8">
        <ScrollingFeatures
          key="another-basic-example"
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
                  title="Example awesome feature 2"
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
                  title="Example awesome feature 3"
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
                  title="Example awesome feature 4"
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
                  title="Example awesome feature 5"
                  description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aperiam libero pariatur debitis rerum corporis quae iure ea id maxime velit necessitatibus reprehenderit earum, autem saepe sapiente nulla placeat sint?"
                />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
