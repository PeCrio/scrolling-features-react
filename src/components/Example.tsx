import { ScrollingFeatures } from "./ScrollingFeatures";

const ImagePlaceholder: React.FC<{
  title: string;
  isIntersecting?: boolean;
}> = ({ title }) => (
  <div className="sfr-flex lg:sfr-justify-end">
    <div className="sfr-bg-[rgba(255,255,255,0.05)] sfr-grid sfr-place-items-center sfr-h-64 sfr-max-w-lg sfr-w-full sfr-border-[rgba(255,255,255,0.2)] sfr-border sfr-rounded">
      <h3 className="sfr-text-2xl sfr-text-[rgba(255,255,255,0.5)]">{title}</h3>
    </div>
  </div>
);

const TextComponent: React.FC<{
  isIntersecting?: boolean;
  title: string;
  description: string;
}> = ({ title, description, isIntersecting }) => (
  <div className="sfr-max-w-md sfr-container sfr-mb-16 lg:sfr-mb-32">
    <h2
      className={`sfr-text-2xl sfr-font-bold sfr-drop-shadow-md ${
        isIntersecting ? "sfr-text-white" : "sfr-text-gray-400"
      }`}
    >
      {title}
    </h2>
    <p className="sfr-text-[rgba(255,255,255,0.5)] sfr-text-md sfr-mt-2">
      {description}
    </p>
  </div>
);

const Indicator: React.FC<{ isIntersecting: boolean }> = ({
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

export const Example: React.FC = () => {
  return (
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
          scrollingItem: () => <ImagePlaceholder title="Scrolling item 1" />,
          fixedItem: ({ isIntersecting }) => (
            <TextComponent
              title="Fixed item 1"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quo distinctio necessitatibus consequatur porro aperiam nobis, esse illum labore repellendus molestias iusto facilis sunt, maiores voluptates. Dolor accusamus ipsa autem!"
              isIntersecting={isIntersecting}
            />
          ),
          indicator: Indicator,
        },
        {
          scrollingItem: () => <ImagePlaceholder title="Scrolling item 2" />,
          fixedItem: ({ isIntersecting }) => (
            <TextComponent
              title="Fixed item 2"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quo distinctio necessitatibus consequatur porro aperiam nobis, esse illum labore repellendus molestias iusto facilis sunt, maiores voluptates. Dolor accusamus ipsa autem!"
              isIntersecting={isIntersecting}
            />
          ),
          indicator: Indicator,
        },
        {
          scrollingItem: () => <ImagePlaceholder title="Scrolling item 3" />,
          fixedItem: ({ isIntersecting }) => (
            <TextComponent
              title="Fixed item 3"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem quo distinctio necessitatibus consequatur porro aperiam nobis, esse illum labore repellendus molestias iusto facilis sunt, maiores voluptates. Dolor accusamus ipsa autem!"
              isIntersecting={isIntersecting}
            />
          ),
          indicator: Indicator,
        },
      ]}
    />
  );
};
