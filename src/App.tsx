import React, { ReactNode } from "react";
import { ScrollingFeatures } from "./components/ScrollingFeatures";

const SimpleExampleImageComponent: React.FC<{
  title: string;
  isIntersecting?: boolean;
}> = ({ title }) => (
  <div className="sfr-flex lg:sfr-justify-end">
    <div className="sfr-bg-[rgba(255,255,255,0.05)] sfr-grid sfr-place-items-center sfr-h-64 sfr-max-w-lg sfr-w-full sfr-border-[rgba(255,255,255,0.2)] sfr-border sfr-rounded">
      <div>
        <h3 className="sfr-text-2xl sfr-text-[rgba(255,255,255,0.5)]">
          {title}
        </h3>
      </div>
    </div>
  </div>
);

const CustomTextComponent: React.FC<{
  isIntersecting?: boolean;
  title: string;
  description: string;
}> = ({ title, description, isIntersecting }) => (
  <div className="sfr-max-w-md sfr-container sfr-mb-16 lg:sfr-mb-32">
    <h2
      className={`sfr-text-2xl sfr-font-bold sfr-text-white sfr-drop-shadow-md ${
        isIntersecting ? "sfr-text-indigo-500" : "sfr-text-white"
      }`}
    >
      {title}
    </h2>
    <p className="sfr-text-[rgba(255,255,255,0.5)] sfr-text-md sfr-mt-2">
      {description}
    </p>
  </div>
);

const SimpleCustomIndicator: React.FC<{ isIntersecting: boolean }> = ({
  isIntersecting,
}) => (
  <div
    className={`-sfr-translate-x-[50%] lg:sfr-translate-x-0 sfr-p-1 sfr-rounded-full sfr-bg-tertiary ${
      isIntersecting && "sfr-border-2 sfr-border-primary"
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
    <div className="App sfr-bg-tertiary ">
      <div className="sfr-bg-gradient-to-b sfr-from-secondary sfr-to-tertiary ">
        <div className="sfr-pt-32 sfr-pb-20 sfr-container sfr-px-4 sfr-mx-auto">
          <h1 className="sfr-text-4xl lg:sfr-text-7xl sfr-text-center sfr-font-bold sfr-text-white sfr-drop-shadow-md">
            Scrolling features react
          </h1>
          <div className="sfr-flex sfr-space-x-8 sfr-justify-center sfr-mt-8 sfr-text-[rgba(255,255,255,0.6)] lg:sfr-text-lg">
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
        <div className="sfr-max-w-4xl sfr-px-4 sfr-mx-auto sfr-rounded-lg sfr-overflow-none sfr-bg-[rgba(0,0,0,0.5)] sfr-py-4 sfr-border-4 sfr-border-gray-700 sfr-container">
          <img src="/preview.gif" alt="" className="sfr-w-full sfr-rounded" />
        </div>
      </div>
      <div className="sfr-py-48 sfr-px-4">
        <div className="sfr-container sfr-flex sfr-justify-center sfr-mx-auto">
          <div className="sfr-text-center sfr-mb-14 sfr-max-w-md">
            <h1 className="sfr-text-gray-200 sfr-text-3xl lg:sfr-text-5xl sfr-font-bold">
              Preview
            </h1>
            <p className="sfr-text-[rgba(255,255,255,0.6)] lg:sfr-text-xl sfr-mt-4">
              See below preview of a simple implementation
            </p>
          </div>
        </div>
        <div className="sfr-px-4 md:sfr-px-8 lg:sfr-px-8">
          <ScrollingFeatures
            key="custom-example"
            trackingBall={
              <div className="sfr-w-7 sfr-h-7 sfr-rounded-full sfr-border-2 sfr-border-white sfr-ring-primary sfr-ring">
                <div className="sfr-bg-primary sfr-w-full sfr-h-full sfr-rounded-full"></div>
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
                  <SimpleExampleImageComponent title="Scrolling item 1" />
                ),
                fixedItem: ({ isIntersecting }) => (
                  <CustomTextComponent
                    title="Fixed item 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quo distinctio necessitatibus consequatur porro aperiam nobis, esse illum labore repellendus molestias iusto facilis sunt, maiores voluptates. Dolor accusamus ipsa autem!"
                    isIntersecting={isIntersecting}
                  />
                ),
                indicator: SimpleCustomIndicator,
              },
              {
                scrollingItem: () => (
                  <SimpleExampleImageComponent title="Scrolling item 2" />
                ),
                fixedItem: ({ isIntersecting }) => (
                  <CustomTextComponent
                    title="Fixed item 2"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quo distinctio necessitatibus consequatur porro aperiam nobis, esse illum labore repellendus molestias iusto facilis sunt, maiores voluptates. Dolor accusamus ipsa autem!"
                    isIntersecting={isIntersecting}
                  />
                ),
                indicator: SimpleCustomIndicator,
              },
            ]}
          />
        </div>
      </div>
      <div className="sfr-pb-48">
        <div className="sfr-container sfr-flex sfr-justify-center sfr-mx-auto">
          <div className="sfr-text-center sfr-mb-14 sfr-max-w-md">
            <h1 className="sfr-text-gray-200 sfr-text-3xl lg:sfr-text-5xl sfr-font-bold">
              Props and options
            </h1>
            <p className="sfr-text-[rgba(255,255,255,0.6)] lg:sfr-text-xl sfr-mt-4">
              This package comes with customizable options and props to extend
              for different use-cases
            </p>
          </div>
        </div>
        <div className="sfr-container sfr-mx-auto">
          <ul className="sfr-text-white">
            <li>
              <CustomTextComponent
                title="features"
                description="List of items to be displayed "
              />
            </li>
            <li>
              <CustomTextComponent
                title="trackingBall"
                description="The ball that follows the top of the screen"
              />
            </li>
            <li>
              <CustomTextComponent
                title="trackingLineColor"
                description="Highlight color of the active"
              />
            </li>
            <li>
              <CustomTextComponent
                title="trackingLineFadeColor"
                description="Ideally the background color, helps add a fading effect to the beginning of the tracking line"
              />
            </li>
            <li>
              <CustomTextComponent
                title="lineTrail"
                description="The center line for desktop and left line for mobile"
              />
            </li>
          </ul>
        </div>
      </div>
      <footer className="sfr-container sfr-mx-auto sfr-py-4 sfr-border-t sfr-border-[rgba(255,255,255,0.3)]">
        <div className="sfr-flex sfr-justify-between sfr-text-[rgba(255,255,255,0.7)] sfr-text-sm">
          <p>Copyright &copy 2023</p>
          <a
            href="https://ossaiprecious.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developer website
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
