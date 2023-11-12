import React, { ReactNode, useEffect, useRef, useState } from "react";
import { FeatureItem, AdFeature, FeatureListItem } from "./FeatureItem";
import "../index.css";

type Props = {
  features: AdFeature[];
  trackingBall?: ReactNode;
  trackingLineColor?: string;
  trackingLineFadeColor?: string;
  lineTrail?: ReactNode;
};

export const ScrollingFeatures: React.FC<Props> = ({
  features = [],
  trackingBall: customTrackingBall,
  trackingLineFadeColor,
  trackingLineColor = "blue",
  lineTrail: customLineTrail,
}) => {
  const [intersectingEntries, setIntersectingEntries] = useState<
    Record<string, boolean>
  >({});

  const [featureList, setFeatureList] = useState<FeatureListItem[]>([]);
  const [showAll, setShowAll] = useState(false);
  const trackingBallRef = useRef<HTMLDivElement>(null);

  const generateId = () => {
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
  };

  const handleFeatureScrolling = () => {
    const trackingBallElementTop =
      trackingBallRef?.current?.getBoundingClientRect().top ?? 700;

    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollingFeatureItems = document.querySelectorAll(
      "#sfr-feature-list-item"
    );

    scrollingFeatureItems.forEach((featureElement) => {
      const featureElementTop = featureElement.getBoundingClientRect().top;
      const featureId = featureElement.getAttribute(
        "data-feature-id"
      ) as string;

      if (window.scrollY >= scrollableHeight) {
        setShowAll(true);
        setIntersectingEntries((prevItems) => ({
          ...prevItems,
          [featureId]: true,
        }));
      } else if (trackingBallElementTop >= featureElementTop) {
        setShowAll(false);
        setIntersectingEntries({
          [featureId]: true,
        });
      }
    });
  };

  useEffect(() => {
    window && window.addEventListener("scroll", handleFeatureScrolling);

    if (features.length) {
      const newFeatureList = features.map((feature) => ({
        ...feature,
        id: generateId(),
      }));

      setFeatureList(newFeatureList);
      setIntersectingEntries({ [newFeatureList[0].id]: true });
    }

    return () => {
      window.removeEventListener("scroll", handleFeatureScrolling);
    };
  }, []);

  if (!features.length) {
    return null;
  }

  return (
    <div id="package-mask">
      <div className="sfr-relative sfr-isolate sfr-z-0 lg:-sfr-mt-48">
        {/* Line trail */}
        <div className="sfr-flex lg:sfr-justify-center -sfr-z-10 sfr-w-full sfr-h-full sfr-absolute sft-top-0 ">
          {customLineTrail ? (
            customLineTrail
          ) : (
            <div
              className="sfr-w-[2px] -sfr-translate-x-[50%] lg:sfr-translate-x-0 sfr-h-full sfr-from-gray-300 sfr-bg-repeat-y"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, transparent, transparent 50%, var(--tw-gradient-from) 50%, var(--tw-gradient-from) 100%)",
                backgroundSize: "2px 10px",
              }}
            ></div>
          )}
        </div>
        {/* Beginning tracking line mask */}
        {trackingLineFadeColor && (
          <div
            className={`sfr-bg-gradient-to-b sfr-hidden lg:sfr-block sfr-top-0 sfr-inset-x-0 sfr-h-64 sfr-absolute sfr-w-[4px] sfr-translate-x-[-2px] lg:sfr-left-[50%]`}
            style={{
              background: `linear-gradient(${trackingLineFadeColor} 75%, transparent)`,
            }}
          ></div>
        )}
        {/* Desktop tracking line */}
        <div
          className={`sfr-sticky lg:sfr-flex sfr-hidden lg:sfr-visible lg:sfr-justify-center -sfr-z-10 ${
            showAll ? "sfr-top-0" : "sfr-top-0"
          }`}
        >
          <div
            className="sfr-w-[2px] sfr-h-64"
            style={{ backgroundColor: trackingLineColor }}
          ></div>
        </div>
        {/* Tracking ball */}
        <div
          ref={trackingBallRef}
          className={`sfr-z-20 sfr-sticky lg:sfr-flex sfr-invisible lg:sfr-visible sfr-justify-center sfr-transform sfr-transition-all sfr-duration-700 ${
            showAll
              ? "lg:sfr-top-[100%] lg:sfr-w-full"
              : "sfr-top-[37%] lg:sfr-top-64"
          }`}
        >
          {customTrackingBall ? (
            customTrackingBall
          ) : (
            <div className="sfr-w-7 sfr-h-7 sfr-rounded-full sfr-border-2 sfr-border-white sfr-ring-blue-500 sfr-ring">
              <div id="ball"></div>
            </div>
          )}
        </div>
        {/* Feature listing */}
        <div className="-sfr-mt-7">
          {featureList &&
            featureList.map((feature) => (
              <FeatureItem
                key={feature.id}
                feature={feature}
                intersectingEntries={intersectingEntries}
                trackingLineColor={trackingLineColor}
                showAll={showAll}
              ></FeatureItem>
            ))}
        </div>
      </div>
    </div>
  );
};
