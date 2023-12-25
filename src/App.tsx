import React from "react";
import { Example } from "./components/Example";

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
          <Example />
        </div>
      </div>
      <div className="lg:sfr-pb-96 lg:sfr-pt-32 sfr-pb-16">
        <div className="sfr-container sfr-mx-auto">
          <div className="sfr-container sfr-flex sfr-justify-center sfr-mx-auto ">
            <div className="sfr-text-center lg:sfr-mb-14 sfr-max-w-2xl sfr-relative sfr-p-4 lg:sfr-p-16 sfr-flex sfr-flex-col">
              <div className="sfr-mb-4">
                <h1 className="sfr-text-gray-200 sfr-text-3xl lg:sfr-text-5xl sfr-font-bold">
                  Props and options
                </h1>
                <p className="sfr-text-[rgba(255,255,255,0.6)] lg:sfr-text-xl sfr-mt-4">
                  This package comes with customizable options and props to
                  extend for different use-cases
                </p>
              </div>
              <div className="lg:sfr-top-0 lg:sfr-left-0 lg:sfr-absolute lg:sfr-translate-x-[-70%] lg:sfr-translate-y-[-80%] sfr-text-left">
                <PropExplainer
                  title="features"
                  description="List of items to be displayed "
                />
              </div>
              <div className="lg:sfr-top-0 lg:sfr-right-0 lg:sfr-absolute lg:sfr-translate-x-[70%] lg:sfr-translate-y-[-80%] sfr-text-left">
                <PropExplainer
                  title="trackingBall"
                  description="The ball that follows the top of the screen"
                />
              </div>
              <div className="lg:sfr-bottom-0 lg:sfr-left-0 lg:sfr-absolute lg:sfr-translate-x-[-100%] lg:sfr-translate-y-[80%] sfr-text-left">
                <PropExplainer
                  title="trackingLineColor"
                  description="Highlight color of the active"
                />
              </div>
              <div className="lg:sfr-bottom-0 lg:sfr-self-center lg:sfr-absolute lg:sfr-translate-y-[150%] sfr-text-left">
                <PropExplainer
                  title="trackingLineFadeColor"
                  description="Ideally the background color, helps add a fading effect to the beginning of the tracking line"
                />
              </div>
              <div className="lg:sfr-bottom-0 lg:sfr-right-0 lg:sfr-absolute lg:sfr-translate-x-[100%] lg:sfr-translate-y-[80%] sfr-text-left">
                <PropExplainer
                  title="lineTrail"
                  description="The center line for desktop and left line for mobile"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="sfr-container sfr-mx-auto sfr-py-4 sfr-px-4 sfr-border-t sfr-border-[rgba(255,255,255,0.3)]">
        <div className="sfr-flex sfr-justify-between sfr-text-[rgba(255,255,255,0.7)] sfr-text-sm">
          <p>Copyright &copy; 2023</p>
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

const PropExplainer: React.FC<{
  isIntersecting?: boolean;
  title: string;
  description: string;
}> = ({ title, description, isIntersecting }) => (
  <div className="lg:sfr-max-w-xs sfr-container sfr-border-dashed sfr-border-[rgba(255,255,255,0.3)] sfr-border sfr-my-2 lg:sfr-my-0 sfr-p-4 sfr-rounded-lg">
    <h2
      className={`sfr-text-lg lg:sfr-text-2xl sfr-font-bold sfr-text-white sfr-drop-shadow-md ${
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

export default App;
