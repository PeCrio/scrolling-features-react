import React, { useEffect, useRef, useState } from "react";
import { FeatureItem, AdFeature } from "./FeatureItem";

type Props = {
  features?: AdFeature[];
};

const defaultdemoFeatures = [
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

export const FeatureScroller: React.FC<Props> = ({
  features = defaultdemoFeatures,
}) => {
  const [intersectingEntries, setIntersectingEntries] = useState<
    Record<string, boolean>
  >({});
  const bulletFaceRef = useRef<HTMLDivElement>(null);
  const featureList = features.map((feature) => ({
    ...feature,
    ref: useRef<HTMLDivElement>(null),
  }));
  // TODO: Consider adding a script to check if scrolled to the bottom to show all features

  const handleFeatureScrolling = () => {
    const bulletFaceElementTop =
      bulletFaceRef?.current?.getBoundingClientRect().top ?? 700;

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
    <div className="fsr-relative fsr-isolate lg:-fsr-mt-80">
      {/* Line divider */}
      <div
        className="fsr-w-[2px] fsr-translate-x-[-0.5px] fsr-h-full -fsr-z-10 fsr-absolute fsr-from-gray-200 fsr-left-0 lg:fsr-left-[50%] fsr-bg-repeat-y"
        style={{
          backgroundImage: `linear-gradient(
          180deg,
          transparent,
          transparent 50%,
          var(--fsr-gradient-from) 50%,
          var(--fsr-gradient-from) 100%
        )`,
          backgroundSize: "2px 10px",
        }}
      ></div>
      {/* Top line follower mask */}
      <div className="fsr-bg-gradient-to-b fsr-from-white fsr-via-white fsr-to-transparent fsr-via-[85%] fsr-top-0 fsr-inset-x-0 fsr-w-full fsr-h-64 fsr-absolute"></div>
      {/* Line follower */}
      <div className="fsr-w-[2px] fsr-translate-x-[-0.5px] fsr-h-64 -fsr-z-10 fsr-sticky fsr-top-0 fsr-bg-blue-600 fsr-left-4 lg:fsr-left-[50%] fsr-hidden lg:fsr-block"></div>
      {/* Bullet face */}
      <div
        ref={bulletFaceRef}
        // className="fsr-transition fsr-duration-300 fsr-w-7 fsr-h-7 fsr-z-20 fsr-translate-x-[-0.875rem] fsr-sticky fsr-top-[37%] lg:fsr-top-64 fsr-left-4 lg:fsr-left-[50%] fsr-rounded-full fsr-border-2 fsr-border-white fsr-ring-blue-500 fsr-ring fsr-bg-blue-500 lg:fsr-block fsr-invisible lg:fsr-visible"
        className="fsr-transition fsr-duration-300 fsr-w-7 fsr-h-7 fsr-z-20 fsr-translate-x-[-0.875rem] fsr-sticky fsr-top-[37%] lg:fsr-top-64 fsr-left-4 lg:fsr-left-[50%] fsr-rounded-full fsr-border-2 fsr-border-white fsr-ring-blue-500 fsr-ring fsr-bg-blue-500 lg:fsr-block fsr-invisible lg:fsr-visible"
      >
        <div
          id="ball"
          // className="fsr-w-full fsr-h-full fsr-bg-blue-900 fsr-rounded-full"
        ></div>
        {/* <div className="fsr-w-full fsr-h-full fsr-bg-blue-900 fsr-rounded-full"></div> */}
      </div>
      {/* Feature listing */}
      <div className="-fsr-mt-4">
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
