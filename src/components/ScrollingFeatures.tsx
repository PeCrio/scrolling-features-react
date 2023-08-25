import React, { useEffect, useMemo, useRef, useState } from "react";
import { FeatureItem, AdFeature } from "./FeatureItem";
import "../index.css";

// TODO: Add prop for line and ball color
type Props = {
  features?: AdFeature[];
};

const defaultBasicDemoFeaturesExample: Props["features"] = [
  {
    title: "Example Title",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          vitae asperiores non deserunt possimus impedit aliquam quae ullam
          ipsam, voluptate nam in itaque voluptatibus? Praesentium odit a
          aliquam quod debitis`,
    imageUrl: "https://placehold.co/600x400",
  },
];

export const ScrollingFeatures: React.FC<Props> = ({
  features = defaultBasicDemoFeaturesExample,
}) => {
  const [intersectingEntries, setIntersectingEntries] = useState<
    Record<string, boolean>
  >({});
  const trackingBallRef = useRef<HTMLDivElement>(null);

  function generateId() {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 10) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  const featureList = useMemo(
    () =>
      features?.map((feature) => ({
        ...feature,
        id: generateId(),
      })),
    [features]
  );

  // TODO: Consider adding a script to check if scrolled to the bottom to show all features

  const handleFeatureScrolling = () => {
    const trackingBallElementTop =
      trackingBallRef?.current?.getBoundingClientRect().top ?? 700;

    document
      .querySelectorAll("#sfr-feature-list-item")
      .forEach((featureElement) => {
        const featureElementTop = featureElement.getBoundingClientRect().top;
        const featureId = featureElement.getAttribute(
          "data-feature-id"
        ) as string;

        if (trackingBallElementTop >= featureElementTop) {
          setIntersectingEntries({
            [featureId]: true,
          });
        }
      });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleFeatureScrolling);
    setIntersectingEntries({ [featureList[0].id]: true });

    return () => {
      window.removeEventListener("scroll", handleFeatureScrolling);
    };
  }, []);

  return (
    <div style={{ contain: "paint" }}>
      <div className="sfr-relative sfr-isolate sfr-z-0 -sfr-mt-48 sfr-mb-6">
        {/* Line divider */}
        <div
          id="line-divider"
          className="sfr-w-[2px] sfr-translate-x-[-0.5px] sfr-h-full -sfr-z-10 sfr-absolute sfr-from-gray-200 sfr-left-0 lg:sfr-left-[50%] sfr-bg-repeat-y"
          style={{
            backgroundImage:
              "linear-gradient(180deg, transparent, transparent 50%, var(--tw-gradient-from) 50%, var(--tw-gradient-from) 100%)",
            backgroundSize: "2px 10px",
          }}
        ></div>
        {/* Beginning tracking line mask */}
        <div className="sfr-bg-gradient-to-b sfr-from-white sfr-via-white sfr-to-transparent sfr-via-[85%] sfr-top-0 sfr-inset-x-0 sfr-h-64 sfr-absolute sfr-w-[4px] sfr-translate-x-[-2px] lg:sfr-left-[50%]"></div>
        {/* Tracking line */}
        <div className="sfr-w-[2px] sfr-translate-x-[-0.5px] sfr-h-64 -sfr-z-10 sfr-sticky sfr-top-0 sfr-bg-blue-600 sfr-left-4 lg:sfr-left-[50%] sfr-hidden lg:sfr-block"></div>
        {/* Tracking ball */}
        <div
          ref={trackingBallRef}
          className="sfr-transition sfr-duration-300 sfr-w-7 sfr-h-7 sfr-z-20 sfr-translate-x-[-0.875rem] sfr-sticky sfr-top-[37%] lg:sfr-top-64 sfr-left-4 lg:sfr-left-[50%] sfr-rounded-full sfr-border-2 sfr-border-white sfr-ring-blue-500 sfr-ring sfr-bg-blue-500 lg:sfr-block sfr-invisible lg:sfr-visible"
        >
          <div id="ball"></div>
        </div>
        {/* Feature listing */}
        <div className="-sfr-mt-4">
          {featureList &&
            featureList.map((feature) => (
              <FeatureItem
                key={feature.id}
                feature={feature}
                intersectingEntries={intersectingEntries}
              ></FeatureItem>
            ))}
        </div>
      </div>
    </div>
  );
};
