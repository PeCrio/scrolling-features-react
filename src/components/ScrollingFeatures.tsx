import React, { useEffect, useRef, useState } from "react";
import { FeatureItem, AdFeature } from "./FeatureItem";

type Props = {
  features?: AdFeature[];
};

const defaultBasicDemoFeaturesExample = [
  {
    id: "feature1",
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
  const featureList = features.map((feature) => ({
    ...feature,
    ref: useRef<HTMLDivElement>(null),
  }));
  // TODO: Consider adding a script to check if scrolled to the bottom to show all features

  const handleFeatureScrolling = () => {
    const bulletFaceElementTop =
      trackingBallRef?.current?.getBoundingClientRect().top ?? 700;

    document.querySelectorAll("#feature-item").forEach((featureElement) => {
      const featureElementTop = featureElement.getBoundingClientRect().top;
      const featureId = featureElement.getAttribute(
        "data-feature-id"
      ) as string;

      if (bulletFaceElementTop >= featureElementTop) {
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
    <div className="sfr-relative sfr-isolate lg:-sfr-mt-96">
      {/* Line divider */}
      <div
        className="sfr-w-[2px] sfr-translate-x-[-0.5px] sfr-h-full -sfr-z-10 sfr-absolute sfr-from-gray-200 sfr-left-0 lg:sfr-left-[50%] sfr-bg-repeat-y"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent, transparent 50%, var(--tw-gradient-from) 50%, var(--tw-gradient-from) 100%)",
          backgroundSize: "2px 10px",
        }}
      ></div>
      {/* Beginning Tracking line mask */}
      <div className="sfr-bg-gradient-to-b sfr-from-white sfr-via-white sfr-to-transparent sfr-via-[85%] sfr-top-0 sfr-inset-x-0 sfr-w-full sfr-h-64 sfr-absolute"></div>
      {/* Line follower */}
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
  );
};
